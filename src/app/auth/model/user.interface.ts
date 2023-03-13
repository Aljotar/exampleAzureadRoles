import { Profile } from './roles.type';

export interface User {
  active: boolean;
  client: string;
  country: string;
  name: string | null;
  pbxExt: number;
  profile: Profile;
  profileId: number;
  userId: string;
}