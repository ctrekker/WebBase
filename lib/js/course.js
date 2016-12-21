(function(){
    window.onload=function() {window.onhashchange();}
    window.onhashchange=function() {
        var hash=window.location.hash.replace("#/", "").split("/");
        //course ID
        var cid=hash[0].toLowerCase();
        //page #
        var page=hash[2];

        window.ajax.get("../../lib/server/course.php", {
            id: cid,
            page: page
        }, function(data) {
            var sidebar=document.getElementsByClassName("course-vnav")[0];
            var coursebody=document.getElementsByClassName("course-content-container")[0];

            data=JSON.parse(data);

            //Push navbar content after destroying previous content
            sidebar.removeChild(sidebar.firstElementChild);
            var courseList=document.createElement("div");
            courseList.setAttribute("class", "course-list");
            sidebar.appendChild(courseList);

            //CHECK FOR ERRORS
            if(data.responseType=="CONTENT") {
                var content=data.content;
                var title=data.title.replace(/\n/g, "");
                var navigation=[];

                for(var i=0; i<data.navigation.length; i++) {
                    navigation.push({title: data.navigation[i].title.replace(/\n/g, ""), hash: data.navigation[i].hash});
                }
                
                //Create course title
                content="<h2>"+title+"</h2>\n"+content;

                //Put character codes in instead of < or > (manual)
                content=content.replace(/<l>/g, "&lt;");
                content=content.replace(/<g>/g, "&gt;");

                var contentContainer=document.getElementsByClassName("course-content-container")[0];
                contentContainer.innerHTML=content;

                for(var i=0; i<navigation.length; i++) {
                    var navElement=document.createElement("a");
                    navElement.setAttribute("class", "link"+(navigation[i].title==title?" nav-selected":""));
                    navElement.setAttribute("link", "NONE");
                    navElement.setAttribute("href", navigation[i].hash);
                    navElement.appendChild(document.createTextNode(navigation[i].title));

                    sidebar.firstElementChild.appendChild(navElement);
                }

                var codes=document.getElementsByTagName("pre");
                for(var i=0; i<codes.length; i++) {
                    codes[i].innerHTML=codes[i].innerHTML
                        .replace(/<!--/g, "")
                        .replace(/-->/g, "")
                        .replace(/<!C--/g, "<!--")
                        .replace(/--C>/g, "-->")
                        .replace(/</g, "&lt;")
                        .replace(/>/g, "&gt;")
                        ;
                }
            }
            else if(data.responseType="ERROR") {
                var contentContainer=document.getElementsByClassName("course-content-container")[0];
                contentContainer.innerHTML=data.message;
            }

            //Setup sidebar height
            sidebar.style.height=null;
            coursebody.style.height=null;
            sidebar.style.height=((Math.max(sidebar.offsetHeight, coursebody.offsetHeight)+60).toString())+"px";
            console.log(windowLoaded);
            console.log(sidebar.style.height);
            setTimeout(function() {
                console.log(((Math.max(sidebar.offsetHeight, coursebody.offsetHeight)+60).toString())+"px");
            }, 1000);
        });
    }
}());