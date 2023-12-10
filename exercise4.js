function Appliance (name, color, power, powerOn) {
    this.name = name;
    this.color = color;
    this.power = power;
    this.powerOn = powerOn;
    this.isOn = function() {
        if (this.powerOn == true) {
            console.log('Прибор включён');
        }
        if (this.powerOn == false) {
            console.log('Прибор выключен');
        }
    }
}

let microwave = new Appliance('microwave','black', 15, false)
microwave.brand = 'econ'
console.log(microwave)
microwave.isOn()


let washer = new Appliance('washer','blue', 40, true)
washer.height = '1m'
console.log(washer)
washer.isOn()


let dryer = new Appliance('dryer','pink', 70, false)
dryer.cordLength = '2m'
console.log(dryer)
dryer.isOn()

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