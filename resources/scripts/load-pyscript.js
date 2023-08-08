$(document).ready(function(){
    $(".run-code-button").click(function() {
        // Disable button to prevent calling handler multiple times
        $(this).attr("disabled", true)
        console.log($(this).attr("disabled"))

        var exercise_num = this.id

        // Display the terminal icon
        $(".terminal").css({"display":"none"})
        $(".loading-python").css({"display":"block"})

        // Clear output on click
        if (document.getElementById(exercise_num+"_solution")){
            document.getElementById(exercise_num+"_solution").innerHTML = ""
        }

        // Python code url
        var url = "https://raw.githubusercontent.com/reza-nugraha32/geophysics-wiki/main/courses/en/TG2105/codes/"+exercise_num+".py"
        console.log(url)

        // Create solution container
        solution = document.createElement("div")
        solution.className = "python-output"
        solution.id = exercise_num+"_solution"

        // Append to parent container
        container = document.getElementById(exercise_num+"_container")
        container.appendChild(solution)

        var code = null

        // Fetch python code
        fetch(url)
            .then(response => response.text())
            .then(result => {
                code = result  
                var pycode = 
`<py-script>
${code}
</py-script>`

                console.log(pycode)

                //Change inner HTML
                solution.innerHTML = pycode

                // Append to parent container
                container.appendChild(solution);
        });
        
        // Append PyScript to document
        css_link = document.createElement("link")
        css_link.rel = "stylesheet"
        css_link.type = "text/css"
        css_link.href = "https://pyscript.net/latest/pyscript.css"
        document.getElementsByTagName("head")[0].appendChild(css_link)
        
        pyscript_config = document.createElement("div")
        pyscript_config.className = "pyscript_config"
        pyscript_config.innerHTML = `
        <py-config>
        [splashscreen]
            enabled = false
        </py-config>
        `

        pyscript_script = document.createElement("script")
        pyscript_script.src = "https://pyscript.net/latest/pyscript.js"
        if (!$(document).find(pyscript_script).length){
            document.body.append(pyscript_config)
            document.body.append(pyscript_script)
        }

        // Restore button functionality
        $(this).attr("disabled", false)
        console.log($(this).attr("disabled"))

        // Display the terminal icon
        pyscriptLoaded = false

        // Store the original console.log function
        const originalConsoleLog = console.info;
        
        // Override the console.log function with a custom one
        console.info = function (message) {
          originalConsoleLog.apply(console, arguments); // Call the original console.log function
        
          if (message.includes('PyScript page fully initialized')) {
            pyscriptLoaded = true;
            console.log = originalConsoleLog;
          }
        };

        setTimeout(py_inited);

        function py_inited() {
            if (pyscriptLoaded){
                $(".loading-python").css({"display":"none"})
            $(".terminal").css({"display":"block"})
            console.log("PyScript done executing")
            clearTimeout()
            }
        };
    });
});



