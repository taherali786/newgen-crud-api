import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    create(user: UserDto, req: any): Promise<User>;
    findOneByEmailOrName(query: {
        name: string;
        email: string;
    }): Promise<User>;
    updateUser(id: number, user: UserDto): Promise<User>;
    updateUserStatus(id: number, status: string): Promise<User>;
}
