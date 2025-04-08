const car1 = {
    brand: 'bmw',
    maxSpeed: 200,
    startEngine() {
        console.log(`${this.brand} engine is started`)
    },
}

const car2 = {
    brand: 'audi',
    maxSpeed: 220,
    startEngine() {
        console.log(`${this.brand} engine is started`)
    },
}

// фабричная ф-ция, решает проблему создания однотипных объектов и дублирования кода. Минсуы: у каждого объекта будет метод startEngine. Будь 1000 объектов, будет и 1000 методов startEngine.
// Это легко проверить, можно сравнить на равенство методы объектов, покажет false, что значит что они все разные, т.е. каждый раз создаётся новый метод.
// Как будто бы должен быть синтаксис их вынесения, об этом ниже
function createCar(brand: string, maxSpeed: number): {brand: string, maxSpeed: number, startEngine: Function} {
    return {
        brand,
        maxSpeed,
        startEngine() {
            console.log(`${this.brand} engine is started`)
        },
    }
}

const car3 = createCar('bmw', 400)
const car4 = createCar('audi', 350)
// console.log(car3)
// console.log(car4)
// console.log(car3.startEngine === car4.startEngine)


// Данную проблему на заре времён решала ф-ция конструктор. Принято но не обязательно называть с большой буквы
function CarCreator(brand: string, maxSpeed: number): void {
    this.brand = brand
    this.maxSpeed = maxSpeed
}
// и теперь добавим метод startEngine через прототип
CarCreator.prototype.startEngine = function() {
    console.log(`${this.brand} engine is started`)
}
// экземпляры ф-ции конструктора нужно определять через оператор new
const car5 = new CarCreator('bmw', 400)
const car6 = new CarCreator('audi', 350)
// и теперь можно увидеть что у экземпляров класса CarCreator нет у каждого своих собственных ф-ций startEngine,
// но при этом есть к ней доступ через прототип, и через равенство мы видим что это одна и та же ф-ция
// console.log(car5)
// console.log(car6)
// car5.startEngine()
// car6.startEngine()
// console.log(car5.startEngine === car6.startEngine)

//появился уже достаточно новый синтаксис, который по факту синтаксический сахар над функцией-конструктором. Класс.
// Ввиду требований по обратной совместимости, class это синтаксический сахар над ф-циями конструкторами.
// Принято но не обязательно называть с большой буквы
class Car {
    // в рамках ts св-ва нужно заранее определить для конструктора, на чистом js заранее инициализировать св-ва не требуется
    brand: string
    maxSpeed: number
    constructor(brand: string, maxSpeed: number) {
        // некая логика в counstructor
        if (brand === 'lada') throw Error()
        this.brand = brand
        this.maxSpeed = maxSpeed
    }
    // методы мы теперь можем писать прямо в классе, не надо их где-то там отдельно определять через прототипы
    startEngine() {
        console.log(`${this.brand} engine is started`)
    }
}
// экземпляры класса аналогично создаём юзая оператор new
const car7 = new Car('bmw', 400)
const car8 = new Car('audi', 350)
console.log(car7)
console.log(car8)
car7.startEngine()
car8.startEngine()
console.log(car7.startEngine === car8.startEngine) // true




// запись вида
class _Car {
    brand: string
    maxSpeed: number
    constructor(brand: string, maxSpeed: number) {
        this.brand = brand
        this.maxSpeed = maxSpeed
    }
}
// можно заменить на
class __Car {
    constructor(public brand: string, public maxSpeed: number) { // где public - т.н. модификатор доступа
    }
}





