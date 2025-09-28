let display=document.getElementById('display');
let digitBtn=document.querySelectorAll('button');
let firstNumber=null;
let operator=null;
let secondNumber=null;
let operatorsArr=['+','*','/','-'];
//let expression=display.value;


digitBtn.forEach(button=>{
        button.addEventListener('click',()=>{
            let digitValue=button.textContent;   
              
        if(!isNaN(digitValue)) {
                display.value +=digitValue;
               if(operator===null){
        firstNumber=Number(display.value);
        }
                 else {
        secondNumber=Number(display.value.split(operator).pop());
        }
        }
        else if(operatorsArr.includes(digitValue)){
                if(firstNumber!==null && operator!==null && secondNumber!==null)//something ,for eg.,12[operator]3 and you pressed one of the operator again. 
                        {
                        firstNumber=operate(firstNumber,operator,secondNumber);
                        display.value=firstNumber;//show intermidate result 
                        secondNumber=null;
                }
                operator=digitValue;             /*assigning the button textContent and display it  with what is there in the input box  
                                                if the above condition is not satisfied */
                display.value +=operator;
        }                                      
        else if(digitValue==='='){
                if(firstNumber!==null && operator!==null && secondNumber!==null){
                  display.value=operate(firstNumber,operator,secondNumber);
                firstNumber=Number(display.value);
                secondNumber=null;
                operator=null;      
                }
        }
        else if(digitValue==='C'){
                display.value="";
                firstNumber=secondNumber=operator=null;
        }

                
        });
});

function operate(firstNumber,operator,secondNumber ){
        switch(operator){
                case'+': return  firstNumber+secondNumber;
                case '-': return firstNumber-secondNumber;
                case '*': return firstNumber*secondNumber;
                case '/': return firstNumber/secondNumber;
        }
}
       