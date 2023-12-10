class Appliance {
    constructor(options) {
        this.name = options.name
        this.color = options.color
        this.power = options.power
        this.powerOn = options.powerOn
    }
}

let microwave = new Appliance({
    name: 'microwave',
    color: 'black',
    power: 15,
    powerOn: true,
    brand: 'econ',
})

let washer= new Appliance({
    name: 'washer',
    color: 'blue',
    power: 40,
    powerOn: false,
    height:'1m'
})

let dryer= new Appliance({
    name: 'dryer',
    color: 'pink',
    power: 70,
    powerOn: false,
    cordLength:'2m'
})

function totalPowerCount() {
   let totalPower = 0
   if (microwave.powerOn == true) {
    totalPower += microwave.power
   }
   if (washer.powerOn == true) {
    totalPower += washer.power
   }
   if (dryer.powerOn == true) {
    totalPower += dryer.power
   }

   console.log(`Общая мощность = ${totalPower}`)
}

totalPowerCount()