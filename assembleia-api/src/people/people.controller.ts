import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { Response } from "express"
import { PeopleService } from './people.service';
import { Person, PersonUpdatingData } from './person';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Pessoas')
@Controller('people')
export class PeopleController {

    constructor(
        private peopleService: PeopleService
    ) {}

    @Get()
    list(@Res() response: Response) {
        const list = this.peopleService.list();
        return response.status(200).send(list);
    }

    @Get('/:id')
    getById(@Param("id") id: number, @Res() response: Response) {
        const person = this.peopleService.findById(id);
        if(!person) {
            return response.status(404).send();
        }
        return response.status(200).send(person);
    }

    @Post()
    save(@Body() person: Person, @Res() response: Response) {
        this.peopleService.save(person);
        return response.status(201).send("Salvo com sucesso");
    }

    @Put('/:id')
    update(@Param("id") id: number,@Body() personUpdateData: PersonUpdatingData ,@Res() response: Response) {
        const person = this.peopleService.findById(id);
        if(!person) {
            return response.status(404).send();
        }

        this.peopleService.update(id, personUpdateData);

        return response.status(204).send("atualizado com sucesso");
    }

    @Delete('/:id')
    delete(@Param("id") id: number, @Res() response: Response) {
        const person = this.peopleService.findById(id);
        if(!person) {
            return response.status(404).send();
        }

        this.peopleService.delete(id);

        return response.status(204).send();
    }

}
