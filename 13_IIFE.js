// Immediately Invoked Function Expression

(function one() {
    // name IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Ankush');              // DB CONNECTED TWO Ankush






