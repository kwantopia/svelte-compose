<script lang="ts">
	import { bind } from 'svelte/internal';
	import * as Yup from 'yup';
	import { v4 as uuidv4 } from 'uuid';
	import { addressStores, defaultAddressId } from './addressStores';

	const phoneRegExp =
		/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

	const schema = Yup.object().shape({
		street1: Yup.string().required('Please provide your street address'),
		email: Yup.string().required('Please provide your email').email("Email doesn't look right"),
		zipCode: Yup.string().required('Please provide your zip code'),
		city: Yup.string().required('Please provide your city'),
		state: Yup.string().required('Please provide your state'),
		country: Yup.string().required('Please provide your country'),
		phoneNo: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
		isDefault: Yup.boolean().default(false)
	});

	let errors = {};
	let values = resetValues();

	function resetValues() {
		let new_values = {
			id: '',
			street1: '',
			street2: '',
			zipCode: '',
			city: '',
			state: '',
			country: '',
			phoneNo: '',
			email: '',
			isDefault: false
		};
		return new_values;
	}

	function onCancel() {
		errors = {};
		values = resetValues();
	}

	async function submitHandler() {
		try {
			// `abortEarly: false` to get all the errors
			await schema.validate(values, { abortEarly: false });
			addAddress(values);

			// reset variables
			values = resetValues();
			errors = {};
		} catch (err) {
			errors = extractErrors(err);
		}
	}

	function extractErrors(err) {
		return err.inner.reduce((acc, err) => {
			return { ...acc, [err.path]: err.message };
		}, {});
	}

	function addAddress(newAddr) {
		// testing: generate random address
		newAddr.id = uuidv4();
		console.log(newAddr);
		console.log(newAddr.isDefault);
		if (newAddr.isDefault) {
			$defaultAddressId = newAddr.id;
		}
		$addressStores.addresses = [...$addressStores.addresses, newAddr];
		//$addressStores.addresses = [...$addressStores.addresses, newAddr];
		console.log('Added to store', newAddr.id);
	}
</script>

<!--
<div>
	<pre>
		{JSON.stringify(values)}
	</pre>
	<pre>
		{JSON.stringify(errors)}
	</pre>
</div>
-->

<form on:submit|preventDefault={submitHandler}>
	<div>
		<input type="text" name="street1" bind:value={values.street1} placeholder="Street Address 1" />
		{#if errors.street1}{errors.street1}{/if}
	</div>
	<div>
		<input type="text" name="street2" bind:value={values.street2} placeholder="Street Address 2" />
		{#if errors.street2}{errors.street2}{/if}
	</div>
	<div>
		<input type="text" name="zipCode" bind:value={values.zipCode} placeholder="Zip Code" />
		{#if errors.zipCode}{errors.zipCode}{/if}
	</div>
	<div>
		<input type="text" name="city" bind:value={values.city} placeholder="City" />
		{#if errors.city}{errors.city}{/if}
	</div>
	<div>
		<input type="text" name="state" bind:value={values.state} placeholder="State" />
		{#if errors.state}{errors.state}{/if}
	</div>
	<div>
		<input type="text" name="country" bind:value={values.country} placeholder="Country" />
		{#if errors.country}{errors.country}{/if}
	</div>
	<div>
		<input type="text" name="phoneNo" bind:value={values.phoneNo} placeholder="Phone Num" />
		{#if errors.phoneNo}{errors.phoneNo}{/if}
	</div>
	<div>
		<input type="text" name="email" bind:value={values.email} placeholder="Email" />
		{#if errors.email}{errors.email}{/if}
	</div>
	<div>
		<input type="checkbox" name="isDefault" bind:checked={values.isDefault} /> Set As Default Address
	</div>
	<button type="button" on:click={onCancel} name="cancel">Cancel</button>
	<button type="submit" name="submit">Save Address</button>
</form>

<style>
</style>
