(()=>{

    // Lista de URLs guardadas
    let urls = [];

    // Referencia a la lista UL para mostrar las URLs
    let ulLista = null;



    

    function leerUrls() {
        
        // En el Storage sólo se pueden guardar strings
        let strUrls = localStorage.getItem("urls");
        
        // El array está separado por punto-y-comas
        urls = strUrls? strUrls.split(";") : [];
        
    };

    
    function guardarUrls() {
        localStorage.setItem("urls", [...new Set(urls)].join(";"));
    };

    
    function mostrarUrls() {
        if(ulLista) {

            // Borramos la lista actual
            ulLista.innerHTML = urls.map(url => {
                return `<li>${url}</li>`;
            }).join("");
            
        }
    };

    
    function crearUi() {
        
        // Creamos un DIV para meter dentro lo necesario
        let div = document.createElement("div");
        div.setAttribute("id", "urls");
        div.innerHTML = `<div class="titulo">Lista de URLs</div><div class="lista"><ul id="urls_lista"></ul></div>`;
        
        // Creamos ahora un STYLE para darle los estilos
        let style = document.createElement("style");
        style.setAttribute("id", "urls_styles");
        let estilos = "";
        estilos += "#urls { position: absolute; left: 10px; top: 10px; width: 300px; border: 1px solid #aaa; }";
        estilos += "#urls > div.titulo { background:#ddd; padding: 2px 5px; cursor: hand; }";
        estilos += "#urls > div.lista { background: #eee; display:none; padding: 2px 5px; }";
        estilos += "#urls > div.lista > ul { margin: 0; }";
        estilos += "#urls:hover > div.lista { display: block !important; }";
        style.innerText = estilos;

        // Metemos en el body ambas cosas
        document.body.appendChild(div);
        document.body.appendChild(style);

        // Cogemos referencia a la lista UL
        ulLista = document.getElementById("urls_lista");
        
        
    };

        
    function eliminarUi() {
        
        // Vemos si ya está creado y si es así lo destruimos
        let existe_urls = document.getElementById("urls");
        if(existe_urls) existe_urls.remove();
        let existe_styles = document.getElementById("urls_styles");
        if(existe_styles) existe_styles.remove();

        // Borramos referencia a la lista UL
        ulLista = null;
        
    }

    
    /*
    let url = window.location.href;
    let urls = localStorage.getItem("urls");
    urls = urls? urls.split(";") : [];
    urls.push(url);
    localStorage.setItem("urls", [...new Set(urls)].join(";"));
    console.log(localStorage.getItem("urls"));
    */

  
    // Arrancamos...
    eliminarUi();
    crearUi();
    leerUrls();
    mostrarUrls();
    
})();
