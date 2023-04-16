import { AuthenticationState } from '@types';
import { UserProfile } from '@types';
import useSWR from 'swr';
import { StateCreator } from 'zustand';

export const createAuthSlice: StateCreator<
  AuthenticationState,
  [],
  [],
  AuthenticationState
> = (set) => ({
  token: '',
  user: undefined,
  setUser: (user) => set(() => ({ user })),
});
