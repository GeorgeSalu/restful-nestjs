import { BadGatewayException, BadRequestException, Body, Controller, Get, NotFoundException, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createuser.dto";
import { Users } from "@prisma/client";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dtos/updateUser.dto";

@Controller('users')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    public async store(@Body() createUser: CreateUserDto): Promise<Users> {
        if (!createUser?.name || !createUser?.email || !createUser?.password) {
            throw new BadRequestException('name, email and passaword is required')
        }

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

    @UsePipes(ValidationPipe)
    @Put('/:id')
    public async update(
        @Body() userData: UpdateUserDto,
        @Param('id') id: string
    ): Promise<Users> {
        if (!userData?.name || !userData?.email) {
            throw new BadRequestException('name e email is required');
        }

        const userById = await this.userService.findById(id);

        if (!userById) {
            throw new NotFoundException('user not found')
        }

        const userByEmail = await this.userService.findByEmail(userData?.email);

        if (userByEmail !== null) {
            if (userByEmail?.id !== id) {
                throw new BadRequestException('this email is not available')
            }
        }

        const updatedUser = await this.userService.update({ id, data: userData });
        return updatedUser;
    }

}