import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Developer } from "./developer";
import { Project } from "./project";
import { Unit } from "./unit";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "database",
      port: 5432,
      username: "postgres",
      password: "5996",
      database: "nawy",
      entities: [Developer, Project, Unit],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Developer, Project, Unit]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
