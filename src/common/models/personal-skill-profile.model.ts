import { SkillScoreModel } from "./skill-score.model";

export interface PersonalSkillProfileModel {
  userId: number;
  userName: string;
  skills?: SkillScoreModel[];
}