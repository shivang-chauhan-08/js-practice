// 1) Create a Repository<T> that:
//      Only accepts types that have an id: number
//      Add a method:
//      removeById(id: number): void
class Car {
    id;
    brand;
    doors;
    constructor(id, brand, doors) {
        this.id = id;
        this.brand = brand;
        this.doors = doors;
    }
    getDetails() {
        return `${this.id} vehicle is of ${this.brand} brand & have ${this.doors} doors.`;
    }
}
class Bike {
    id;
    brand;
    hasCarrier;
    constructor(id, brand, hasCarrier) {
        this.id = id;
        this.brand = brand;
        this.hasCarrier = hasCarrier;
    }
    getDetails() {
        return `${this.id} vehicle is of ${this.brand} brand & have ${this.hasCarrier} doors.`;
    }
}
class VehicleRepository {
    repo = [];
    add(vehicle) {
        this.repo.push(vehicle);
    }
    getAll() {
        return this.repo;
    }
    findById(id) {
        return this.repo.filter(item => item.id === id)[0];
    }
}
const carRepo = new VehicleRepository();
carRepo.add(new Car(1, "Toyota", 4));
carRepo.add(new Car(2, "BMW", 2));
console.log(carRepo.getAll());
