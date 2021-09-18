// Destructring
// while for for in

let array = ["a", "b", "c", "d"];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element);
}

array.forEach(element => {
    // console.log(element);
});

for (const letter in array) {
    // console.log(`Letter: ${letter}`);
}

const myObj = {a: "1", b: "20", c: "30"}

for (const iterator of "Zafer") {
    // console.log(iterator);
}
var name = "Zafer"
for (const iterator in name) {
    // console.log(name[iterator])
}

function sum(x, y) {
    console.log(arguments[0] + arguments[1] + arguments[2]);
}

sum(1,2,3);