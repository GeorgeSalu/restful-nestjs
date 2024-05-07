import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Patch,
    Post,
    Res
} from '@nestjs/common';
import { CourseService } from './courses.service';

@Controller('courses')
export class CoursesController {


    constructor(
        private readonly courseService: CourseService
    ) { }

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

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `atualizacao curso ${id}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `exclusao do curso ${id}`;
    }

}
