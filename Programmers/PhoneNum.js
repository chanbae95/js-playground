function solution(phone_number) {
    var inputNum = String(phone_number);
    var number = inputNum.split("");

    if(number.length > 3){
        for(var i = 0; i < number.length - 4; i++){
            number[i] = "*";    
        }
    }


    
    var answer = number.join("");
    return answer;
}