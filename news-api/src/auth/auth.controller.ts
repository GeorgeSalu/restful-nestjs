import { Body, Controller, NotFoundException, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UserService } from "src/user/user.service";
import { LoginDto } from "./dtos/login.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private userService: UserService,
    ) { }

    @UsePipes(ValidationPipe)
    @Post()
    public async login(
        @Body() loginData: LoginDto
    ): Promise<{ accessToken: string }> {
        const finduserByEmail = await this.userService.findByEmail(loginData?.email);

        if (!finduserByEmail) {
            throw new NotFoundException('user not found')
        }

        return await this.authService.login(loginData, finduserByEmail);
    }

}