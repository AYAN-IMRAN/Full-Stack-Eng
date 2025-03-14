class Company{
    constructor(brand){
        this.brand = brand
    }
    brandShow(){
        console.log(`The Brand is ${this.brand}`)
    }
}

class Iphone extends Apple{
    constructor(brand, model){
        super(brand)
        this.model = model
    }

    brandWithModel(){
        console.log(`The Brand is ${this.brand} and the Model is ${this.model}`)
    }
          
}

class Macbook extends Apple{
    constructor(brand, model, ram){
        super(brand,model)
        
        this.ram = ram
    }
    MacbookShow(){
        console.log(`The Brand is ${this.brand} and the Model is ${this.model} and Ram is ${this.ram}`)
    }
}

let obj = new Iphone("Iphone 16",2025)
obj.brandWithModel()