import { Injectable, Logger } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    await this.itemRepository.save(createItemDto);
    return createItemDto;
  }

  async findAll() {
    return await this.itemRepository.find();
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    const result = await this.itemRepository.update({ id }, updateItemDto);
    // if (!result.affected[0]) throw new Error('Id not found');
  }

  async remove(id: number) {
    return this.itemRepository.delete(id);
  }

  async clear() {
    return this.itemRepository.clear();
  }
}
