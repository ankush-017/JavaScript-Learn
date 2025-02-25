/* --------------const------------------*/
//"const" is  Block-scoped, Cannot be Updated or Redeclared
const accountId = 144553
accountId = 2 // not allowed

/* --------------var------------------*/
// "var" can be redeclared as well as reinitialised in its own scope , it is Function-scoped (global-variable)
var accountPassword = "12345"
var accountPassword = "169745" // redeclared
accountPassword = "357896" // Reinitialises
accountCity = "Jaipur" // By default behave a "var" keyword

/* --------------let------------------*/
// "let" Can be Updated but Not Redeclared and it is Block-scoped(local-variable)
let accountEmail = "hitesh@google.com"
accountEmail = "hc@hc.com" // reinitialised
let accountState;
accountState = "12365789" // reinitialised

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
