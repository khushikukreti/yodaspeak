var btnTranslate=document.querySelector("#translate");
var inputText=document.querySelector("#inputText");
var outputText=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/yoda.json"
function getTranslationURL(input){
    return serverURL+ "?" + "text=" + input
}

function clickHandler(){
    var inputT=inputText.value;
    fetch(getTranslationURL(inputT))
    .then(Response=>Response.json())
    .then(json=>{
        var translateText=json.contents.translated;
        outputText.innerText=translateText;
    })
};
btnTranslate.addEventListener("click", clickHandler)