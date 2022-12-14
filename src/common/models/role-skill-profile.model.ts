import { SkillModel } from "./skill.model";

/**
 * Used to manage roles and the skills that are required for success in the given role.
 * type can be ignored for the take home task
 */
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
