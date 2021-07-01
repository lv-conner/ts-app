class A {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}

class B {
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
let aa:A = new A("tim lv");
aa = new B("asdf");

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}

let o:Octopus = new Octopus("adf");