{
    // class -oop

    // class Animal{
        
    //     name: string;
        
    //     species: string;
    //     sound: string;
    //     constructor(name:string, species:string ,sound:string){
    //         this.name=name,
    //         this.species=species,
    //         this.sound=sound
    //     }
    //     makeSound(){
    //         console.log(`The ${this.name} is chillaitase like ${this.sound}`);
    //     }
    // }


    class Animal{
        constructor(public name:string, public species:string, public sound:string){

        }
        makeSound(){
            `the ${this.name} is chillaitase like ${this.sound}`
        }
    }

const  dog = new Animal('Kotta', 'Dog', 'ghew ghew')

const  cat = new Animal('Bilay','cat','meaw meaw')
const catsName= dog.name
console.log(catsName);
cat.makeSound()




















}