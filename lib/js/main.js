(function(){
    //ALL DECLARATIONS IN HERE!
    //Need to access global scope? Use [object window] for global read and write
    var signInContent;
    var signUpContent;
    window.onload=function() {
        var links=document.getElementsByClassName("link");
        //Popup content setup
        //Sign in popup
        signInContent=document.createElement("div");
        var signInForm=document.createElement("form");
        var signInFields=document.createElement("div");
        var signInUsername=document.createElement("input");
        var signInPassword=document.createElement("input");
        var signInLabels=generateLabels(["Username", "Password"]);
        var signInButtons;

        signInForm.setAttribute("class", "signin-form");

        signInUsername.setAttribute("name", "siUsername");
        signInPassword.setAttribute("name", "siPassword");

        signInUsername.setAttribute("type", "text");
        signInPassword.setAttribute("type", "password");

        signInFields.appendChildren([signInUsername, signInPassword]);

        signInForm.appendChildren([signInLabels, signInFields]);

        signInContent.appendChild(signInForm);


        //Sign up popup
        var signUpContent=document.createElement("div");
        var signUpForm=document.createElement("form");
        var signUpFields=document.createElement("div");
        var signUpFirst=document.createElement("input");
        var signUpLast=document.createElement("input");
        var signUpEmail=document.createElement("input");
        var signUpUsername=document.createElement("input");
        var signUpPassword=document.createElement("input");
        var signUpPasswordC=document.createElement("input");
        var signUpLabels=generateLabels(["First Name", "Last Name", "Email", "Username", "Password", "Confirm Password"]);

        signUpForm.setAttribute("class", "signup-form");

        signUpFirst.setAttribute("name", "suFirst");
        signUpLast.setAttribute("name", "suLast");
        signUpEmail.setAttribute("name", "suEmail");
        signUpUsername.setAttribute("name", "suUsername");
        signUpPassword.setAttribute("name", "suPassword");
        signUpPasswordC.setAttribute("name", "suPasswordC");

        signUpFirst.setAttribute("type", "text");
        signUpLast.setAttribute("type", "text");
        signUpEmail.setAttribute("type", "text");
        signUpUsername.setAttribute("type", "text");
        signUpPassword.setAttribute("type", "password");
        signUpPasswordC.setAttribute("type", "password");

        signUpFields.appendChildren([signUpFirst, signUpLast, signUpEmail, signUpUsername, signUpPassword, signUpPasswordC]);

        signUpForm.appendChildren([signUpLabels, signUpFields]);

        signUpContent.appendChild(signUpForm);

        for(var i=0; i<links.length; i++) {
            links[i].addEventListener("mousedown", function(e) {
                var url=e.target.getAttribute("link");
                if(url=="signin") {
                    signInButtons=[
                        ["Cancel", window.popup.DESTROY_METHOD, true],
                        ["Sign In", function(e) {
                            //TEMPORARY
                            var content=document.createElement("div");
                            content.appendChild(document.createTextNode("This service is not currently available. Please remember that this website is still under heavy development. Thank You! (If you are here for rating pages, this should not count against your score, as you are judging style and not functionality.)"))
                            window.popup("Service Not Available", content, undefined, 260, window.popup.DEFAULT_ALERT);
                        }]
                    ];
                    window.popup("Sign In", signInContent, 350, 150, signInButtons);
                }
                else if(url=="signup") {
                    signUpButtons=[
                        ["Cancel", window.popup.DESTROY_METHOD, true],
                        ["Make Account", function(e) {
                            //TEMPORARY
                            var content=document.createElement("div");
                            content.appendChild(document.createTextNode("This service is not currently available. Please remember that this website is still under heavy development. Thank You! (If you are here for rating pages, this should not count against your score, as you are judging style and not functionality.)"))
                            window.popup("Service Not Available", content, undefined, 260, window.popup.DEFAULT_ALERT);
                        }]
                    ];
                    window.popup("Sign Up", signUpContent, 415, 243, signUpButtons);
                }
                else {
                    window.location=url;
                }
            });
        }
    }
    function generateLabels(strings) {
        strings=o(strings, []);
        var container=document.createElement("div");
        for(var i=0; i<strings.length; i++) {
            var label=document.createElement("label");
            label.appendChild(document.createTextNode(strings[i]));
            container.appendChild(label);
        }
        return container;
    }
    HTMLElement.prototype.appendChildren=function(children) {
        for(var i=0; i<children.length; i++) {
            this.appendChild(children[i]);
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

        popup.setAttribute("style", "top: "+(window.innerHeight/2.5-height/2)+"px; left: calc(50% - "+(width/2)+"px); width: "+width+"px; height: "+height+"px;");

        titleSpan.appendChild(document.createTextNode(title));

        var closeContainer=document.createElement("div");
        closeContainer.setAttribute("class", "popup-close-button-container");
        closeContainer.onmouseover=function(e) {
            e.src=window.popup.EXIT_HOVER;
        }
        closeContainer.onmouseout=function(e) {
            e.src=window.popup.EXIT_DEFAULT;
        }
        var closeButton=document.createElement("img");
        closeButton.setAttribute("class", "popup-close-button");
        closeButton.setAttribute("src", "./res/images/exit_lightgray.png");
        
        closeContainer.appendChild(closeButton);
        titleSpan.appendChild(closeContainer);

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
    window.popup.DESTROY_METHOD=function(e) {
        window.destroyPopup(e.path[4]);
    }
    window.popup.EXIT_HOVER="./res/images/exit_white.png";
    window.popup.EXIT_DEFAULT="./res/images/exit_lightgray.png";
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
