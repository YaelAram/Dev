import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { KEY_STORAGE, User, UserId } from "../../interfaces";

const initialState: UserId[] = (() => {
	const persistedState = localStorage.getItem(KEY_STORAGE);
	return persistedState ? JSON.parse(persistedState).users : [];
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, { payload }: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...payload });
		},
		updateUser: (state, { payload }: PayloadAction<UserId>) => {
			const index = state.findIndex((user) => user.id === payload.id);
			if (index >= 0) state[index] = payload;
		},
		deleteUserById: (state, { payload }: PayloadAction<string>) => {
			return state.filter((user) => user.id !== payload);
		},
	},
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, updateUser } = usersSlice.actions;
