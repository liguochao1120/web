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
        super(name); //用来调用 父类
        this.color = color;
    }
    showColor() {
        console.log(this.color);
    }
}
let ret = new Dog("dingdang", "yellow");
ret.showName();
ret.showColor();