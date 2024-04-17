import { BadRequestException, Body, Controller, Post } from "@nestjs/common";
import { CreateuserDto } from "./dtos/createuser.dto";
import { Users } from "@prisma/client";

@Controller('users')
export class UserController {

    @Post()
    public async store(@Body() createUser: CreateuserDto): Promise<Users> {
        if (!createUser?.name || !createUser?.email || createUser?.password) {
            throw new BadRequestException('name, email and passaword is requeired');
        }
    }


}