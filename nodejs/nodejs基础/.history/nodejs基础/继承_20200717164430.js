/* 
   类与继承
*/
class Animal {
    //静态方法调用
    static showInfo() {
        console.log('小王');
    }

    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this.name);
    }
}
// let animal = new Animal("小李");
// animal.showName();
// Animal.showInfo();

//类的继承 extends 关键字 
class Dog extends Animal {
    constructor(name, color) {
        this.color = color;
    }
    showColor() {
        console.log(this.color);
    }
}