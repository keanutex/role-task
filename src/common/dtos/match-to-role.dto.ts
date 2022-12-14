import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MatchToRoleDto {
  @IsString()
  @IsNotEmpty()
  public roleId: string;
}
