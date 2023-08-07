function loadPyScript() {
    css_link = document.createElement("link")
    css_link.rel = "stylesheet"
    css_link.type = "text/css"
    css_link.href = "https://pyscript.net/latest/pyscript.css"
    document.getElementsByTagName("head")[0].appendChild(css_link)
    
    pyscript_script = document.createElement("script")
    pyscript_script.src = "https://pyscript.net/latest/pyscript.js"
    document.body.append(pyscript_script)
}