import { Injectable } from '@nestjs/common';
import { Person, PersonUpdatingData } from './person';

@Injectable()
export class PeopleService {

    people: Person[] = [];

    list(): Person[] {
        return this.people;
    }

    findById(id: number): Person {
        const foundPerson = this.people.find(function(person){
            return person.id == id;
        })
        return foundPerson;
    }

    save(person: Person) {
        this.people.push(person);
    }

    update(id: number, updatePerson: PersonUpdatingData) {
        this.people.forEach(function(person) {
            if(id == person.id) {
                person.name = updatePerson.name
            }
        })
    }


    delete(id: number) {
        const newList = this.people.filter(person => {
            person.id != id;            
        })
        this.people = newList;
    }

}
