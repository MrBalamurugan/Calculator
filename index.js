
function give(press){
        
    enter = document.getElementById("user");
    switch(press){
        case 1: 
            enter.value += 1;
            break;
        case 2: 
            enter.value += 2;
            break;
        case 3: 
            enter.value += 3;
            break;
        case 4: 
            enter.value += 4;
            break;
        case 5: 
            enter.value += 5;
            break;
        case 6: 
            enter.value += 6;
            break;
        case 7: 
            enter.value += 7;
            break;
        case 8: 
            enter.value += 8; 
            break;
        case 9: 
            enter.value += 9;
            break;
        case 0: 
            enter.value += 0;
            break;

        case 'CL': 
            enter.value = " ";
            const cl = document.querySelector('input');
            cl.style.textAlign = 'end';
            break;
     
        case '+': 
            enter.value += '+';
            break;

        case '-': 
            enter.value += '-';
            break;

        case '*': 
            enter.value += '*';
            break;

        case '/': 
            enter.value += '/';
            break;

        case '.': 
            enter.value += '.';
            break;
           
        case '%': 
            enter.value += '%';
            break;
    
        case '=': 
            execute = eval(enter.value);
            enter.value = execute;
            const el = document.querySelector('input');
            el.style.textAlign = 'center';
            break;
    
        case 'DEL': 
            enter.value = enter.value.slice(0, -1);
            const dl = document.querySelector('input');
            dl.style.textAlign = 'end';
            break;

        case 'sqrt':
            enter.value = Math.sqrt(enter.value);
            const st = document.querySelector('input');
            st.style.textAlign = 'end';
            break;

        case 'log':
            enter.value = Math.log(enter.value);
            const lg = document.querySelector('input');
            lg.style.textAlign = 'end';
            break;

        case 'cos':
            enter.value = Math.cos(enter.value);
            const cs = document.querySelector('input');
            cs.style.textAlign = 'end';
            break;

        case 'tan':
            enter.value = Math.tan(enter.value);
            const tn = document.querySelector('input');
            tn.style.textAlign = 'end';
            break;
    }   
}



