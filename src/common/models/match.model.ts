/**
 * Score for each user + role combination
 */
export interface MatchModel {
  userName: string;
  roleName: string;
  // Average score of the user's skill scores that are contained in the role
  score: number | null;
}
