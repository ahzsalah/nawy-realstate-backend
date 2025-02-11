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
exports.ProjectsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_1 = require("../database/project");
const developers_service_1 = require("../developers/developers.service");
let ProjectsService = class ProjectsService {
    constructor(projectsRepository, developersService) {
        this.projectsRepository = projectsRepository;
        this.developersService = developersService;
    }
    async add(project, devId) {
        let developer = await this.developersService.findOne(devId);
        project.developer = developer;
        await this.projectsRepository.save(project);
    }
    findAll() {
        return this.projectsRepository.find({ relations: ['developer', 'units'] });
    }
    findOne(id) {
        return this.projectsRepository.findOne({
            where: { id },
            relations: ['developer', 'units'],
        });
    }
    async remove(id) {
        await this.projectsRepository.delete(id);
    }
};
exports.ProjectsService = ProjectsService;
exports.ProjectsService = ProjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        developers_service_1.DevelopersService])
], ProjectsService);
//# sourceMappingURL=projects.service.js.map