import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  

      // Lodash, now imported by this script

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());


console.log("hello world")


const content = document.querySelector("#content")
content.textContent = "hello i am content divveee"