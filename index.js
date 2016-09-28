//Set variables:
var exportcode = "";
var elementslint = "";
var textelement = "";
//end of set variables.
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    var y = document.getElementById(ev.target.id).innerHTML;
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if (data == "text") {
        var text = prompt("What text do you want here?",
            "ENTER YOUR TEXT HERE");
        if (text !== null) {
            document.getElementById(ev.target.id).innerHTML = y + text +
                "<br>";
            textelement = text + "  ";
            exportcode = exportcode + "<center>" + text + "<br>";
        }
    }
    if (data == "photo") {
        var pic = prompt("Leave a link to your picture here",
            "INSERT PHOTO LINK HERE");
        if (pic !== null) {
            document.getElementById(ev.target.id).innerHTML = y +
                "<img src='" + pic + "' />";
            exportcode = exportcode + "<img src='" + pic + "' />";
        }
    }
    if (data == "ytembed") {
        var x = prompt("YouTube Video ID", "iVSvuXeAxeE");
        if (x !== null) {
            document.getElementById(ev.target.id).innerHTML = y +
                "<iframe width=560 height=315 src=https://www.youtube.com/embed/" +
                x + " frameborder=" + 0 + " allowfullscreen><\/iframe>";
            exportcode = exportcode +
                "<iframe width=560 height=315 src=https://www.youtube.com/embed/" +
                x + " frameborder=" + 0 + " allowfullscreen><\/iframe>";
        }
    }
    if (data == "scratchembed") {
        var x = prompt("Project ID", "118225589");
        if (x !== null) {
            document.getElementById(ev.target.id).innerHTML = y +
                "<embed src=http://scratchv.usa.cc/dragon-drop.html?id=" +
                x + " width=485 height=395>";
            exportcode = exportcode +
                "<embed src=http://scratchv.usa.cc/dragon-drop.html?id=" +
                x + " width=485 height=395>"
        }
    }
    if (data == "html") {
        var text = prompt("What HTML do you want here?",
            "ENTER YOUR TEXT HERE");
        if (text !== null) {
            document.getElementById(ev.target.id).innerHTML = y + text;
            exportcode = exportcode + text;
        }
    }
    if (data == "link") {
        var linkie = prompt("Enter the website address", "http://");
        var linkietext = prompt("What should this link say?")
        document.getElementById(ev.target.id).innerHTML = y + "<a href=" +
            linkie + " > " + linkietext + " <\/a>";
        exportcode = exportcode + "<a  href=" + linkie +
            ">  Hyperlink <\/a>";
    }
}

function bgcolask() {
    var bgcolaskit = prompt("What do you want your background color to be?", "Enter a HEX value here");
    document.getElementById("div1").style.backgroundColor = bgcolaskit;
    addbgtoex();
}

function faviconask() {
    var faviconaskit = prompt(
        "Please leave a link to a favicon. If the file does not end with .ico , then the favicon will not change."
    );
    changeFavicon(faviconaskit);
}

function changeFavicon(link) {
    var $favicon = document.querySelector('link[rel="icon"]');
    if ($favicon !== null) {
        $favicon.href = link;
    } else {
        $favicon = document.createElement("link");
        $favicon.rel = "icon";
        $favicon.href = link;
        document.head.appendChild($favicon);
    }
}

function exportdacode() {
    prompt("Click CTRL+C or CMND+C to copy.", exportcode);
}

function addbgtoex() {
    exportcode = exportcode + "<style>body{background-color: " + bgcolaskit +
        "}<\/style>";
}

function templates() {
    alert2(
        "This feature will be commng out in future versions.<br> For now, you have to make your own website."
    );
}

function submit() {
    alert2(
        "This feature will be commng out in future versions.<br> For now, you can use the export code button."
    );
}

function closedialogue() {
    document.getElementById('dialogue').style.visibility = 'hidden';
    alertedtext = "";
}

function alert2(alertedtext) {
    document.getElementById('dialogue').style.visibility = 'visible';
    document.getElementById('dialoguetext').innerHTML = alertedtext;
}

function previewIt() {
    var html = document.getElementById("div1").innerHTML;
    var dataURI = 'data:text/html,' + encodeURIComponent(html);
    window.open(dataURI);
}
