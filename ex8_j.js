var inputNum;
var tom;
var count = 0;

var cam = function(){
    var inputDate = document.getElementById("inNum");
    inputNum = inputDate.value;
    
    tom = decom(inputNum);
    changeNum(tom);
    nnCount(tom);
}


var decom = function(a){
    var tol = a.split("");
    return tol;
}

var nnCount = function(a){
    for(var i = 0; i < a.length; i++){
        if(a[i] != 'string'){
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