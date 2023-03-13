// Class
class Person{
    personName: string;
    constructor(name: string) {
        this.personName = name;
    }
    sayName() {
        return 'My Name is ' + this.personName;
    }
}

export default Person