import { Injectable } from '@nestjs/common';
import { CreateRoleSkillProfileDto } from '../common/dtos/create-role-skill-profile.dto';
import { RoleSkillProfileModel } from '../common/models/role-skill-profile.model';

@Injectable()
export class RoleSkillProfileService {
  private readonly roleSkillProfiles: RoleSkillProfileModel[] = [ 
    {
      id: 1000,
      roleName: 'Product Manager',
      requiredSkills: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        }
      ]
    },
    {
      id: 1001,
      roleName: 'Head of Engineering',
      requiredSkills: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 4,
        }
      ]
    },    
    {
      id: 1002,
      roleName: 'Head of Customer Success',
      requiredSkills: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 5,
        }
      ]
    }, 
  ];


  create(roleSkillsProfile: CreateRoleSkillProfileDto) {
    this.roleSkillProfiles.push(roleSkillsProfile);
  }

  findAll(): RoleSkillProfileModel[] {
    return this.roleSkillProfiles;
  }
}
