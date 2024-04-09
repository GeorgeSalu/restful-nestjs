import { Injectable } from '@nestjs/common';
import { Person } from './person';

@Injectable()
export class PeopleService {

    people: Person[] = [];

    list(): Person[] {
        return this.people;
    }

    save(person: Person) {
        this.people.push(person);
    }


}
