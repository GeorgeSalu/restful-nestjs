import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post
} from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto/create-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(
        private readonly courseService: CourseService
    ) { }

    @Get()
    findAll() {
        return this.courseService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.courseService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.courseService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return this.courseService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.courseService.remove(id);
    }

}
