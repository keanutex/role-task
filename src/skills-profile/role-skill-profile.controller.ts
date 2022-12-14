import { Body, Controller, Get, Post} from '@nestjs/common';
import { CreateRoleSkillProfileDto } from '../common/dtos/create-role-skill-profile.dto';
import { RoleSkillProfileModel } from '../common/models/role-skill-profile.model';
import { RoleSkillProfileService } from './role-skill-profile.service';

@Controller('RoleSkillProfile')
export class RoleSkillProfileController {
  constructor(private readonly roleSkillsProfileService: RoleSkillProfileService) {}

  @Post()
  async create(@Body() createRoleSkillsProfileDto: CreateRoleSkillProfileDto) {
    this.roleSkillsProfileService.create(createRoleSkillsProfileDto);
  }

  @Get()
  async findAll(): Promise<RoleSkillProfileModel[]> {
    return this.roleSkillsProfileService.findAll();
  }

}
