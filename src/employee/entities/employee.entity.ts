import { ContactInfo } from 'src/contact_info/entities/contact_info.entity';
import { Task } from 'src/tasks/entities/task.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  role: string;

  @OneToOne(() => ContactInfo, (contactInfo) => contactInfo.employee)
  contactInfo: ContactInfo;

  @OneToMany(() => Task, (tasks) => tasks.employee)
  tasks: Task[];

  @ManyToOne(() => Employee, (manager) => manager.subordinates)
  manager: Employee;

  @OneToMany(() => Employee, (subordinates) => subordinates.manager)
  subordinates: Employee[];
}
