import { AuthenticationState, GetDataState, User, UserState } from '@types';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { createAuthSlice, createGetDataSlice } from './slices';

const useAppStore = create<AuthenticationState & GetDataState>()(
  devtools((...set) => ({
    ...createAuthSlice(...set),
    ...createGetDataSlice(...set),
  })),
);

export default useAppStore;
