var inputNum;
var tom;
var count;
var total;

var cam = function(){
    var inputDate = document.getElementById("inNum");
    inputNum = inputDate.value;
    
    tom = decom(inputNum);
    changeNum(tom);
    nnCount(tom);
    calcul(tom)
}


var decom = function(a){
    var tol = a.split(" ");
    return tol;
}

var nnCount = function(a){
    count = 0;
    for(var i = 0; i < a.length; i++){
        if(typeof a[i] != 'string'){
            count++;
        }
    }
}

var changeNum = function(a){
    for(var i = 0; i < a.length; i++){
        for(var l = 0; l < 10; l++){
            if(a[i] === String(l)){
                a[i] = l;
            }
        }
        
    }
}

var calcul = function(a){
    total = a[0];
    for(var i = 1; i < a.length; i++){
        if(a[i] === "+"){
            total = total + a[i + 1];
        }else if(a[i] === "-"){
            total = total - a[i + 1];
        }else if(a[i] === "*"){
            total = total * a[i + 1];
        }else if(a[i] === "/"){
            total = total / a[i + 1];
        }
    }
    console.log(total);
}
