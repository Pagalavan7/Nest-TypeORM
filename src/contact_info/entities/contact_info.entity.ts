import { Employee } from 'src/employee/entities/employee.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phoneNumber: number;

  @Column()
  address: string;

  @OneToOne(() => Employee, (employee) => employee.contactInfo)
  @JoinColumn() //creates a foreign key of employee entity primary key..
  employee: Employee;
}
