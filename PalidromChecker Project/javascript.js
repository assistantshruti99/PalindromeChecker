let form = document.querySelector("form");
let resultParagraph = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    let text = document.querySelector("#text").value;
    let ans = "";

    
    for (let i = text.length - 1; i >= 0; i--) {
        ans += text[i];
    }

    let content = ""; 

    if (text === ans) {
        content = ` " ${text} " is a palindrome`;
    } else {
        content = ` " ${text} " is not a palindrome`;
    }
    while (resultParagraph.firstChild) {
        resultParagraph.removeChild(resultParagraph.firstChild);
    }

    let textNode = document.createTextNode(content); 
    resultParagraph.appendChild(textNode); 
    document.querySelector("#text").value = ""; 
});