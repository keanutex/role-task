import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatcherModule } from './matcher/matcher.module';
import { SkillsProfileModule } from './skills-profile/skill-profile.module';


@Module({
  imports: [SkillsProfileModule, MatcherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
