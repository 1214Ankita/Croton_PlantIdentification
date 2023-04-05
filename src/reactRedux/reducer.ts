export const AppReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case 'USER_STATE':
			console.log("set user state ", action.payload)
			return {
				...state,
				user:{
					username: action.payload.split('@croton.com')
				} 
			};
		default:
			return state;
	}
};

const initialState = {
	user:{}
};