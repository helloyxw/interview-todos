import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
  } from '@nestjs/common';
  import { ParseIntPipe } from '@nestjs/common/pipes/parse-int.pipe';
  import { Todo } from 'src/entities/todo.entity';
  import { TodosService } from './todos.service';
  
  @Controller('todos')
  export class TodosController {
    constructor(private todosService: TodosService) {}
  
    @Get()
    findAll() {
      return this.todosService.getTodos();
    }
  
    @Get('/:id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.todosService.findOne(id);
    }
  
    @Post()
    create(@Body() todo: Todo) {
      return this.todosService.createTodo(todo);
    }
  
    @Patch('/:id')
    update(@Body() todo: Todo, @Param('id') id: number) {
      return this.todosService.update(id, todo);
    }
  
    @Delete('/:id')
    remove(@Param('id') id: number) {
      return this.todosService.remove(id);
    }
  }