import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('courses')
export class CoursesController {

    @Get()
    findAll(@Res() response) {
        return response.status(200).send('listagem de cursos');
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `curso #1 ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    // capturando uma propriedade especifica do payload
    // create(@Body('name') body) {
    create(@Body() body) {
        return body;
    }

}
