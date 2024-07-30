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
exports.DevelopersController = void 0;
const common_1 = require("@nestjs/common");
const developers_service_1 = require("./developers.service");
const swagger_1 = require("@nestjs/swagger");
const developer_1 = require("../database/developer");
let DevelopersController = class DevelopersController {
    constructor(developersService) {
        this.developersService = developersService;
    }
    add(name) {
        const newDeveloper = new developer_1.Developer();
        newDeveloper.name = name;
        this.developersService.add(newDeveloper);
    }
    get(id) {
        return this.developersService.findOne(id);
    }
    getAll() {
        return this.developersService.findAll();
    }
    delete(id) {
        this.developersService.remove(id);
    }
};
exports.DevelopersController = DevelopersController;
__decorate([
    (0, common_1.Get)('/add'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DevelopersController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevelopersController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DevelopersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DevelopersController.prototype, "delete", null);
exports.DevelopersController = DevelopersController = __decorate([
    (0, swagger_1.ApiTags)('/developers'),
    (0, common_1.Controller)('developers'),
    __metadata("design:paramtypes", [developers_service_1.DevelopersService])
], DevelopersController);
//# sourceMappingURL=developers.controller.js.map