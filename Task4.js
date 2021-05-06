//TASK 4

//parent constructor
let devices = []
function Device (name, powerVal) {
    this.name = name,
        this.powerVal = powerVal,
        this.powerInd = false,
        devices.push(this)
}
//Power value of device function
Device.prototype.powerVal = function () {
    console.log(`Power of device is ${this.powerVal} w`)
}

//Switch power of device dunction
Device.prototype.powerSwitch = function () {
    if(this.powerInd == false) {
        this.powerInd = true;
        console.log(`${this.name}, the power is ON!`)
        return this.powerInd
    } else {
        this.powerInd = false;
        console.log(`${this.name}, the power is OFF!`)
        return this.powerInd
    }
}

//reboot method of device
Device.prototype.reboot = function () {
    if (this.powerInd == true) {
        console.log(`${this.name} is starting reboot` );
        this.powerSwitch();
        setTimeout(this.powerSwitch(), 3000);
        console.log(`${this.name} is rebooted` );
    } else {
        this.powerInd = true;
        console.log(`${this.name}, the power is ON!`)
        return this.powerInd
    }
}

// new device - computer
const computer = new Device('computer', 450);

//calculator self method of computer
computer.calc = {
    result : undefined,
    plus : function (a, b) {

        return this.result = a + b
    },
    minus : function(a, b) {
        return this.result = a - b
    },
    multiply : function(a, b) {
        return this.result = a * b
    },
    division : function (a, b) {
        return this.result = a / b
    }
}

//system properties of computer
computer.system = {
    processor : 'AMD RyZen 5750',
    motherboard : 'ASUS B350',
    GPU : 'nVidia RTX 3070',
    RAM : {
        model : 'AMD R7 3200 MG',
        value : '16 GB'
    },
    SSD : {
        model : 'Seagate 540 SATA',
        value : '540 GB'
    }
}

//new device - printer
const printer = new Device('printer', 200);

// printer about
printer.about = {
    model : 'Canon MP540',
    year : '2016',
}

//printer inks value
printer.inks = 20;

//printer memory slot
printer.mem = undefined;

//printer scan method
printer.scan = function (mem) {
    this.mem = mem
}

//printer print method
printer.print = function (col) {

    for (let i = 1; i <= col; i++) {
        if (this.inks > 0 ) {
            console.log(this.mem)
            this.inks--
        } else {
            return console.log('Reload inks!')
        }
    }
    console.log('Amount of available inks ',this.inks)
    return this.inks
}

//printer reload inks method
printer.reload = function () {
    this.inks = 20
    return this.inks
}

//calculate of electrcity power of devices
let electricity =  function() {
    let sum = 0
    devices.forEach(function (value) {
        if (value.powerInd == true) {
            sum += value.powerVal
        }
    })
    console.log(sum)
}

computer.powerSwitch();
printer.powerSwitch();
console.log(devices)
electricity()