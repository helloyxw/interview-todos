import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}
  async getTodos(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }

  findOne(id: number): Promise<Todo> {
    return this.todosRepository.findOneBy({ id: id });
  }

  async createTodo(todo: Todo) {
    this.todosRepository.save(todo);
  }

  async remove(id: string): Promise<void> {
    await this.todosRepository.delete(id);
  }

  async editTodo(id: number, todo: Todo): Promise<Todo> {
    const editedTodo = await this.todosRepository.findOneBy({ id: id });
    if (!editedTodo) {
      throw new NotFoundException('Todo is not found');
    }
    editedTodo.description = todo.description;
    editedTodo.title = todo.title;
    await editedTodo.save();
    return editedTodo;
  }
}