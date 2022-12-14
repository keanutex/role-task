import { Injectable } from '@nestjs/common';
import { MatchToRoleDto } from '../common/dtos/match-to-role.dto';
import { MatchToUserDto } from '../common/dtos/match-to-user.dto';
import { MatchModel } from '../common/models/match.model';
import { SkillScoreModel } from '../common/models/skill-score.model';
import { PersonalSkillProfileService } from '../skills-profile/personal-skill-profile.service';
import { RoleSkillProfileService } from '../skills-profile/role-skill-profile.service';

@Injectable()
export class MatcherService {

  constructor(
    private readonly personalSkillProfileService: PersonalSkillProfileService,
    private readonly roleSkillProfileService: RoleSkillProfileService,
  ) {

  }

  /** 
   * For each role, returns each users' average skill score for the role
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAll(): MatchModel[] {
    console.log(`About to match all`)
    console.log(`Personal skill profiles:`, this.personalSkillProfileService.findAll());
    console.log(`Role skill profiles:`, this.roleSkillProfileService.findAll());

    const matches: MatchModel[] = [];


    /**
     * Add code here
     */

    return matches;
  }

  /** 
   * Accepts parameter roleId
   * Returns each users' average skill score for the role
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAllToRole(dto: MatchToRoleDto): MatchModel[] {
    const matches: MatchModel[] = [];

    /**
     * Add code here
     */

    return matches;
  }

  /** 
   * Accepts parameter userId
   * Returns the average skill score for all roles for the provided user
   * If the user does not have all skills in their PersonalSkillProfile for a given role, return null score for the user for that role
   */
  matchAllToUser(dto: MatchToUserDto): MatchModel[] {
    const matches: MatchModel[] = [];

    /**
     * Add code here
     */

    return matches;
  }

}
