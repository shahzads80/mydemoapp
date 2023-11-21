import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService {

  constructor() {}

  createDb(){
    let users : User[]=[
      {id:1, title:'Mr', firstName:'Shahzad', lastName:'Siddiqui', dob:'1980-01-10', email:'shahzad.siddiqui80@gmail.com', password:'123456', acceptTerms: true},
      {id:2, title:'Mrs', firstName:'Momina', lastName:'Siddiqui', dob:'1985-11-15', email:'mominasiddiqui85@gmail.com', password:'234567', acceptTerms: true},
      {id:3, title:'Mr', firstName:'Mubarak', lastName:'Chodhary', dob:'1981-03-30', email:'mubarakchoudhary@hotmail.com', password:'345678', acceptTerms: true},
      {id:4, title:'Mr', firstName:'Dinesh', lastName:'Suvarna', dob:'1982-06-30', email:'dineshsuvarna@gmail.com', password:'456789', acceptTerms: true},
      {id:5, title:'Mr', firstName:'Tariq', lastName:'Siddiqui', dob:'1985-06-15', email:'tariqsiddiqui@gmail.com', password:'567890', acceptTerms: true}
    ]
    return{users};
  }
}
