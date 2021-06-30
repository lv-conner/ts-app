let isDone: boolean = false;
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;   //16进制
let binaryLiteral: number = 0b1010; //二进制
let octalLiteral: number = 0o744;   //八进制
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.I'll be ${age + 1} years old next month.`;
let list: number[] = [1, 2, 3];
let x: [string, number, number | string] = ['timlv', 2, 2];
x[2] = "ti";
export { isDone, decLiteral, hexLiteral, binaryLiteral, octalLiteral };
let obj: any = "tim lv";
let str: string = "tim lv";
let strOrNumber: number | string = "tim lv"; //联合类型
let num: number = 90;
let objNum: any = "tim lv";
console.log((<string>objNum).slice(0, 4));
console.log(strOrNumber);
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;

function f({ a="", b=0 } = {}): void {
    // ...
}