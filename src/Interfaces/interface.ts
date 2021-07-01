interface IPerson {
    Name: string;
    Run(): void;
    Speak(): void;
}

interface IStudent {
    StudentCard: string;
    Job(): void;
}
class Person implements IPerson {
    Name: string;
    constructor(name: string) {
        this.Name = name;
    }
    Run(): void {
        throw new Error("Method not implemented.");
    }
    Speak(): void {
        throw new Error("Method not implemented.");
    }

}
class Student extends Person implements IStudent {
    StudentCard: string;
    constructor(name: string, Si: string) {
        super(name);
        this.StudentCard = Si;
    }
    Job(): void {
        throw new Error("Method not implemented.");
    }
}
let s:Student;
s = new Student("tim lv","1012");

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():any;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);