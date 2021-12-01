console.log("I'm just testing typescript here");
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toLocaleString(), "!"));
}
greet("Brendan", new Date());
