((showdown) => {
    const document = window.document;

    var bodyNode = document.getElementsByClassName('sample')[0];
    var showdown = new showdown.Converter(),
   
    text = 
`# Hello
## Title 2
### Title 3`;
    
    var htmlObject = document.createElement('div');
    htmlObject.innerHTML =  showdown.makeHtml(text);    
    bodyNode.appendChild(htmlObject);
})(showdown);