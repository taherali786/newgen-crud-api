import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    name: string;
    mob_no: string;
    email: string;
    password: string;
    status: string;
}
