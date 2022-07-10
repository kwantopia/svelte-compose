	import { writable } from 'svelte/store';

	export const addressStores = writable({
		addresses: []
	});

	export const defaultAddressId = writable('');
