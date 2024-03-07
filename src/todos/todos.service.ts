import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from 'src/entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private todosRepository: Repository<Todo>,
  ) {}

  async getTodos(): Promise<Todo[]> {
    return await this.todosRepository.find();
  }

  async findOne(id: number): Promise<Todo> {
    return await this.todosRepository.findOneBy({ id: id });
  }

  async createTodo(todo: Todo) {
    return await this.todosRepository.save(todo);
  }

  async remove(id: number) {
    return await this.todosRepository.delete(id);
  }

  async update(id: number, todo: Todo) {
    return await this.todosRepository.update(id, todo)
  }
}