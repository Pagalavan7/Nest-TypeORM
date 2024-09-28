import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @Transform(({ value }) => {
    if (value === undefined) {
      return true;
    }
    return value === 'true';
  })
  @IsBoolean()
  public: boolean;
}
