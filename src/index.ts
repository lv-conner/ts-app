import Sex, { Color } from "./BaseType/Sex";
import { Computer } from "./Types/GetterAndSetter";
import { Direction,StringDirection } from "./Enums/e";
let sex: Sex = Sex.Man;
let color: Color = Color.Black;
console.log("hello");
console.log(sex);
console.log(color);
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
let c: Computer = new Computer("hah");
console.log(c.Card);
c.Card = "tim lv";
console.log(c.Card);
c.Card = "card0001";
console.log(c.Card);

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

function PrintThis(this: number, value: any) {
    return () => {
        console.log(`${this} - ${value}`);
    }
}

function PrintThisV2(this: any, msg: string) {
    return () => {
        console.log(`${this} - ${msg}`);
    }
}
var p = PrintThis.bind(123)("timlv");
p();

var p1 = PrintThisV2("tim lv");  //此时this为undefined
p1();

let d: Direction;
d = Direction.Down;


function SwitchDirection(d: Direction) {
    switch (d) {
        case Direction.Down:
            break;
        case Direction.Left:
            break;
        case Direction.Right:
            break;
        case Direction.Up:1
            break;
        default:
            break;
    }
}

let sd:StringDirection = StringDirection.Up;
console.log(JSON.stringify(sd));