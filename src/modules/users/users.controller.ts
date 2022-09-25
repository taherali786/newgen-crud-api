import { Controller,Post,Body,Request,Get,Query,Put,Param,NotFoundException,Patch,UseGuards} from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';
import { DoesUserExist } from '../../core/guard/doesUserExist.guard';

@Controller('user')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @UseGuards(DoesUserExist)
    @Post()
    async create(@Body() user:UserDto,@Request() req):Promise<User>
    {
        return await this.userService.create(user)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async findOneByEmailOrName(@Query() query:{name:string,email:string})
    {
        const {email,name} = query;
        return await this.userService.findOneByEmailOrName(email,name);
    }

    @Put(':id')
    async updateUser(@Param("id") id:number,@Body() user:UserDto):Promise<User>
    {
        const { numberOfAffectedRows, updatedPost }= await  this.userService.updateUser(id,user)
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }
        return updatedPost
    }

    @Patch(":id")
    async updateUserStatus(@Param("id") id:number,@Body() status:string):Promise<User>
    {
        const { numberOfAffectedRows, updatedPost }= await  this.userService.updateUserStatus(id,status)
        if (numberOfAffectedRows === 0) {
            throw new NotFoundException('This User doesn\'t exist');
        }
        return updatedPost
    }
}
