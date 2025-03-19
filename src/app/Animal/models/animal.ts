export class Animal {
  id: number;
  name: string;
  breed: string;
  gender: string;
  age: number;
  weight: number;
  location: string;
  imageUrl: string;
  petDetailsUrl: string;


  constructor(id: number, name: string, breed: string, gender: string, age: number, weight: number, location: string, imageUrl: string, petDetailsUrl: string) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.gender = gender;
    this.age = age;
    this.weight = weight;
    this.location = location;
    this.imageUrl = imageUrl;
    this.petDetailsUrl = petDetailsUrl;
  }
}
