import { Injectable } from '@nestjs/common';
import { MatchToUserDto } from 'src/common/dtos/match-to-user.dto';
import { CreatePersonalSkillProfileDto } from '../common/dtos/create-personal-skill-profile.dto';
import { PersonalSkillProfileModel } from '../common/models/personal-skill-profile.model';

@Injectable()
export class PersonalSkillProfileService {
  private readonly personalSkillProfiles: PersonalSkillProfileModel[] = [
    {
      userId: 10000,
      userName: 'Candidate1',
      skills: [
        {
          skillId: 1,
          score: 100,
        },
        {
          skillId: 2,
          score: 100,
        },
        {
          skillId: 3,
          score: 100,
        },
        {
          skillId: 4,
          score: 20,
        },
      ],
    },
    {
      userId: 10001,
      userName: 'Candidate2',
      skills: [
        {
          skillId: 1,
          score: 100,
        },
        {
          skillId: 2,
          score: 100,
        },
        {
          skillId: 3,
          score: 30,
        },
        {
          skillId: 4,
          score: 100,
        },
      ],
    },
  ];

  create(skillsProfile: CreatePersonalSkillProfileDto) {
    this.personalSkillProfiles.push(skillsProfile);
  }

  findAll(): PersonalSkillProfileModel[] {
    //console.log(`Returing skill profiles`, this.skillsProfiles);
    return this.personalSkillProfiles;
  }

  find(dto: MatchToUserDto): PersonalSkillProfileModel | undefined {
    const users = this.personalSkillProfiles;
    const user = users.find(
      (user) => user.userId === Number.parseInt(dto.userId),
    );
    return user;
  }
}
