function solution(numbers) {
    var total = 0;
    for(var i = 0; i < numbers.length; i++){
        total += numbers[i];
    }

    var answer = 45 - total;
    return answer;

}