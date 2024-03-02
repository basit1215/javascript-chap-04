// // LEGAL VARIABLES
// var lEtTeR;
// var _dollarSign;
// var camelCase;
// var snakecase;
// var number$after_Letter12;

// LEGAL VARIABLES EXAMPLES
document.write("<u><b>LEGAL VARIABLES EXAMPLES:</b></u>"  + "<br>" + "<br>");
var legalOne="A variable name can contain only letters small and capital.";
var legalTwo="A variable name can contain only dollar signs, and underscores.";
var legalThree="By convention, JavaScript variable names are written in camelCase.";
var legalFour="By convention, JavaScript variable names are written in snakeCase.";
var legalFive="A number should be after letters.";

document.write("1 . " + legalOne + "<br>");
document.write("2 . " + legalTwo + "<br>");
document.write("3 . " + legalThree + "<br>");
document.write("4 . " + legalFour + "<br>");
document.write("5 . " + legalFive + "<br>" + "<br>");


// ILLEGAL VARIABLES
// var no space contain;
// var class; 
// var 45number;
// var &@notallowed;
// var notallowed^#;

// ILLEGAL VARIABLES EXAMPLES
document.write("<u><b>ILLEGAL VARIABLES EXAMPLES:</b></u>"  + "<br>" + "<br>");
var illegalOne="Should not contain space.";
var illegalTwo="Class Should not use JavaScript keywords."; 
var illegalThree="45number Should not start with a number.";
var illegalFour="Should not start with special characters.";
var illegalFive="Should not contain special characters except $ and _.";

document.write("1. " + illegalOne + "<br>");
document.write("2. " + illegalTwo + "<br>");
document.write("3. " + illegalThree + "<br>");
document.write("4. " + illegalFour + "<br>");
document.write("5. " + illegalFive + "<br>");

// Display this in your browser
document.write("<u><u><h2>“Rules for naming JS variables”</h2></u></u>");
document.write("1. " + " Variable names can only contain <u><b>Letters</b></u> , <u><b>Numbers</b></u> , <u><b>Underscore</b></u> and <u><b>Dollar-Sign</b></u>. " + "<br>");
document.write("2. " + " Variables must begin with a <u><b>Dollar-Sign</b></u> , <u><b>Underscore</b></u> or <u><b>Letters</b></u>. " + "<br>");
document.write("3. " + " Variable names are case <u><b>Sensitive</b></u>. " + "<br>");
document.write("4. " + " Variable names should not be JS <u><b>keywords</b></u>. " + "<br>" + "<br>");

// Declare 3 variables in one statement.
var first="Declare " , second=3  , third=" variables in one statement." ;
document.write(first + second + third + "<br>");

// Declare 3 variables in one statement.
var x=25 , y=54 , z=85;
document.write(x + y + z + "<br>");