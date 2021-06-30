interface SSInterface {
    name:string;
    label:string
};

export function GetLength(obj: SSInterface): number {
    return obj.name.length;
}

let obj = { name:"tim lv",label:"test"};
GetLength(obj);