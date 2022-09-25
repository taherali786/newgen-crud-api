import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: typeof User);
    create(user: UserDto): Promise<User>;
    findOneByEmailOrName(email?: string, name?: string): Promise<User>;
    findOneById(id?: number): Promise<User>;
    updateUser(id: any, data: any): Promise<{
        numberOfAffectedRows: number;
        updatedPost: User;
    }>;
    updateUserStatus(id: any, status: any): Promise<{
        numberOfAffectedRows: number;
        updatedPost: User;
    }>;
}
