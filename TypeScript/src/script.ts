// 1) Create a Repository<T> that:
//      Only accepts types that have an id: number
//      Add a method:
//      removeById(id: number): void

// class Repository<T extends {id: number}> {
//     public items: T[] = [];

//     add(item: T): void{
//         this.items.push(item);
//     }

//     removeById(id: number): void {
//         this.items = this.items.filter(item => item.id != id);
//     }
// }

// type User = {
//     id: number;
//     name: string;
// }

// const repo = new Repository<User>();
// repo.add({id: 1, name: "Shivang"});
// repo.add({id: 2, name: "Manoj"});
// console.log(repo.items);

// repo.removeById(2);
// console.log(repo.items);


// 2) Calculator with History Feature

// let num1 = document.getElementById("num1") as HTMLInputElement;
// let num2 = document.getElementById("num2") as HTMLInputElement;

// let result = document.getElementById("result") as HTMLElement;
// let index: number = -1;
// let hist: string[] = [];

// document.getElementById("add").addEventListener("click", () => {
//     let a: number = Number(num1.value);
//     let b: number = Number(num2.value);
//     let res: number = a+b;

//     hist.push(`${a} + ${b} = ${res}`);

//     result.innerText = res.toString();
// })

// document.getElementById("multiply").addEventListener("click", () => {
//     let a: number = Number(num1.value);
//     let b: number = Number(num2.value);
//     let res: number = a*b;

//     hist.push(`${a} * ${b} = ${res}`);

//     result.innerText = res.toString();
// })

// document.getElementById("history")!.addEventListener("click", () => {

//     if(history.length === 0){
//         result.innerText = "No history";
//         return;
//     }

//     result.innerText = hist[1];
// });


// 3) Generic Stack Class

// class Stack<T> {
//     private items: T[] = [];

//     public push(item: T): void {
//         this.items.push(item);
//     }

//     public pop(): T | undefined {
//         return this.items.pop();
//     }

//     public peek(): T | undefined {
//         return this.items[this.items.length-1];
//     }

//     public getAll(): T[] {
//         return this.items;
//     }
// }

// const stack = new Stack<number>();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// console.log(stack.peek()); // 30
// console.log(stack.pop());  // 30
// console.log(stack.getAll()); // [10, 20]


// 4) Generic Cache Class

// class cache <T> {
//     public store: Record<string, T> = {};

//     public set(key: string, value: T): void {
//         this.store[key] = value;
//     }

//     public get(key: string): T{
//         return this.store[key];
//     }

//     public remove(key: string): void {
//         delete this.store[key];
//     }
    
//     public clear(): void {
//         this.store = {};
//     }
// }

// const userCache = new cache<{ id: number; name: string }>();

// userCache.set("user1", { id: 1, name: "Shivang" });
// userCache.set("user2", { id: 2, name: "Rahul" });
// console.log(userCache);
// console.log(userCache.get("user1"));
// console.log(userCache.get("user2"));


// 5) Generic Vehicle Storage System

interface Vehicle {
    id: number,
    brand: string,
    getDetails(): string
}

class Car implements Vehicle {
    id: number
    brand: string
    doors: number
    
    public constructor(id: number, brand: string, doors: number){
        this.id = id;
        this.brand = brand;
        this.doors = doors;
    }

    public getDetails(): string {
        return `${this.id} vehicle is of ${this.brand} brand & have ${this.doors} doors.`;
    }
}

class Bike implements Vehicle {
    id: number
    brand: string
    hasCarrier: boolean
    
    public constructor(id: number, brand: string, hasCarrier: boolean){
        this.id = id;
        this.brand = brand;
        this.hasCarrier = hasCarrier;
    }

    public getDetails(): string {
        return `${this.id} vehicle is of ${this.brand} brand & have ${this.hasCarrier} doors.`;
    }
}

class VehicleRepository<T extends Vehicle> {
    repo: T[] = [];

    add(vehicle: T): void {
        this.repo.push(vehicle);
    }

    getAll(): T[] {
        return this.repo;
    }

    findById(id: number): T {
        return this.repo.filter(item => item.id === id)[0];
    }
}

const carRepo = new VehicleRepository<Car>();

carRepo.add(new Car(1, "Toyota", 4));
carRepo.add(new Car(2, "BMW", 2));

console.log(carRepo.getAll());
