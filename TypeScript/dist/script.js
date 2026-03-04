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
