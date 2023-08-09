// Add and initialize PyScript to document
$(document).ready(function(){
    // Disable PyScript default splash screen
    pyscript_config = document.createElement("div")
    pyscript_config.className = "pyscript_config"
    pyscript_config.innerHTML = `
    <py-config>
    [splashscreen]
        enabled = false
    </py-config>
    `
    document.body.append(pyscript_config)

    // Append PyScript CSS link
    css_link = document.createElement("link")
    css_link.rel = "stylesheet"
    css_link.type = "text/css"
    css_link.href = "https://pyscript.net/latest/pyscript.css"
    document.getElementsByTagName("head")[0].appendChild(css_link)

    $(".run-code-button").click(function() {
        // Disable button to prevent calling handler multiple times
        $(this).attr("disabled", true)
        console.log($(this).attr("disabled"))

        // Get id of a specific code to run 
        var exercise_num = this.id

        // Display the terminal icon
        $(".terminal").css({"display":"none"})
        $(".loading-python").css({"display":"block"})

        // Clear output on click
        if (document.getElementById(exercise_num+"_solution")){
            document.getElementById(exercise_num+"_solution").innerHTML = ""
        }

        // Create solution container as the output terminal
        solution = document.createElement("div")
        solution.className = "python-output"
        solution.id = exercise_num+"_solution"

        container = document.getElementById(exercise_num+"_container")
        container.appendChild(solution)

        // Set timeout for "Loading PyScript" message
        // Store the original console.log function
        const originalConsoleLog = console.info;
        var pyscriptLoaded = false

        // Override the console.log function with a custom one
        console.info = function (message) {
            // Call the original console.log function
            originalConsoleLog.apply(console, arguments); 
        
            if (message.includes('PyScript page fully initialized')) {
                pyscriptLoaded = true;
                console.log("PyScript done executing")
                console.log = originalConsoleLog;
            }
        };

        // Hide the "Loading PyScript" message and display the terminal icon
        if (pyscriptLoaded){
            clearTimeout(loading)
        }

        var loading = setTimeout(function(){
            $(".loading-python").css({"display":"none"})
            $(".terminal").css({"display":"block"})
        });

        // Fetch Python code from Github Raw and append to output terminal to be parsed by PyScript
        // Note that the Python code below are not necessarily standard, written for PyScript in mind
        // Doing this to avoid cluttering the document 
        var url = "https://raw.githubusercontent.com/reza-nugraha32/geophysics-wiki/main/courses/en/TG2105/codes/"+exercise_num+".py"
        console.log(url)
        
        var code = null

        fetch(url)
            .then(response => response.text())
            .then(result => {
                code = result  
                var pycode = 
`<py-script>
${code}
</py-script>`

                console.log(pycode)

                solution.innerHTML = pycode
                container.appendChild(solution)
        });

        // Restore button functionality
        $(this).attr("disabled", false)
        console.log($(this).attr("disabled"))
    });

    // Prevent PyScript tag to be appended more than once
    var counter = 1
    $(".run-code-button").one("click", function() {
        // Append PyScript to document
        pyscript_script = document.createElement("script")
        pyscript_script.src = "https://pyscript.net/latest/pyscript.js"
        document.body.append(pyscript_script)

        counter = counter+1
        
        if (counter > 1){
            document.body.removeChild(pyscript_script)
        }
    });
});



