<script>
	import Bag from '$lib/shopping/Bag.svelte';
	import Wishlist from '$lib/shopping/Wishlist.svelte';
</script>

<div class="cart">This is cart page</div>

<!-- ordered items -->
<Bag />

<!-- wishlist items, total items -->
<Wishlist />

<!-- total price -->
<style>
	.cart {
		font-size: 1.2em;
		font-style: italic;
		margin-bottom: 10px;
	}
</style>
