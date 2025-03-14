class P {
    constructor(name, age, address, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
        // yahn hum user ko ye nhi dekhana chah rhy ky kese hum ny name waghra ko store kra bus direct show kara rhy hain 
    }

    // Method to get name and age
    getD() {
        return `${this.name} is ${this.age} years old.`;
    }

    // Method to get the full address (this is an example of exposing a different piece of information)
    getAddress() {
        return `${this.name} lives at ${this.address}.`;
    }
}

const p1 = new P("Ayan", 17, "Karachi", "ayan@example.com");
console.log(p1.getD()); // Outputs: "Ayan is 17 years old."
console.log(p1.getAddress()); // Outputs: "Ayan lives at Karachi."
