import { IsInt, IsString } from 'class-validator';

export class CreatePersonalSkillProfileDto {
  @IsInt()
  readonly userId: number;

  @IsString()
  readonly userName: string;
}
