import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactInfo } from 'src/contact_info/entities/contact_info.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    @InjectRepository(Employee)
    private contactRepos: Repository<ContactInfo>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    const emp1 = this.employeeRepository.create({
      name: 'Pagal',
      role: 'CEO',
    });

    await this.employeeRepository.save(emp1);

    const contact = this.contactRepos.create({
      address: 'Dharmapur',
      phoneNumber: 54982355,
    });

    contact.employee = emp1;

    await this.employeeRepository.save(contact);
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
