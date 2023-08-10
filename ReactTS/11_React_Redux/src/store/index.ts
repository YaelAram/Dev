import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { KEY_STORAGE } from "../interfaces";
import usersReducer from "./users/slice";

const persistanceMiddleware: Middleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem(KEY_STORAGE, JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	middleware: [persistanceMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
