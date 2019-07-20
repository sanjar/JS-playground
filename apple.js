class Apple extends Fruit{

    constructor(){
        super();
        this.color="red";
        this.name="Apple";
    }

    printFeatures(){
        console.log(this.color);
        console.log(this.name);
    }
}

const apple = new Apple();

apple.printFeatures();  