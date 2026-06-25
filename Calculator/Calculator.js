const screen = document.getElementById("screen");

function appendValue(value){
    screen.value += value;
}

function clearScreen(){
    screen.value = "";
}

function deleteLast(){
    screen.value = screen.value.slice(0,-1);
}

function calculate(){
    try{
        screen.value = eval(screen.value);
    }
    catch(error){
        screen.value = "Error";
    }
}

// Keyboard Support
document.addEventListener("keydown",(e)=>{

    const allowedKeys =
    "0123456789+-*/.%";

    if(allowedKeys.includes(e.key)){
        appendValue(e.key);
    }

    if(e.key === "Enter"){
        calculate();
    }

    if(e.key === "Backspace"){
        deleteLast();
    }

    if(e.key === "Escape"){
        clearScreen();
    }
});