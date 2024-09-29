import { Employee } from 'src/employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Meeting {
  @PrimaryGeneratedColumn()
  meetingId: number;

  @Column()
  meetingURL: string;

  @ManyToMany(() => Employee, (employee) => employee.meeting)
  employee: Employee[];
}
