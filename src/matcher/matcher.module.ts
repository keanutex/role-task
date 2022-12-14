import { Module } from '@nestjs/common';
import { SkillsProfileModule } from '../skills-profile/skill-profile.module';
import { MatcherController } from './matcher.controller';
import { MatcherService } from './matcher.service';

@Module({
  imports: [SkillsProfileModule],
  controllers: [MatcherController],
  providers: [MatcherService],
})
export class MatcherModule {}
