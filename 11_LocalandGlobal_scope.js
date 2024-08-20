/*------------------    Part-1      --------------------*/

// let a = 10
// const b = 20
// var c = 30

if(true){
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a);
//console.log(b)
//console.log(c);

/*-------------------       Part-2           ------------------------------*/

function one(){
    const username = "Ankush";

    function two(){
        const website = "Booster"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();  // Ankush

//+++++++++++++++++ Interesting +++++++++++++++++++++++

addone(5);  // Accessed
function addone(num){
    return num+1;
}

addtwo(5); // Not accessed
const addtwo = function(num){
    return num+2;
}








