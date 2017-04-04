/**
 * In Below Code I have tried to call multiple functions from a single function and also played with 
 * parameters and return statements. I have Commented lines so that you can read those and try to understand 
 * if you want to learn functions. STILL YOU GUYS NEED PRACTICE TO UNDERSTAND COMPLETELY AND BY JUST VIEWING
 * THIS CODE YOU WILL NOT BE ABLE TO UNDESTAND FUNCTIONS. PRACTICE IS MUCH NEEDED.
 */

/**
 * This function will calculate Hundred Notes 
 */
function calculateHundredNotes(totalAmountForHundred) {
    return Math.floor(totalAmountForHundred / 100);
}

/**
 * This function will calculate Five Hundred Notes 
 */
function calculateFiveHundredNotes(totalAmountForFiveHundred) {
    return Math.floor(totalAmountForFiveHundred / 500);
}

/**
 * This function will calculate Ten Notes 
 */
function calculateTenNotes(totalAmountForTen) {
    return Math.floor(totalAmountForTen / 10);
}

/**
 * This function will calculate All Notes and print the result. 
 */
function calculateTotalNotes(totalAmount) {
    /**
     * In Below Line I have called functions and given them parameters and
     * when they return a value I am saving it to another variable and using them.
     * If you closely look I have also done some calculation in parameters calls if required.
     * We can do this as well.
     */
    var totalFiveHundredNotes = calculateFiveHundredNotes(totalAmount);
    var totalHundredNotes = calculateHundredNotes(totalAmount % 500);
    var totalTenNotes = calculateTenNotes(totalAmount % 100);
    alert("For "+totalAmount+" we have 500 notes are "+totalFiveHundredNotes+", 100 notes are "+totalHundredNotes + " and 10 notes are "+totalTenNotes);
}

/**
 * I have tried to generalize the functions so I can use them to other places as well.
 * If you closely look I took user input OUTSIDE of function and also I have called the function after taking
 * input and I have passed this input value to function.
 * Usually this is the way we are working in applications. There are lots of functions calling each other in 
 * big applications.
 */
var userAmount = prompt("Please Enter Amount you want dominations for : ", 850);
calculateTotalNotes(userAmount);
