import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
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


}