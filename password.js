//const numArray = [0,1,2,3,4,5,6,7,8,9];
const password = "Orangeoctopus3!";
//const alphabetLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//const alphabetUppercase = ['A', "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
//let includesUpper = false;
//let includesLower = false;

for(let i = 0; i <= password.length - 1; i++){
   
    if(password.length < 10){
        alert ("Password must contain 10 characters.")
       
    } else if (password.search(/[a-z]/) < 0) {
        alert("Your password needs a lower case letter")
        return false;
    } else if(password.search(/[A-Z]/) < 0) {
        alert("Your password needs an uppser case letter");
        return false;
    } else if (password.search(/[0-9]/) < 0) {
        alert("Your password needs a number");
        return false;
    } else if (password.search(/[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/) < 0){
        alert("Your password needs a special character.");
        return false;
    }else{
        return true;
    
    }console.log("Your password meets all the requirements!")
}
