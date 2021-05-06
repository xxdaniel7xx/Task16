//Task1

let obj1_prot = {
    a:1,
    b:2
}
let obj1 = Object.create(obj1_prot);

obj1.c = 3;
obj1.d = 4;

function own(obj) {
    for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            console.log(i)
        }
    }
}

own(obj1);