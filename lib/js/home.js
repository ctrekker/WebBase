(function(){
    //ALL DECLARATIONS IN HERE!
    //Need to access global scope? Use [object window] for global read and write
    window.onload=function() {
        var canvas=document.getElementById("canvas");
        var c=canvas.getContext("2d");

        c.fillStyle="red";
        c.fillRect(10, 10, 100, 100);
    }
}());
