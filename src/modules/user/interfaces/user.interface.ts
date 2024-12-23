export class UserInterface {
  id: string;
  name: string;
  age?: number;
  gender?: number;

  constructor(obj: UserInterface) {
    this.id = obj.id;
    this.name = obj.name;
    this.age = obj.age;
    this.gender = obj.gender;
  }
}
