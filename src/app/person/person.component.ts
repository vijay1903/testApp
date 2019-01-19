import { Component, OnInit } from '@angular/core';

class Person {
  name:string;
  age:number;
  married:Boolean;
  constructor(name:string, age:number, married:boolean){
      this.name = name;
      this.age = age;
      this.married = married;
  }
  getName():string{
      return this.name;
  }
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html'
})



export class PersonComponent implements OnInit {
  
  persons:Array<Person> =  [];
  names:Array<string> = [];
  check = true;
  constructor() { 

    let person:Person =  new Person("Test",34,true);

    this.persons = [
      new Person("John Doe",34,true),
      new Person("Nick Ray",25,false),
      new Person("Harold Shaw",50,true),
      new Person("Don Smith",43,true),
      new Person("Amanda Clith", 41,true)
    ];
    this.persons.forEach(person => {
      this.names.push(person.name);
    });
  }
  
  ngOnInit() {
  }
}