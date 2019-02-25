function bindLocalVariable(data, callback) {

    return callback ? callback : () => {
        console.log(data);
    };
}

((showdown) => {
    const document = window.document;

    

    var bodyNode = document.getElementsByClassName('sample')[0];
    var showdown = new showdown.Converter(),
   
    text = 
`# Hello
## Title 2
### Title 3`;
    
    window['changeTextValue'] = () => {
            console.log(text);
            text = document.getElementsByTagName('textarea')[0].value;

            htmlObject.innerHTML =  showdown.makeHtml(text);    
            bodyNode.appendChild(htmlObject);
        };

    var htmlObject = document.createElement('div');
    htmlObject.innerHTML =  showdown.makeHtml(text);    
    bodyNode.appendChild(htmlObject);
})(showdown);