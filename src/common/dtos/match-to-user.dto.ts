import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MatchToUserDto {
  @IsString()
  @IsNotEmpty()
  public userId: string;
}
