let form = document.querySelector("form");
let resultParagraph = document.querySelector("#result");

form.addEventListener("submit", (event) => {
    event.preventDefault();  // Prevent the form from submitting

    let text = document.querySelector("#text").value;
    let ans = "";

    // Loop to iterate from the end to the beginning of the text
    for (let i = text.length - 1; i >= 0; i--) {
        ans += text[i];
    }

    let content = ""; // Declare the content variable

    if (text === ans) {
        content = ` " ${text} " is a palindrome`;
    } else {
        content = ` " ${text} " is not a palindrome`;
    }
    while (resultParagraph.firstChild) {
        resultParagraph.removeChild(resultParagraph.firstChild);
    }

    let textNode = document.createTextNode(content); // Create a text node
    resultParagraph.appendChild(textNode); // Append the text node to the paragraph
    document.querySelector("#text").value = ""; // Clear input field
   
});