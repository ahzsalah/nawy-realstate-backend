import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { DevelopersModule } from './developers/developers.module';
import { ProjectsService } from './projects/projects.service';
import { UnitsService } from './units/units.service';
import { ProjectsModule } from './projects/projects.module';
import { UnitsModule } from './units/units.module';
import { DevelopersService } from './developers/developers.service';
import { ProjectsController } from './projects/projects.controller';
import { DevelopersController } from './developers/developers.controller';
import { UnitsController } from './units/units.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DatabaseModule, DevelopersModule, ProjectsModule, UnitsModule, AuthModule, UsersModule],
  controllers: [
    AppController,
    DevelopersController,
    ProjectsController,
    UnitsController,
  ],
  providers: [AppService, DevelopersService, ProjectsService, UnitsService],
})
export class AppModule {}
