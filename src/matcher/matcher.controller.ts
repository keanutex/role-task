import { Body, Controller, Get, Param, Post} from '@nestjs/common';
import { MatchToRoleDto } from '../common/dtos/match-to-role.dto';
import { MatchToUserDto } from '../common/dtos/match-to-user.dto';
import { MatchModel } from '../common/models/match.model';
import { RoleSkillProfileService } from '../skills-profile/role-skill-profile.service';
import { MatcherService } from './matcher.service';

@Controller('Matcher')
export class MatcherController {
  constructor(private readonly matcherService: MatcherService) {}

  // E.g. http://localhost:3000/Matcher/MatchAll
  @Get('MatchAll')
  async matchAll(): Promise<MatchModel[]> {
    return this.matcherService.matchAll();
  }


  // E.g. http://localhost:3000/Matcher/MatchAllToRole/10
  @Get('MatchAllToRole/:roleId')
  public async matchAllToRole(
    @Param() dto: MatchToRoleDto,
  ): Promise<MatchModel[]> {
    const { roleId } = dto;
    console.log(`Matching all users to the role id `, roleId);
    return this.matcherService.matchAllToRole(dto);
  }

    // E.g. http://localhost:3000/Matcher/MatchAllToUser/10
    @Get('MatchAllToUser/:roleId')
    public async matchAllToUser(
      @Param() dto: MatchToUserDto,
    ): Promise<MatchModel[]> {
      const { userId } = dto;
      console.log(`Matching the user ${userId} to all roles`);
      return this.matcherService.matchAllToUser(dto);

    }
}
