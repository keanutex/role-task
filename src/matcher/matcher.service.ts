import { Injectable } from '@nestjs/common';
import { PersonalSkillProfileModel } from 'src/common/models/personal-skill-profile.model';
import { RoleSkillProfileModel } from 'src/common/models/role-skill-profile.model';
import { MatchToRoleDto } from '../common/dtos/match-to-role.dto';
import { MatchToUserDto } from '../common/dtos/match-to-user.dto';
import { MatchModel } from '../common/models/match.model';
import { PersonalSkillProfileService } from '../skills-profile/personal-skill-profile.service';
import { RoleSkillProfileService } from '../skills-profile/role-skill-profile.service';

/* 
Below is my solution.
I wasn't sure if this was the only file that should be edited, but I assumed that I could make slight changes to some of the other files.
E.g. I edited the other services to add a single find function so that this service would not be responsible for that logic.
I also changed the tsconfig file to add strict null checks so that those new functions would be properly enforced.
I changed the type of score to be number | null based on the solution question.
I added error handling for records that are not found. Currently they are just being thrown and not caught/handled. Ideally the controller would handle the errors and return a bad request/internal server error
with appropriate information on the error.
Some of the other changes you will see in the other files is simply my formatter.
*/

@Injectable()
export class MatcherService {
  constructor(
    private readonly personalSkillProfileService: PersonalSkillProfileService,
    private readonly roleSkillProfileService: RoleSkillProfileService,
  ) {}

  /**
   * For each role, returns each users' average skill score for the role
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAll(): MatchModel[] {
    console.log(`About to match all`);
    console.log(
      `Personal skill profiles:`,
      JSON.stringify(this.personalSkillProfileService.findAll()),
    );
    console.log(
      `Role skill profiles:`,
      JSON.stringify(this.roleSkillProfileService.findAll()),
    );
    const matches: MatchModel[] = [];

    const users = this.personalSkillProfileService.findAll();
    const roles = this.roleSkillProfileService.findAll();

    for (const user of users) {
      for (const role of roles) {
        matches.push(this.matchToRole(role, user));
      }
    }

    return matches;
  }

  /**
   * Accepts parameter roleId
   * Returns each users' average skill score for the role
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAllToRole(dto: MatchToRoleDto): MatchModel[] {
    const matches: MatchModel[] = [];

    const users = this.personalSkillProfileService.findAll();
    const role = this.roleSkillProfileService.find({ roleId: dto.roleId });

    if (!role) {
      throw new Error(`No role found with id ${dto.roleId}`);
    }

    for (const user of users) {
      matches.push(this.matchToRole(role, user));
    }

    return matches;
  }

  /**
   * Accepts parameter userId
   * Returns the average skill score for all roles for the provided user
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAllToUser(dto: MatchToUserDto): MatchModel[] {
    const matches: MatchModel[] = [];

    const user = this.personalSkillProfileService.find({ userId: dto.userId });
    const roles = this.roleSkillProfileService.findAll();

    if (!user) {
      throw new Error(`No user found with id ${dto.userId}`);
    }

    for (const role of roles) {
      matches.push(this.matchToRole(role, user));
    }

    return matches;
  }

  private matchToRole(
    role: RoleSkillProfileModel,
    user: PersonalSkillProfileModel,
  ): MatchModel {
    const requiredSkills = role.requiredSkills;

    if (!requiredSkills) {
      throw new Error(
        `No required skills found for role ${role.roleName} ${role.id}`,
      );
    }

    const userSkills = user.skills;

    if (!userSkills) {
      throw new Error(
        `No required skills found for user ${user.userName} ${user.userId}`,
      );
    }

    let totalScore = 0;
    let skillIndex = 0;
    for (let skill of requiredSkills) {
      const foundSkill = userSkills.find((p) => p.skillId === skill.id);
      if (foundSkill) {
        skillIndex++;
        totalScore += foundSkill.score;
      }
    }
    let averageScore: number | null = null;
    if (skillIndex === requiredSkills.length) {
      averageScore = Math.round(totalScore / skillIndex);
    }
    return {
      userName: user.userName,
      roleName: role.roleName,
      score: averageScore,
    };
  }
}
