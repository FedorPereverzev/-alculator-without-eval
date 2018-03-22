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
  };
};

let booleanSign = true;

const keyboard = document.getElementById('keyboard');
  let str = '';
keyboard.addEventListener('click', (e) => {
  
    let target = e.target;
    
    if(target.value.match(/[0123456789\.]/)){
        if (booleanSign === true){
            display.textContent = '';
             booleanSign = false;
        }
    display.textContent += target.value;
        str += target.value;
       
    };
    
    if(target.value.match(/[^0123456789\.]/)){
        str += ' ' + target.value + ' ';
        booleanSign = true;
        
    }
    
    if(target.value.match('=')){
        display.textContent = antiEval(str);
        str = antiEval(str);
    };
})


