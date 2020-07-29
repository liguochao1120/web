/* 
   类与继承
*/
class Animal {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
let animal = new Animal("小李");
animal.showName();