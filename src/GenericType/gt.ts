interface Length {
    Count: number;
}
function GetLength<T extends Length>(value: T) {
    return value.Count;
}

class Q {

}

function GetPerson<T extends Q>(value: T) {

}

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

interface GT {
    <T>(arg: T): void;
    Say(name: string): void;
    GG<TT>(args: TT): void;
}