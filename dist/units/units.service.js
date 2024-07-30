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
exports.UnitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const unit_1 = require("./../database/unit");
const projects_service_1 = require("../projects/projects.service");
let UnitsService = class UnitsService {
    constructor(unitsRepository, projectsService) {
        this.unitsRepository = unitsRepository;
        this.projectsService = projectsService;
    }
    async add(unit, projectId) {
        let project = await this.projectsService.findOne(projectId);
        unit.project = project;
        await this.unitsRepository.save(unit);
    }
    findAll() {
        return this.unitsRepository.find();
    }
    findOne(id) {
        return this.unitsRepository.findOneBy({ id });
    }
    async remove(id) {
        await this.unitsRepository.delete(id);
    }
};
exports.UnitsService = UnitsService;
exports.UnitsService = UnitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(unit_1.Unit)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        projects_service_1.ProjectsService])
], UnitsService);
//# sourceMappingURL=units.service.js.map