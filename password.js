const numArray = [0,1,2,3,4,5,6,7,8,9];
let password = "Orangeoctopus3!";
const alphabetLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let includesUpper = false;
let includesLower = false;
for (let i = 0, i< password.length ; i++){

    let each_letter = password[i];
    if (alphabetLowercase.includes((each_letter))) {
        includesLower = true
        includesUpper= true
    
    }
    if (includesLower)
}