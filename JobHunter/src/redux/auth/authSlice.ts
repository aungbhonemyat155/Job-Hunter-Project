import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface AuthInfo {
	auth: boolean;
	data: UserData;
}

interface UserData {
	name: string | null;
	email: string | null;
	profile_photo: string | null;
	bio: string | null;
	role: string | null;
}

const initialState: AuthInfo = {
	auth: false,
	data: {
		name: null,
		email: null,
		profile_photo: null,
		bio: null,
		role: null,
	},
};

const removeData: UserData = {
	name: null,
	email: null,
	profile_photo: null,
	bio: null,
	role: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action: PayloadAction<UserData>) => {
			state.auth = true;
			state.data = action.payload;
		},
		logout: (state) => {
			state.auth = false;
			state.data = removeData;
		},
	},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
