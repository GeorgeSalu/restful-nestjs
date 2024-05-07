import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entiti';

@Injectable()
export class CourseService {

    private courses: Course[] = [
        {
            id: 1,
            name: 'fundamentos do framework nestjs',
            description: 'fundamentos do framework nestjs',
            tags: ['nodejs', 'nestjs', 'javascript']
        },
        {
            id: 2,
            name: 'fundamentos do framework express',
            description: 'fundamentos do framework express',
            tags: ['nodejs', 'express', 'javascript']
        }
    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        return this.courses.find((course: Course) => course.id === Number(id));
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex((course: Course) => course.id === Number(id));

        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }

}
