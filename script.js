let display=document.getElementById('display');
let digitBtn=document.querySelectorAll('button');
let firstNumber;
let operator;
let secondNumber;

digitBtn.forEach(button=>{
        button.addEventListener('click',()=>{
                let digitValue=button.textContent;
                
                if(digitValue==='C'){
                        display.value="";
                }
                else if(digitValue==='='){
                        const expression=display.value;
                        if(expression.includes('+'))
                        operator='+';
                        else if(expression.includes('-'))
                        operator='-';
                        else if(expression.includes('*'))
                        operator='*';
                        else if(expression.includes('/'))
                        operator='/';
                let part=expression.split(operator);
                firstNumber=Number(part[0]);
                secondNumber=Number(part[1]);
                display.value=operate(firstNumber,operator,secondNumber);
                }
                else {
                        display.value+=digitValue;
                }
                
                
        })
})
function add(firstNumber,secondNumber){
return firstNumber+secondNumber;

}
function sub(firstNumber,secondNumber){
return firstNumber-secondNumber;

}
function mult(firstNumber,secondNumber){
return firstNumber*secondNumber;

}
function div(firstNumber,secondNumber){
return firstNumber/secondNumber;

}

function operate(firstNumber,operator,secondNumber ){
        if(operator==='+'){
               return add(firstNumber,secondNumber);
        }
        else if(operator==='-'){
                return sub(firstNumber,secondNumber);
        }
        else if(operator==='*'){
               return mult(firstNumber,secondNumber );
        }
        else if(operator==='/'){
                return div(firstNumber,secondNumber);
        }

}


/*let a=parseInt(prompt('Enter the first number',''))
let b=parseInt(prompt('Enter the second number',''))
let x=add(a,b);
let y=sub(a,b);
let z=mult(a,b);
let w=div(a,b);
alert(`${a}+${b}=${x}`);
alert(`${a}-${b}=${y}`);
alert(`${a}*${b}=${z}`);
alert(`${a}/${b}=${w}`);*/