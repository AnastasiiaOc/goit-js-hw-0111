'use strict';

function getElementWidth(content, padding, border) {
   
    const numericContent = Number.parseFloat(content);
    const boxSizing = Number.parseFloat(padding);
    const borderbox = Number.parseFloat(border);
    const result = numericContent +  boxSizing * 2 + borderbox * 2;
    return result;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
