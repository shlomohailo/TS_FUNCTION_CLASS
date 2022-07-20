function PrintData(firstname: string, lastname?: string) {
    lastname ? console.log(`${firstname} ${lastname}`) : console.log(`${firstname}`);
}
PrintData("shlomo")

function pritToLg(fullName: string, email?: string): void {
    email ? console.log(`${fullName} ${email}`) : console.log(`${fullName}`);
}
pritToLg("shlomo hailo", "shlomo@.com")

function printKatData(agekat: number, typekat: string, kat?: string) {
    kat ? console.log(`${kat} ${agekat} ${typekat}`) : console.log(`${agekat} ${typekat}`);
}
printKatData(29, "lll", "kk");


function PrintHelloOrWelcome(mytext: string, boo: boolean = true): any {
    if (boo === true) {
        return `"hello" ${mytext}`;
    }
    else {
        return `"welcome ${mytext}`;

    }
    return boo ? ` "hello" ${mytext}` : `"welcome ${mytext}`;

}
console.log(PrintHelloOrWelcome("shlomo", false));


function returnAll(firstname: string, lastname: string, dif: string = "miss"): string {
    return `${firstname} ${lastname} ${dif} ;`
}
console.log(returnAll("shlomo", "hailo", "fff"));

function frintMany(mytext: string, ops?: string, dif: number = 1): void {
    for (let i = 0; i < dif; i++) {
        ops ? console.log(`${mytext} ${ops} `) : console.log(`${mytext} `)
    }
}
frintMany("shloom", "hailo", 5);


function sortAny(...tav: string[]): void {
    console.log(tav.sort());
}
sortAny("s", "s", "h", "a");


function sortNumber(...numbbers: any[]): void {
    console.log(numbbers.sort((a,b) => a - b))
}
sortNumber(2,5,7,9,0,21)


function sortNumbers(...numbers: any[]): void {
    console.log(numbers.sort((a,b) => b - a))
}
sortNumbers(2,5,7,9,0,21)


function getTen(...textten: string[]): any {
    return textten.sort()
}
console.log(getTen("shlomo", "hailo", "aaa"))


function getDetailss(mytext: string = "end", ...arraytext: string[]): string[] {
    arraytext.push(mytext);
    return arraytext;
}
getDetailss("sss", "ffff", "hfj")


class Car {
    compony: string;
    model: string;
    color: string;

    constructor(compony: string, model: string, color: string) {
        this.compony = compony;
        this.model = model;
        this.color = color;


    }
}



class Elepant {

    heigat: number;
    types: string;
    age: number;
    contery: string;
    constructor(heigat: number, types: string, age: number, contery: string) {
        this.heigat = heigat;
        this.types = types;
        this.age = age;
        this.contery = contery;
    }

    get gettext(): string {
        return `${this.heigat} ${this.types} ${this.age} ${this.contery} `;

    }

}

class Pants {
    size: number;
    color: string;
    bad: string;
    length: number;
    trueor: boolean;
    constructor(size: number, color: string, bad: string, length: number, trueor: boolean) {
        this.size = size;
        this.color = color;
        this.bad = bad;
        this.length = length;
        this.trueor = trueor;
    }
    private getText() {
        return `${this.size} ${this.color}${this.bad}${this.length}${this.trueor}`;
    }
    get prvfunc() {
        return this.getText();
    }
}


class Cportsman {
    fullname: string;
    birtday: Date;
    branch: string;
    field?: string;
    constructor(fullname: string, birtday: Date, branch: string, field?: string) {
        this.fullname = fullname;
        this.birtday = birtday;
        this.branch = branch;
        this.field = field ? field : ""
    }
    protected getDara() {
        return `${this.fullname} ${this.birtday} ${this.branch} ${this.field}`
    }
}




class Sportswoman extends Cportsman {
    team: string;
    play: boolean;
    constructor(fullname: string, birtday: Date, branch: string, team: string, play: boolean, field?: string) {
        super(fullname, birtday, branch, field);
        this.team = team;
        this.play = play;
    }
    getDetails() {
        return `${this.fullname} ${this.birtday} ${this.branch} ${this.team} ${this.play} ${this.field}`
    }
}


class User {
    fullname: string;
    age: number;
    password: string;
    private concted: boolean = true;
    constructor(fullname: string, age: number, password: string) {
        this.fullname = fullname;
        this.age = age;
        this.password = password;


    }
    get conctedd() {
        return this.concted;
    }
    set setconcted(con: boolean) {
        this.concted = con;
    }
    static getreturndata(old: string, ...users: User[]) {
        return old == "yuong" ? users.sort((a, b) => a.age - b.age)[0] : users.sort((a, b) => b.age - a.age)[0]
    }
}
const dalia = new User("shlomo", 5, "222")
const znavo = new User("shlomo", 17, "222")
const whlomo = new User("shlomo", 25, "222")
console.log(User.getreturndata("old", dalia, znavo,whlomo))


class Pupil extends User {
    email: string;
    constructor(firsname: string, lastname: string, age: number, password: string, email: string) {
        super(firsname + lastname, age, password)
        this.email = email;
    }
    getdata() {
        return `${this.fullname} ${this.age} ${this.password} ${this.email}`
    }
    getgreen() {
        return this.setconcted ? "green" : "red";
    }
}

