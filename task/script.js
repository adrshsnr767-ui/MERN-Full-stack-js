const Username = prompt ("Enter Your User Name");
const Password = prompt ("Enter Your Password ");

if (Username==="Admin" && Password=== "12345678" ){
    document.write("Login Sucessfull! <br/>");
}
else{
    document.write("Wrong Credintials! <br/>")
}


const Age = prompt("Enter Your Age");

if( Age <= 15 ){
    document.write("Woah! You are Just a child. ");
}
else if ( Age <= 21 ) {
    document.write("Hmm! You are Gen Z interesting.");
}
else if ( Age <= 36 ) {
    document.write("Hmm! You are Gen X interesting.");
}
else if ( Age <= 54 ) {
    document.write("Hmm! You are Gen Y interesting.");
}
else if ( Age <= 70 ) {
    document.write(" You are Generation Boomer. Carefull You are Getting Older. ");
}
else    {
document.write("Generation Bulder! Congratulation On beign A Gramps.");
}