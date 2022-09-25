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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const users_service_1 = require("./users.service");
const passport_1 = require("@nestjs/passport");
const doesUserExist_guard_1 = require("../../core/guard/doesUserExist.guard");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    async create(user, req) {
        return await this.userService.create(user);
    }
    async findOneByEmailOrName(query) {
        const { email, name } = query;
        return await this.userService.findOneByEmailOrName(email, name);
    }
    async updateUser(id, user) {
        const { numberOfAffectedRows, updatedPost } = await this.userService.updateUser(id, user);
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException('This User doesn\'t exist');
        }
        return updatedPost;
    }
    async updateUserStatus(id, status) {
        const { numberOfAffectedRows, updatedPost } = await this.userService.updateUserStatus(id, status);
        if (numberOfAffectedRows === 0) {
            throw new common_1.NotFoundException('This User doesn\'t exist');
        }
        return updatedPost;
    }
};
__decorate([
    (0, common_1.UseGuards)(doesUserExist_guard_1.DoesUserExist),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UserDto, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOneByEmailOrName", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, user_dto_1.UserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserStatus", null);
UsersController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map