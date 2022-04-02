/*purpose: return fibonacci sequence based on input(n) 
concepts: array, control flow, for loop
obstacles: understanding the control flow and for-loop logic*/

function fibonacciGenerator(n) {

    //begin with empty array f
    var f = [];
    //condition 1
    if (n === 1) { 
        return f = [0];
    }
    //condition 2
    else if (n === 2) {
        return f = [0, 1]; 
    }
    //condition 3
    else { 
        //begin with array f with two integers
        f = [0, 1];

        //for loop
        //1. start: i = 2; existing numbers inside array
        //2. end: i < n; as long as i is less than 2
        //3. change: i++; we're going to increment by 1
        for (var i = 2; i < n; i++) {
            f.push(f[f.length-2] + f[f.length-1]);
            //after we sum the 1st and 2nd numbers from the END of the array, we're going to add the sum to the end(.push) of array(f)
        }
    }
    return f
}

f = fibonacciGenerator(20);
console.log(f)