(function(){
    //ALL DECLARATIONS IN HERE!
    //Need to access global scope? Use [object window] for global read and write
    window.onload=function() {
        var links=document.getElementsByClassName("link");
        for(var i=0; i<links.length; i++) {
            links[i].addEventListener("mousedown", function(e) {
                var url=e.target.getAttribute("link");
                if(url=="signin") {

                }
                else if(url=="signup") {

                }
                else {
                    window.location=url;
                }
            });
        }
    }
    window.cleanup=function() {
        var temps=document.getElementsByClassName("temp-script");
        for(var i=0; i<temps.length; i++) {
            temps[i].parentNode.removeChild(temps[i]);
        }
    }
}());
