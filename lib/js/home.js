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
        var signInButtons;

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
                    signInButtons=[
                        ["Cancel", function(e) {
                            window.destroyPopup(e.path[4]);
                        }, true],
                        ["Log In", function(e) {
                            var content=document.createElement("div");
                            content.appendChild(document.createTextNode("This service is not currently available. Please remember that this website is still under heavy development. Thank You! (If you are here for rating pages, this should not count against your score, as you are judging style and not functionality.)"))
                            window.popup("Service Not Available", content, undefined, 260, window.popup.DEFAULT_ALERT);
                        }]
                    ];
                    window.popup("Sign In", signInContent, 350, 150, signInButtons);
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
    window.popup=function(title, contentElement, width, height, buttons) {
        width=o(width, 350);
        height=o(height, 150);

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

        var innerContent=contentSpan.children[0];

        while(innerContent.children.length>1) {
            innerContent.removeChild(innerContent.lastChild);
        }
        var buttonDiv=document.createElement("div");
        buttonDiv.setAttribute("class", "popup-buttons");
        for(var i=0; i<buttons.length; i++) {
            var link=document.createElement("span");
            link.setAttribute("class", "popup-button "+(buttons[i][2]==true?"link":"button"));
            link.appendChild(document.createTextNode(buttons[i][0]));
            link.addEventListener("click", buttons[i][1]);

            buttonDiv.appendChild(link);
        }
        var formBreak=document.createElement("hr");
        formBreak.setAttribute("class", "popup-button-break");
        innerContent.appendChild(formBreak);
        innerContent.appendChild(buttonDiv);

        popup.appendChild(titleSpan);
        popup.appendChild(contentSpan);
        popupParent.appendChild(popup);

        var maskerContainer=document.getElementsByClassName("masker-container")[0];
        var masker=document.createElement("div");
        masker.setAttribute("class", maskerContainer.children.length>0?"passive-masker":"masker");
        masker.setAttribute("style", "");
        maskerContainer.appendChild(masker);
        masker.onmousedown=function(e) {
            window.destroyPopup(popup);
        };

        popup.setAttribute("init", "true");

        return popup;
    }
    window.popup.DEFAULT_ALERT=[
        ["OK", function(e) {
            window.destroyPopup(e.path[4]);
        }]
    ];
    window.destroyPopup=function(popup) {
        var maskerContainer=document.getElementsByClassName("masker-container")[0];
        var masker=maskerContainer.lastChild;
        popup.parentElement.removeChild(popup);
        masker.remove();
    }

    //DO NOT MAKE PUBLIC (in global scope)!!
    var ajax = {};
    ajax.x = function () {
        if (typeof XMLHttpRequest !== 'undefined') {
            return new XMLHttpRequest();
        }
        var versions = [
            "MSXML2.XmlHttp.6.0",
            "MSXML2.XmlHttp.5.0",
            "MSXML2.XmlHttp.4.0",
            "MSXML2.XmlHttp.3.0",
            "MSXML2.XmlHttp.2.0",
            "Microsoft.XmlHttp"
        ];

        var xhr;
        for (var i = 0; i < versions.length; i++) {
            try {
                xhr = new ActiveXObject(versions[i]);
                break;
            } catch (e) {
            }
        }
        return xhr;
    };

    ajax.send = function (url, callback, method, data, async) {
        if (async === undefined) {
            async = true;
        }
        var x = ajax.x();
        x.open(method, url, async);
        x.onreadystatechange = function () {
            if (x.readyState == 4) {
                callback(x.responseText)
            }
        };
        if (method == 'POST') {
            x.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        }
        x.send(data)
    };

    ajax.get = function (url, data, callback, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
    };

    ajax.post = function (url, data, callback, async) {
        var query = [];
        for (var key in data) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
        ajax.send(url, callback, 'POST', query.join('&'), async)
    };
    function o(p, s) {
        return typeof p=="undefined"?s:p;
    }
}());
