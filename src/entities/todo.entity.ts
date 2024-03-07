import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsBoolean, IsString, Max, MaxLength, Min, MinLength } from 'class-validator';

@Entity()
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 150 })
  @MinLength(1)
  @MaxLength(150)
  @IsString()
  todo: string;

  @Column()
  @IsBoolean()
  completed: boolean;
}