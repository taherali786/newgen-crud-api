import { Injectable,Inject } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import {  Op} from 'sequelize';

@Injectable()
export class UsersService {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository:typeof User){}

    async create(user: UserDto): Promise<User> {
        return await this.userRepository.create<User>(user);
    }

    async findOneByEmailOrName(email?: string,name?:string): Promise<User> {
        let arr =[];
        if(email){
            arr.push({email})
        }
        if(name){
            arr.push({name})
        }
        return await this.userRepository.findOne<User>({ where: { [Op.or]:arr } });
    }
    async findOneById(id?: number): Promise<User> {
        return await this.userRepository.findOne<User>({ where: { id } });
    }

    async updateUser(id,data){
        const [numberOfAffectedRows, [updatedPost]] = await this.userRepository.update({...data},{where:{id},returning: true})
        return { numberOfAffectedRows, updatedPost };
    }

    async updateUserStatus(id,status){
        const [numberOfAffectedRows, [updatedPost]] = await this.userRepository.update({...status},{where:{id},returning: true})
        return { numberOfAffectedRows, updatedPost };
    }

}
