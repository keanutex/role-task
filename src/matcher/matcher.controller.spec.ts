import { Test, TestingModule } from '@nestjs/testing';
import { MatchModel } from '../common/models/match.model';
import { SkillsProfileModule } from '../skills-profile/skill-profile.module';
import { MatcherController } from './matcher.controller';
import { MatcherService } from './matcher.service';

describe('MatcherController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      imports: [SkillsProfileModule],
      controllers: [MatcherController],
      providers: [MatcherService],
    }).compile();
  });

  describe('MatchAll', () => {
    it('should return a match of all candidates', async () => {
      const matcherController = app.get(MatcherController);
      const matches: MatchModel[] = await matcherController.matchAll()
      expect(matches.length===6);

      const candidate1ProductManager = matches.find((match)=> match.roleName=='Product Manager' && match.userName == 'Candidate1');
      const candidate2ProductManager = matches.find((match)=> match.roleName=='Product Manager' && match.userName == 'Candidate2');
      const candidate1CustomerSuccess = matches.find((match)=> match.roleName=='Head of Customer Success' && match.userName == 'Candidate1');

      expect(candidate1ProductManager.score == 100);
      expect(candidate2ProductManager.score == 77);
      expect(candidate1CustomerSuccess.score == null);
    });
  });
});
