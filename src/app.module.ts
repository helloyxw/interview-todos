import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "root",
    "password": "gs0421875",
    "database": "todos",
    "entities": [
        __dirname + "/**/*.entity{.ts,.js}"
    ],
    "synchronize": true
  } as TypeOrmModuleOptions),
  TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
