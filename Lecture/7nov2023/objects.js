const object = {
    rocket: 'rocket',
    home: 'home'
}
//String ,number ,bigint ,boolean ,null ,undefine ,symbol
// obj1 is object rocket:'rocket' = property of object rocket = key 'rocket' = value

const obj1 = {
    rocket: 'rocket',
    fuel: 2,
    config:{
        name:'mars'
    }
}

obj1.fuel = 200;
obj1['year'] = 2000

// for(k in object){
//     console.log(k)
// }


//  Part 2

const obj2 = new Object() //constructor
obj2.redbook = 'RedBook'
obj2.myValue = '1 blue book'

// console.log(obj2)

// part 3
const powers = {
    fly: true,
    cordinate: Math.random() + 2
}

const obj3 = Object.create(powers)
// console.log(obj3)
// console.log(obj3.cordinate)
// console.log(Object.getPrototypeOf(obj3));

// Part 4

const obj4 = Object.create({})
Object.defineProperty(obj4,'book',{
    // icon:'book'
    get: () => 'book',
    enumerable: true
})
// console.log(obj4);
// console.log(obj4.book);
// console.log(Object.getPrototypeOf(obj4));

for(k in obj4){
    // console.log("value is: ", k);
}

//Part 5
// this is not used in arrow function

const obj5 = {
    comics: 'marvel',
    pen: '',
    printComic: function(){
        this.pen += 'pen'
    },
    printComic: () => {
        this.pen += 'pen'
    }
}
console.log(obj5.printComic());