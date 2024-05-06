import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll() {
        return 'listagem de cursos'
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `curso #1 ${id}`;
    }

    @Post()
    // capturando uma propriedade especifica do payload
    // create(@Body('name') body) {
    create(@Body() body) {
        return body;
    }

}
