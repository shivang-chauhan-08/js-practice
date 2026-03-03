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


// 2) 
