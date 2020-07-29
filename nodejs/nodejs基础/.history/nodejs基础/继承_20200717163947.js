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
let animal = new Animal("小李");
animal.showName();
Animal.showInfo();