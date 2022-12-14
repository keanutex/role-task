import { Module } from '@nestjs/common';
import { PersonalSkillProfileController} from './personal-skill-profile.controller';
import { PersonalSkillProfileService } from './personal-skill-profile.service';
import { RoleSkillProfileController } from './role-skill-profile.controller';
import { RoleSkillProfileService } from './role-skill-profile.service';

@Module({
  controllers: [PersonalSkillProfileController, RoleSkillProfileController],
  providers: [PersonalSkillProfileService, RoleSkillProfileService],
  exports: [PersonalSkillProfileService, RoleSkillProfileService],
})
export class SkillsProfileModule {}
