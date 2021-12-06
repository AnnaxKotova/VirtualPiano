document.addEventListener("keydown", function(event) {
    if (event.code === "KeyA") {
        console.log("The 'A' key is pressed.");
        let aObj = new Audio("music/A.mp3");
        aObj.play();
    }
    else if (event.code === "KeyS") {
        console.log("The 'S' key is pressed.");
        let sObj = new Audio("music/S.mp3");
        sObj.play();
    }
    else if (event.code === "KeyD") {
        console.log("The 'D' key is pressed.");
        let dObj = new Audio("music/D.mp3");
        dObj.play();
    }
    else if (event.code === "KeyF") {
        console.log("The 'F' key is pressed.");
        let dObj = new Audio("music/F.mp3");
        dObj.play();
    }
    else if (event.code === "KeyG") {
        console.log("The 'G' key is pressed.");
        let dObj = new Audio("music/G.mp3");
        dObj.play();
    }
    else if (event.code === "KeyH") {
        console.log("The 'H' key is pressed.");
        let hObj = new Audio("music/H.mp3");
        hObj.play();
    }
    else if (event.code === "KeyJ") {
        console.log("The 'J' key is pressed.");
        let jObj = new Audio("music/J.mp3");
        jObj.play();
    }
    else if (event.code === "KeyW") {
        console.log("The 'W' key is pressed.");
        let wObj = new Audio("music/W.mp3");
        wObj.play();
    }
    else if (event.code === "KeyE") {
        console.log("The 'E' key is pressed.");
        let eObj = new Audio("music/E.mp3");
        eObj.play();
    }
    else if (event.code === "KeyU") {
        console.log("The 'U' key is pressed.");
        let uObj = new Audio("music/U.mp3");
        uObj.play();
    }
    else if (event.code === "KeyT") {
        console.log("The 'T' key is pressed.");
        let tObj = new Audio("music/T.mp3");
        tObj.play();
    }
    else if (event.code === "KeyY") {
        console.log("The 'Y' key is pressed.");
        let yObj = new Audio("music/Y.mp3");
        yObj.play();
    }
    else{
        console.log("error");
    }
});