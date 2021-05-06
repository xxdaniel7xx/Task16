//Task2

let obj2 = {
    apple:1,
    banana:2
}

let str2 = "apple";

function prop(obj, str) {
    for (str in obj) {
        return console.log(true);
    }
}

prop(obj2, str2);