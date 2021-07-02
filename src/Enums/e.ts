export enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}

export enum StringDirection {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

enum E {
    Foo,
    Bar,
}

function f(x: E) {
    if (x !== E.Foo) {
        //             ~~~~~~~~~~~
        // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
    }
}


let x: (null | number)[] = [0, 1, null];

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};