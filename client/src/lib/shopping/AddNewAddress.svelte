<script lang="ts">
	import * as yup from 'yup';

	let address = {
		street1: '',
		street2: '',
		zipCode: '',
		city: '',
		state: '',
		country: '',
		phoneNo: '',
		email: '',
		setAsDefault: false
	};
	let errors = {};

	async function saveAddress() {}
</script>

<form on:submit|preventDefault={saveAddress}>
	<div>
		<input type="text" name="street1" bind:value={address.street1} placeholder="Street Address 1" />
		{#if errors.street1}{errors.street1}{/if}
	</div>
	<div>
		<input type="text" name="street2" bind:value={address.street2} placeholder="Street Address 2" />
		{#if errors.street2}{errors.street2}{/if}
	</div>
	<div>
		<input type="text" name="zipCode" bind:value={address.zipCode} placeholder="Zip Code" />
		{#if errors.zipCode}{errors.zipCode}{/if}
	</div>
	<div>
		<input type="text" name="city" bind:value={address.city} placeholder="City" />
		{#if errors.city}{errors.city}{/if}
	</div>
	<div>
		<input type="text" name="state" bind:value={address.state} placeholder="State" />
		{#if errors.state}{errors.state}{/if}
	</div>
	<div>
		<input type="text" name="country" bind:value={address.zipCode} placeholder="Country" />
		{#if errors.country}{errors.country}{/if}
	</div>
	<button type="submit" name="cancel">Cancel</button>
	<button type="submit" name="submit">Save Address</button>
</form>

<style>
</style>
