function fibonacci(number) {

    //a fibonacci sequence is where every number after the first two numbers
    //is the sum of the two preceding ones
    var previous_first = 2, previous_second = 3, next = 5;

    //using for loop
    for(var i = 8; i <= number; i++) {
        next = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next;
    }

    return next;
  

};

console.log(fibonacci(number));

