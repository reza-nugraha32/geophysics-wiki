$(document).ready(function(){
    $(".run-code-button").click(function() {
        var exercise_num = this.id 

        var url = "https://raw.githubusercontent.com/reza-nugraha32/geophysics-wiki/main/courses/en/TG2105/codes/"+exercise_num+".py"
        var code

        // Fetch python code
        fetch(url)
            .then(response => response.text())
            .then(result => code = result);
        
        console.log(code)

        var pycode = `
<py-script>
${code}
</py-script> 
        `;
        
        console.log(pycode)
        
        // Create solution container
        solution = document.createElement("div")
        solution.className = "python-output"
        solution.id = exercise_num+"_solution"
        solution.innerHTML = pycode
        
        // Append to parent container
        container = document.getElementById(exercise_num+"_container")
        container.appendChild(solution)

        css_link = document.createElement("link")
        css_link.rel = "stylesheet"
        css_link.type = "text/css"
        css_link.href = "https://pyscript.net/latest/pyscript.css"
        document.getElementsByTagName("head")[0].appendChild(css_link)
        
        pyscript_script = document.createElement("script")
        pyscript_script.src = "https://pyscript.net/latest/pyscript.js"
        document.body.append(pyscript_script)
    });
});



