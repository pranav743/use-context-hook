import type { UsersState } from '../types';

const initialState: UsersState = {
  users: [
    { id: 1, username: 'alice', password: '1234' },
    { id: 2, username: 'bob', password: 'abcd' },
    { id: 3, username: 'charlie', password: 'pass' },
    { id: 4, username: 'david', password: '1111' },
    { id: 5, username: 'eve', password: '2222' },
  ],
};

export function usersReducer(state: UsersState | undefined, _action: { type: string }): UsersState {
  if (state === undefined) return initialState;
  return state;
}
