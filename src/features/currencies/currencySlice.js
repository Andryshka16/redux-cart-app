import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrencies } from './fetchCurrencies';

const initialState = {
	currency: 'Usd',
	choices: ['Eur', 'Rub', 'Uah'],
	converter: {},
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
	extraReducers: {
		[fetchCurrencies.fulfilled]: (state, { payload }) => {
			state.converter = payload.quotes;
		},
	},
});

export const { changeCurrency } = currencySlice.actions;
export default currencySlice.reducer;
