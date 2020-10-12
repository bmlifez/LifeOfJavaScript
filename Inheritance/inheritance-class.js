class Animal {
    constructor(name,speed){
        this.name = name;
        this.speed = speed;
    }

    run(speed){
        if(speed===undefined){
            console.log(`${this.speed} km/hr`);
        } else {
            console.log(`${speed} km/hr`);
        }
    }

    bio(){
        console.log(this.name);
    }
}

class Rabit extends Animal {
    hide(info){
        console.log('info is ',info);
    }
}

var rab = new Rabit("rabbit",12);
rab.run();