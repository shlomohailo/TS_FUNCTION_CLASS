function PrintData(firstname: string, lastname?: string): void {
    lastname ? console.log(`${firstname} ${lastname}`) : console.log(`${firstname}`);
}
PrintData("shlomo")

function pritToLg(fullName: string, email?: string): void {
    email ? console.log(`${fullName} ${email}`) : console.log(`${fullName}`);
}
pritToLg("shlomo hailo", "shlomo@.com")

function printKatData(agekat: number, typekat: string, kat?: string): void {
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
    console.log(numbbers.sort((a, b) => a - b))
}
sortNumber(2, 5, 7, 9, 0, 21)


function sortNumbers(...numbers: any[]): void {
    console.log(numbers.sort((a, b) => b - a))
}
sortNumbers(2, 5, 7, 9, 0, 21)


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
console.log(User.getreturndata("old", dalia, znavo, whlomo))


class Pupil extends User {
    firstname: string;
    lastname: string;
    bitrtday: string;
    email: string;
    constructor(firsname: string, lastname: string, age: number, password: string, bitrtday: string, email: string) {
        super(`${firsname} ${lastname}`, age, password)
        this.firstname = firsname;
        this.lastname = lastname;
        this.bitrtday = bitrtday;
        this.email = email;
    }
    getdata() {
        return `${this.fullname}  ${this.age} ${this.password} ${this.bitrtday} ${this.email} ${this.email}`;
    }
    getgreen() {
        if (this.conctedd === true) {
            return `green`;

        }
        return `red`;
    }

}

const haim = new Pupil("shlomo", "hailo", 29, "333", "peboar", "laalal");
const avi = new Pupil("avi", "hailo", 31, "333", "peboar", "laalal");
const shlomi = new Pupil("shlomi", "hailo", 4, "333", "peboar", "laalal");
console.log(haim.getdata());
console.log(haim.getgreen())

console.log(Pupil.getreturndata("old", haim, avi, shlomi));


class Room {
    width: number;
    length: number;
    squaresize: number;
    private window: boolean = true;
    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
        this.squaresize = width * length;

    }
    get getthereAWindow() {
        return this.window;
    }
    set setthereAWindow(there: boolean) {
        this.window = there;
    }
    static returnTheLargeOrSmallRoom(bigOrSmall: string, ...rooms: Room[]) {
        return bigOrSmall == "small" ? rooms.sort((a, b) => a.squaresize - b.squaresize)[0] : rooms.sort((a, b) => b.squaresize - a.squaresize)[0];
    }


}

const windoe1 = new Room(20, 30);
const windoe2 = new Room(20, 30);
const windoe3 = new Room(20, 30);
const windoe4 = new Room(20, 30);

console.log(Room.returnTheLargeOrSmallRoom("small", windoe1, windoe2, windoe3, windoe4));


class kitchen extends Room {
    numberOfCabinets: number;
    constructor(width: number, length: number, numberOfCabinets: number) {
        super(width, length)
        this.numberOfCabinets = numberOfCabinets;
    }
    printDataKitchen() {
        return console.log(`${this.width} ${this.length} ${this.numberOfCabinets} ${this.squaresize}`)
    }
    printHaveWindow() {
        if (this.getthereAWindow) {
            return `window have`;
        }
        return `room close`;
    }
}

const windoe = new kitchen(0, 5, 30);
const windoe5 = new kitchen(20, 6, 3);
const windoe6 = new kitchen(2, 7, 40);
const windoe7 = new kitchen(20, 5, 5);
const windoe8 = new kitchen(15, 104, 30);


console.log(kitchen.returnTheLargeOrSmallRoom("", windoe, windoe5, windoe7, windoe8))
console.log(windoe.printHaveWindow());



class LivingRoom extends Room {
    numberOfSeats: number;
    airDirection: string;
    constructor(width: number, length: number, numberOfSeats: number, airDirection: string) {
        super(width, length);
        this.numberOfSeats = numberOfSeats;
        this.airDirection = airDirection;

    }
    printDataLivingRoom() {
        console.log(`${this.width} ${this.length} ${this.numberOfSeats} ${this.airDirection}`)
    }
    printIfHaveWindow() {
        if (this.getthereAWindow) {
            return `window have ${this.airDirection}`;
        }
        return `room close `;
    }
}
const livigroom1 = new LivingRoom(2, 5, 3, "sss");
const livigroom2 = new LivingRoom(2, 59, 3, "sss");
const livigroom3 = new LivingRoom(0, 5, 3, "sss");

console.log(LivingRoom.returnTheLargeOrSmallRoom("small", livigroom1, livigroom2, livigroom3))

livigroom1.printDataLivingRoom();
console.log(livigroom1.printIfHaveWindow());

class Product {
    width: number;
    length: number;
    weight: number;
    price: number;
    private ordered: boolean = true;
    constructor(width: number, length: number, weight: number, price: number) {
        this.width = width;
        this.length = length;
        this.weight = weight;
        this.price = price;

    }
    set setOrder(have: boolean) {
        this.ordered = have;

    }
    get getOrder() {
        return this.ordered;
    }

    static giveBackTheExpensiveOrTheCheap(isexpensive: string, ...products: Product[]) {
        return isexpensive == "cheap" ? products.sort((a, b) => a.price - b.price)[0] : products.sort((a, b) => b.price - a.price)[0];

    }
}


const pro1 = new Product(2, 5, 6, 299);
const pro2 = new Product(2, 5, 6, 100);
const pro3 = new Product(2, 5, 6, 500);

console.log(Product.giveBackTheExpensiveOrTheCheap("cheap", pro1, pro2, pro3));


class Computer extends Product {
    powerSupply: number;
    constructor(width: number, length: number, weight: number, price: number, powerSupply: number) {
        super(width, length, weight, price);
        this.powerSupply = powerSupply;
    }
    printDataComputer(){
        console.log(`${this.width} ${this.length} ${this.weight} ${this.price} ${this.powerSupply}`);
    }
    
}

const pro4 = new Computer(2, 5, 6, 299,55);

pro4.printDataComputer()