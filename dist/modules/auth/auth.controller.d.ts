import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        user: any;
        token: string;
    }>;
    signUp(user: UserDto): Promise<{
        user: any;
        token: string;
    }>;
}
