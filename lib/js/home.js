(function(){
    //ALL DECLARATIONS IN HERE!
    //Need to access global scope? Use [object window] for global read and write
    var signInContent;
    var signUpContent;
    window.onload=function() {
        var links=document.getElementsByClassName("link");
        //Popup content setup
        signInContent=document.createElement("div");
        var signInForm=document.createElement("form");
        var signInFields=document.createElement("div");
        var signInUsername=document.createElement("input");
        var signInPassword=document.createElement("input");
        var signInLabels=document.createElement("div");
        var signInUsernameLabel=document.createElement("label");
        var signInPasswordLabel=document.createElement("label");

        signInForm.setAttribute("class", "signin-form");

        signInUsername.setAttribute("name", "siUsername");
        signInPassword.setAttribute("name", "siPassword");

        signInUsername.setAttribute("type", "text");
        signInPassword.setAttribute("type", "password");

        signInUsernameLabel.appendChild(document.createTextNode("Username"));
        signInPasswordLabel.appendChild(document.createTextNode("Password"));

        signInFields.appendChild(signInUsername);
        signInFields.appendChild(signInPassword);
        signInLabels.appendChild(signInUsernameLabel);
        signInLabels.appendChild(signInPasswordLabel);

        signInForm.appendChild(signInLabels);
        signInForm.appendChild(signInFields);

        signInContent.appendChild(signInForm);
        for(var i=0; i<links.length; i++) {
            links[i].addEventListener("mousedown", function(e) {
                var url=e.target.getAttribute("link");
                if(url=="signin") {
                    window.popup("Sign In", signInContent, 350, 150);
                }
                else if(url=="signup") {
                    window.popup("Sign Up", signUpContent);
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
    window.popup=function(title, contentElement, width, height) {
        var popupParent=document.getElementsByClassName("popup-container")[0];

        var popup=document.createElement("div");
        var titleSpan=document.createElement("span");
        var contentSpan=document.createElement("span");

        popup.setAttribute("class", "popup");
        titleSpan.setAttribute("class", "popup-title");
        contentSpan.setAttribute("class", "popup-content");

        popup.setAttribute("style", "top: calc(50% - "+(height)+"px); left: calc(50% - "+(width/2)+"px); width: "+width+"px; height: "+height+"px;");

        titleSpan.appendChild(document.createTextNode(title));
        contentSpan.appendChild(contentElement);

        popup.appendChild(titleSpan);
        popup.appendChild(contentSpan);
        popupParent.appendChild(popup);

        var masker=document.getElementsByClassName("masker")[0];
        masker.setAttribute("style", "");
        masker.addEventListener("mousedown", function(e) {
            popup.parentElement.removeChild(popup);
            masker.setAttribute("style", "display: none")
        });
    }
}());
