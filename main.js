const div = require('./util3');

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (div.div15(i))
            console.log("FizzBuzz " + i);
        else {
            if (div.div3(i))
                console.log("Fizz");
            else {
                if (div.div5(i))
                    console.log("Buzz");
                else
                    console.log(i);
            }
        }
    } 
}
FizzBuzz(100);