import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCurrencies = createAsyncThunk(
	'currency/fetchCurrencies',
	async () => {
		const url =
			'https://api.apilayer.com/currency_data/live?source=USD&currencies=EUR%2C%20RUB%2C%20UAH';
		const myHeaders = new Headers();
		
		myHeaders.append('apikey', 'JML8HWJXjbsPAWeWYfl5mO8ci8sucEz9');

		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers: myHeaders,
		};

		return await (await fetch(url, requestOptions)).json();
	}
);
