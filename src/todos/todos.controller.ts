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
  import { Todo } from './todo.entity';
  import { TodosService } from './todos.service';
  
  @Controller('todos')
  export class TodosController {
    constructor(private todosService: TodosService) {}
  
    @Get()
    findAll() {
      return this.todosService.getTodos();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id) {
      return this.todosService.findOne(id);
    }
  
    @Post() create(@Body() todo: Todo) {
      return this.todosService.createTodo(todo);
    }
  
    @Patch(':id')
    async editTodo(@Body() todo: Todo, @Param('id') id: number): Promise<Todo> {
      const todoEdited = await this.todosService.editTodo(id, todo);
      return todoEdited;
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id) {
      this.todosService.remove(id);
    }
  }