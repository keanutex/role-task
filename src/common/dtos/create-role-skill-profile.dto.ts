import { IsInt, IsString } from 'class-validator';

export class CreateRoleSkillProfileDto {
  @IsInt()
  readonly id: number;

  @IsString()
  readonly roleName: string;
}
