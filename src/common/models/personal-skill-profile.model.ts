import { SkillScoreModel } from "./skill-score.model";

/**
 * Used to manage users and thier associated skills. Each skill associated with a user has a score associated with that user/skill.
 */
export interface PersonalSkillProfileModel {
  userId: number;
  userName: string;
  skills?: SkillScoreModel[];
}