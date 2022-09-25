"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../core/constants");
const sequelize_1 = require("sequelize");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(user) {
        return await this.userRepository.create(user);
    }
    async findOneByEmailOrName(email, name) {
        let arr = [];
        if (email) {
            arr.push({ email });
        }
        if (name) {
            arr.push({ name });
        }
        return await this.userRepository.findOne({ where: { [sequelize_1.Op.or]: arr } });
    }
    async findOneById(id) {
        return await this.userRepository.findOne({ where: { id } });
    }
    async updateUser(id, data) {
        const [numberOfAffectedRows, [updatedPost]] = await this.userRepository.update(Object.assign({}, data), { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }
    async updateUserStatus(id, status) {
        const [numberOfAffectedRows, [updatedPost]] = await this.userRepository.update(Object.assign({}, status), { where: { id }, returning: true });
        return { numberOfAffectedRows, updatedPost };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.USER_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map