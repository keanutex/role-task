import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CreatePersonalSkillProfileDto } from '../common/dtos/create-personal-skill-profile.dto';
import { PersonalSkillProfileModel } from '../common/models/personal-skill-profile.model';
import { PersonalSkillProfileService } from './personal-skill-profile.service';

@Controller('PersonalSkillProfile')
export class PersonalSkillProfileController {
  constructor(private readonly personalSkillsProfileService: PersonalSkillProfileService) {}

  @Post()
  async create(@Body() createPersonalSkillsProfileDto: CreatePersonalSkillProfileDto) {
    this.personalSkillsProfileService.create(createPersonalSkillsProfileDto);
  }

  @Get()
  async findAll(): Promise<PersonalSkillProfileModel[]> {
    return this.personalSkillsProfileService.findAll();
  }

}
