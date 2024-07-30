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
exports.UnitsController = void 0;
const common_1 = require("@nestjs/common");
const units_service_1 = require("./units.service");
const swagger_1 = require("@nestjs/swagger");
const unit_1 = require("../database/unit");
let UnitsController = class UnitsController {
    constructor(unitsService) {
        this.unitsService = unitsService;
    }
    add(name, bathrooms, bedrooms, area, projectId) {
        const newUnit = new unit_1.Unit();
        newUnit.bathrooms = bathrooms;
        newUnit.bedrooms = bedrooms;
        newUnit.area = area;
        this.unitsService.add(newUnit, projectId);
    }
    get(id) {
        return this.unitsService.findOne(id);
    }
    getAll() {
        return this.unitsService.findAll();
    }
    delete(id) {
        this.unitsService.remove(id);
    }
};
exports.UnitsController = UnitsController;
__decorate([
    (0, common_1.Get)('/add'),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('bathrooms')),
    __param(2, (0, common_1.Query)('bedrooms')),
    __param(3, (0, common_1.Query)('area')),
    __param(4, (0, common_1.Query)('project')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, String, Number]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "add", null);
__decorate([
    (0, common_1.Get)('/get'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/delete'),
    __param(0, (0, common_1.Query)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UnitsController.prototype, "delete", null);
exports.UnitsController = UnitsController = __decorate([
    (0, swagger_1.ApiTags)('/units'),
    (0, common_1.Controller)('units'),
    __metadata("design:paramtypes", [units_service_1.UnitsService])
], UnitsController);
//# sourceMappingURL=units.controller.js.map