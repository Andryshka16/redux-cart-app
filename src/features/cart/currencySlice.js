import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currency: 'Usd',
	choices: ['Eur', 'Rub', 'Uah'],
};


const currencySlice = createSlice({
	name: 'Currency',
	initialState,
	reducers: {
        changeCurrency: (state, { payload }) => {
			state.choices.push(state.currency);
			state.choices = state.choices.filter((e) => e !== payload);
			state.currency = payload;
		},
	},
});

export const { changeCurrency } = currencySlice.actions
export default currencySlice.reducer;