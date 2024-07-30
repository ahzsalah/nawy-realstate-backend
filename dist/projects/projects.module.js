"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsModule = void 0;
const common_1 = require("@nestjs/common");
const projects_service_1 = require("./projects.service");
const typeorm_1 = require("@nestjs/typeorm");
const projects_controller_1 = require("./projects.controller");
const project_1 = require("./../database/project");
const developers_service_1 = require("../developers/developers.service");
const developer_1 = require("./../database/developer");
let ProjectsModule = class ProjectsModule {
};
exports.ProjectsModule = ProjectsModule;
exports.ProjectsModule = ProjectsModule = __decorate([
    (0, common_1.Module)({
        controllers: [projects_controller_1.ProjectsController],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([project_1.Project]),
            typeorm_1.TypeOrmModule.forFeature([developer_1.Developer]),
        ],
        providers: [projects_service_1.ProjectsService, developers_service_1.DevelopersService],
        exports: [projects_service_1.ProjectsService],
    })
], ProjectsModule);
//# sourceMappingURL=projects.module.js.map