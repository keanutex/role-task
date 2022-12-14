import { SkillModel } from "./skill.model";

export interface RoleSkillProfileModel {
  id: number;
  roleName: string;
  requiredSkills?: SkillModel[];
  type?: RoleSkillProfileType;
}

export enum RoleSkillProfileType {
  FULL = 1,
  POSITIVE = 2,
}
