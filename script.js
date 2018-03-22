const display = document.getElementById('display');




const antiEval = (str) => {
    
  let arr = str.split(' ');
    
  switch(arr[1]){
    case '+':  
    return +arr[0] + +arr[2];
    break;
    case '-':
    return +arr[0] - +arr[2];
    break;
    case '/':  
    return +arr[0] / +arr[2];
    break;
    case '*':
    return +arr[0] * +arr[2];
    break;
    //case '%':
    //return parseFloat(+arr[0] / 100).toFixed(2);
      //    return +arr[0] / 100;
    //break;      
  };
};

let booleanSign = true;
let count = 0;
const keyboard = document.getElementById('keyboard');
  let str = '';

keyboard.addEventListener('click', (e) => {
  
    let target = e.target;
    
    if(target.value.match(/[0123456789\.]/)){
        if (booleanSign === true){
            display.textContent = '';
             booleanSign = false;
        };
        
    display.textContent += target.value;
        str += target.value;  
    };
    
    if(target.value.match(/[^0123456789\.=c]/)){
        count += 1;
        if(count === 2){
            display.textContent = antiEval(str);
        str = antiEval(str);
            count = 1;
        };
        str += ' ' + target.value + ' ';
        booleanSign = true; 
       
    };
     
    if(target.value.match('c')){
        count = 0;
        booleanSign = true;
        str = ''
        display.textContent = '0';
        
    };
    
    if(target.value.match('=')){
        display.textContent = antiEval(str);
        str = antiEval(str);
    };
});


