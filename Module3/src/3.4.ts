{
  // instanceof Guard

  class Animal {
  
    
    constructor(public name: string, public species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound(){
        console.log('i m making sound');
    }
  }


class Dog extends Animal{
    constructor(name:string, species:string){
       super(name, species) 
    }
    makeBark(){
        console.log('I am Barking');
    }
}

class Cat extends Animal{
    constructor(name:string,species:string){
        super(name, species)
    }
    makeMew(){
        console.log('i am Mewing');
    }
}

const getAnimal = (animal:Animal)=>{

    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if( animal instanceof Cat){
        animal.makeMew()
    }else{
        animal.makeSound()
    }
} 
 const dog = new Dog('kotta','Dog')
 const cat = new Cat('bilay','cat')



getAnimal(cat)








}
