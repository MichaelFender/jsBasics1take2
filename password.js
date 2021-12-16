const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

reader.question('Enter the password you would like to validate here --> ', function(input){
    let array = input.split('')

    if (input.includes(0) || input.includes(1) || input.includes (2) || input.includes(3) || input.includes(4) || input.includes(5) || input.includes(6) || input.includes(7) || input.includes(8) || input.includes(9)){
    // checks to see if any numbers 0-9 were included
        if (input.length >= 10){
            console.log('AWESOME! Your password meets the criteria!')
        } else {
            console.log('Try again. Your password must be at least 10 characters long.')
        }
    } else {
        console.log('Try again. Your password must include a #')
    }
    // Closes the connection to the command line.
	reader.close()
});