console.log("I'm just testing typescript here");

function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toLocaleString()}!`);
}
 
greet("Brendan", new Date());