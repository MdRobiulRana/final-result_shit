var i_id = document.getElementById('result_shit');
let result = prompt();

if (result >= 80 && result <= 100){
    i_id.innerHTML = ('You have got A+');
}
else if(result >= 70 && result < 80){
    i_id.innerHTML = ('You have got A');
}
else if(result >= 60 && result < 70){
    i_id.innerHTML = ('You have got A-');
}
else if(result >= 50 && result < 60){
    i_id.innerHTML = ('You have got B');
}
else if(result >= 40 && result < 50){
    i_id.innerHTML = ('You have got C');
}
else if(result >= 33 && result < 40){
    i_id.innerHTML = ('You have got D');
}
else{
    i_id.innerHTML = ('You failed');
}