import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth-dto';
import { ForgetAuthDto } from './dto/forget-auth.dto';
import { ResetAuthDto } from './dto/reset-auth.dto';
import { UserService } from '../user/user.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() body: LoginAuthDto) {
    return this.authService.login(body.email, body.password);
  }

  @Post('register')
  async register(@Body() body: RegisterAuthDto) {
    return this.authService.register(body);
  }

  @Post('forget')
  async forget(@Body() body: ForgetAuthDto) {
    return this.authService.forget(body.email);
  }

  @Post('reset')
  async reset(@Body() body: ResetAuthDto) {
    return this.authService.reset(body.password, body.token);
  }
}
