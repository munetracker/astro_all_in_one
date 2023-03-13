import Person from "./Person";

// Inheritance
class Nationality extends Person{
    skinColor: string;
    constructor(name: string, color: string) {
        super(name);
        this.skinColor = color;
    }
    myColor() {
        return 'Color: ' + this.skinColor;
    }
}

export default Nationality
