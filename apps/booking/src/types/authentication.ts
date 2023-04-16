import { UserProfile } from './user';

export interface AuthenticationState {
  token: string;
  user: UserProfile | undefined;
  setUser: (user: UserProfile) => void;
}
