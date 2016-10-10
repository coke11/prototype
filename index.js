function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//Set variables:
var exportcode = "<style>body{font-family:helvetica;}</style>";
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
            document.getElementById(ev.target.id).innerHTML = y + "<div id='dd-text-edit-tf' contenteditable>This is a text box <i>Enter text here...</i></div>" + "<br>";
            exportcode = exportcode + "<div id='dd-text'>This is a text box <i>Enter text here...</i></div>" + "<br>";
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
        swal({
                title: "Youtube Embed",
                text: "Enter a Youtube video ID",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "oykOAfgbiZ4"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Please enter a Youtube video ID.");
                    return false
                }
                document.getElementById(ev.target.id).innerHTML = y +
                    "<iframe width=560 height=315 src=https://www.youtube.com/embed/" +
                    inputValue + " frameborder=" + 0 + " allowfullscreen><\/iframe>";
                exportcode = exportcode +
                    "<iframe width=560 height=315 src=https://www.youtube.com/embed/" +
                    inputValue + " frameborder=" + 0 + " allowfullscreen><\/iframe>";
                swal({
                    title: "Yay!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
            });
    }
    if (data == "scratchembed") {
        swal({
                title: "Scratch Embed",
                text: "Enter a Scratch project ID",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "118988263"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Please enter a scratch project ID");
                    return false
                }
                document.getElementById(ev.target.id).innerHTML = y +
                    '<div onclick="change_project()" style="padding:20px;"><iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' +
                    inputValue + '?autostart=false" frameborder="0" allowfullscreen></iframe></div>';
                exportcode = exportcode +
                    '<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' +
                    inputValue + '?autostart=false" frameborder="0" allowfullscreen></iframe>'
                swal({
                    title: "Yay!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
            });
    }
    function change_project() {
        swal({
                title: "Scratch Embed Change",
                text: "Enter a Scratch project ID",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "118988263"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Please enter a scratch project ID");
                    return false
                }
                document.getElementById(ev.target.id).innerHTML = y +
                    '<div onclick="change_project()" style="padding:20px;"><iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' +
                    inputValue + '?autostart=false" frameborder="0" allowfullscreen></iframe></div>';
                exportcode = exportcode +
                    '<iframe allowtransparency="true" width="485" height="402" src="https://scratch.mit.edu/projects/embed/' +
                    inputValue + '?autostart=false" frameborder="0" allowfullscreen></iframe>'
                swal({
                    title: "Yay!",
                    text: "Element changed!",
                    type: "success",
                    timer: 2000,
                    showConfirmButton: true
                });
            });
    }
    if (data == "html") {
        swal({
                title: "HTML",
                text: "Enter some HTML for your site",
                type: "input",
                showCancelButton: true,
                closeOnConfirm: false,
                animation: "slide-from-top",
                inputPlaceholder: "<!DOCTYPE html>"
            }, function(inputValue) {
                if (inputValue === false) return false;
                if (inputValue === "") {
                    swal.showInputError("Please enter some HTML");
                    return false
                }
                document.getElementById(ev.target.id).innerHTML = y + inputValue;
                exportcode = exportcode + inputValue;
                swal({
                    title: "Yay!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
            });
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
    swal({
            title: "Background-color",
            text: "Enter a HEX value or a color name (an RGB Value).",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "blue"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("Please enter a color!!");
                return false
            }
            document.getElementById("div1").style.backgroundColor = inputValue;
            addbgtoex(inputValue);
            swal({
                    title: "Yay!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
        });
}

function faviconask() {
    swal({
            title: "Favicon",
            text: "Please leave a link to a favicon. If the file does not end with .ico , then the favicon will not change.",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "favicon.ico"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("Please enter a link!!");
                return false
            }
            changeFavicon(inputValue);
            swal({
                    title: "Yay!",
                    text: "Element added!",
                    type: "success",
                    timer: 3000,
                    showConfirmButton: true
                });
        });
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

function enter() {
    var user = getCookie("pass");
    if (user == "") {
    swal({
            title: "Password",
            text: "Enter the password to continue",
            type: "input",
            showCancelButton: false,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "password"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("Enter a pssword first!!");
                return false
            }
            if (inputValue === password) {
                swal("Correct!!", "Welcome Alpha Tester!", "success");
                setCookie("pass", "true", "1");
            } else {
                swal.showInputError("Password incorrect");
                return false
            }
        });
    }
}

function addbgtoex(bgcolaskit) {
    exportcode = exportcode + "<style>body{background-color: " + bgcolaskit +
        "}<\/style>";
}

function themeask() {
    swal({
            title: "Theme",
            text: "Themes: 'Rasberry', 'Peace', and 'DragonDrop'",
            type: "input",
            showCancelButton: true,
            closeOnConfirm: false,
            animation: "slide-from-top",
            inputPlaceholder: "Enter a Theme name"
        }, function(inputValue) {
            if (inputValue === false) return false;
            if (inputValue === "") {
                swal.showInputError("You forgot to fill out the theme!!");
                return false
            }
            swal(
                "This function is not available!",
                //"You wrote: " + inputValue,
                "",
                "error");
        });
}

function templates() {
    swal("Waoh!", "Feature not available!!", "error");
}

function submit() {
    swal("Waoh!", "Feature not available!!", "error");
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
    var html = exportcode;
    var dataURI = 'data:text/html,' + encodeURIComponent(html);
    window.open(dataURI);
}

function settingsDialog() {
    swal("Oh no!", "This feature isn't available yet!", "error");
}

var confirmOnPageExit = function (e) {
    // If we haven't been passed the event get the window.event
    e = e || window.event;

    var message = 'Woah!';

    // For IE6-8 and Firefox prior to version 4
    if (e) 
    {
        e.returnValue = message;
    }

    // For Chrome, Safari, IE8+ and Opera 12+
    return message;
};
window.onbeforeunload = confirmOnPageExit;
