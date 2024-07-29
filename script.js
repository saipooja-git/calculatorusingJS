document.addEventListener("DOMContentLoaded",()=>{
    const cells = document.querySelectorAll('.cell');
    const displayContent = document.querySelector('.store');
    let currentInput ='';

    cells.forEach(cell =>{
        cell.addEventListener('click',()=>{
           const value = cell.textContent;

           if(value>='0'&& value <='9'|| value==='.'){
            currentInput+=value;
            displayContent.textContent=currentInput;
           }
           else if(value==='+'|| value==='-'|| value==='*'|| value==='/'){
            firstOperand = currentInput;
                operator = value;
                currentInput = '';
                displayContent.textContent = operator;
           }
           else if(value==='='){
            secondOperand = currentInput;
            const result = calculate(parseFloat(firstOperand), parseFloat(secondOperand), operator);
                displayContent.textContent = result;
                currentInput = '';
                firstOperand = '';
                secondOperand = '';
                operator = '';

           }
        });
        });
        function calculate(firstOperand, secondOperand, operator) {
            switch (operator) {
                case '+':
                    return firstOperand + secondOperand;
                case '-':
                    return firstOperand - secondOperand;
                case '*':
                    return firstOperand * secondOperand;
                case '/':
                    return firstOperand / secondOperand;
                default:
                    return '';
         
        
            }
       }
   }
);