var btnTranslate=document.querySelector("#translate");
var inputText=document.querySelector("#inputText");
var outputText=document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(inputURL) {
    return serverURL + "?" + "text=" + inputURL
}
function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}


function clickHandler() {
    var inputT = inputText.value; // taking input

    // calling server for processing
    fetch(getTranslationURL(inputT))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText; // output
           })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickHandler)