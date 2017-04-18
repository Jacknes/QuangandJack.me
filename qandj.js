function displayImagesOnPerson(name) {
    var nameString = name.innerText;
    nameString = nameString.replace(/\s/g, '');
    displayImage(nameString, document.getElementById("and").innerHTML);
    document.getElementById("main").style.paddingTop = '0';
    document.getElementById("imageWrapper").style.height = '65%';
    
 
                            
}

function andOr(passingText){
    if (passingText.innerText.indexOf("and") > -1) {
        document.getElementById("and").innerHTML = "or&nbsp;";
    } else {
        document.getElementById("and").innerHTML = "and&nbsp;";
    }
    
    displayArrow(false);
}


function displayImage(name, andOr) {
    var imageTag = document.getElementById("image");
    var directoryString;
    do {
            var value = Math.floor((Math.random() * 10) + 1);
        }
    while (value == imageTag.alt);
    if (andOr == "or&nbsp;") {    
        
        directoryString = "resources/" + name + "/" + value + ".jpg";
        imageTag.src = directoryString;
        imageTag.alt = value;
    } else {
        directoryString = "resources/QuangandJack/1.jpg"; 
        imageTag.src = directoryString;
        imageTag.alt = value;
    }

    
}

function displayArrow(display) {
    var arrowWrapper = document.getElementById("clickMeArrow");
    var mainWrapper = document.getElementById("main");
    if (display == true) {
         arrowWrapper.style.display = "block";
        mainWrapper.style.paddingTop = 0;
    } else {
        arrowWrapper.style.display = "none";
        
    }
    
   
}
