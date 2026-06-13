function appendValue(val){
    document.getElementById("display").value += val;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function backspace(){
    let display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{
        let result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    }
    catch{
        document.getElementById("display").value = "Error";
    }
}

document.addEventListener("keydown", (e) => {

    const allowed = "0123456789+-*/().";

    if(allowed.includes(e.key)){
        appendValue(e.key);
    }

    else if(e.key === "Enter"){
        calculate();
    }

    else if(e.key === "Backspace"){
        backspace();
    }

});