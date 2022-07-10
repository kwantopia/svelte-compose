<script lang="ts">
	// populate with addresses
	import { addressStores, defaultAddressId } from './addressStores';
	import AddNewAddress from './AddNewAddress.svelte';
</script>

<div>All addresses</div>

<div>{$defaultAddressId}</div>
{#each $addressStores.addresses as address}
	<div class:default-address={address.id === $defaultAddressId} class:address-box={true}>
		<div>
			<input type="hidden" id={address.id} name="addressId" value={address.id} />
			<input type="hidden" id={$defaultAddressId} name="addressId" value={$defaultAddressId} />
		</div>
		<div>
			{address.street1}
		</div>
		<div>
			{address.street2}
		</div>
		<div>
			{address.city}, {address.state}
			{address.zipCode}
		</div>
		<div>
			Phone #: {address.phoneNo}
		</div>
		<div>
			Email: {address.email}
		</div>
	</div>
{/each}

<AddNewAddress />

<style>
	.default-address {
		border-color: green;
		border-style: solid;
	}

	.address-box {
		border-width: 1px;
		margin: 5px;
	}
</style>
