/*  ------------------ USE STRICT ----------------------- */
"use strict"; is a way to enable strict mode in JavaScript. It prevents common mistakes and makes the code safer by throwing errors when it
    detects bad coding practices.
        
1️⃣ Prevents Accidental Global Variables
❌ Without "use strict"; (Bug in Code)
    x = 10;  // No "var", "let", or "const" → JavaScript creates a global variable (Bad practice)
    console.log(x);  // ✅ 10 (But it should not allow this!)
✅ With "use strict"; (Stops the Bug)
    "use strict";
    x = 10;  // ❌ ERROR: `x` is not defined
    console.log(x);

2️⃣ Catches Typing Mistakes
❌ Without "use strict";
    let name = "Alice";
    nam = "Bob";  // ❌ Typo (Should be "name")
    console.log(nam);  // 
✅ No error, but wrong variable name!
    "use strict";
    let name = "Alice";
    nam = "Bob";  // ❌ ERROR: "nam is not defined"

3. Stops Duplicate Function Parameters
    function sum(a, a) {  // ❌ No error, but confusing
        return a + a;
    }
    console.log(sum(5, 10));  // 20 (Unexpected behavior)
// use "use strict"
"use strict";
function sum(a, a) {  // ❌ Error: Duplicate parameter names not allowed
    return a + a;
}




console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object
