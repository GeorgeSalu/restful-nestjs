import { BadRequestException, Body, Controller, Get, NotFoundException, Param, Post } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createuser.dto";
import { Users } from "@prisma/client";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @Post()
    public async store(@Body() createUser: CreateUserDto): Promise<Users> {
        const userByEmail = await this.userService.findByEmail(createUser?.email);

        if (userByEmail) {
            throw new BadRequestException('this email is not available');
        }

        const newUser = await this.userService.create(createUser);
        return newUser;
    }

    @Get('/:id')
    public async show(@Param('id') id: string): Promise<Users> {
        const user = await this.userService.findById(id);
        if (!user) {
            throw new NotFoundException('user not found');
        }
        return user;
    }


}