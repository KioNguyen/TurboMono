export interface User {
  id: number;
  email: string;
  firstName: string;
}
export interface UserProfile {
  email: string;
  firstName: string;
  isLoggedIn: boolean;
}

export interface UserState {
  user: User | undefined;
  setUser: (user: User) => void;
}
