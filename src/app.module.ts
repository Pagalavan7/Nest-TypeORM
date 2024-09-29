import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ItemsModule } from './items/items.module';
import { EmployeeModule } from './employee/employee.module';
import { ContactInfoModule } from './contact_info/contact_info.module';
import { TasksModule } from './tasks/tasks.module';
import { MeetingModule } from './meeting/meeting.module';

@Module({
  imports: [DatabaseModule, ItemsModule, EmployeeModule, ContactInfoModule, TasksModule, MeetingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
