"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("./database/database.module");
const developers_module_1 = require("./developers/developers.module");
const projects_service_1 = require("./projects/projects.service");
const units_service_1 = require("./units/units.service");
const projects_module_1 = require("./projects/projects.module");
const units_module_1 = require("./units/units.module");
const developers_service_1 = require("./developers/developers.service");
const projects_controller_1 = require("./projects/projects.controller");
const developers_controller_1 = require("./developers/developers.controller");
const units_controller_1 = require("./units/units.controller");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, developers_module_1.DevelopersModule, projects_module_1.ProjectsModule, units_module_1.UnitsModule, auth_module_1.AuthModule, users_module_1.UsersModule],
        controllers: [
            app_controller_1.AppController,
            developers_controller_1.DevelopersController,
            projects_controller_1.ProjectsController,
            units_controller_1.UnitsController,
        ],
        providers: [app_service_1.AppService, developers_service_1.DevelopersService, projects_service_1.ProjectsService, units_service_1.UnitsService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map