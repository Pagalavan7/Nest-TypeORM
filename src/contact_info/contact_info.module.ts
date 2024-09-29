import { Module } from '@nestjs/common';
import { ContactInfoService } from './contact_info.service';
import { ContactInfoController } from './contact_info.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactInfo } from './entities/contact_info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ContactInfo])],
  controllers: [ContactInfoController],
  providers: [ContactInfoService],
})
export class ContactInfoModule {}
