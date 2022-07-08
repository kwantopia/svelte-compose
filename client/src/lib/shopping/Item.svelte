<script lang="ts">
	export let itemInfo = {
		id: '',
		imgUrl: '',
		brand: '',
		productName: '',
		color: '',
		size: '',
		originalPrice: 0.0,
		discountedPrice: 0.0,
		ship: true,
		pickUp: {}
	};
</script>

<div class="product-container">
	<div><img src={itemInfo.imgUrl} alt={itemInfo.productName} /></div>
	<div>Brand: {itemInfo.brand}</div>
	<div>SKU: {itemInfo.id}</div>
	<div>Product: {itemInfo.productName}</div>
	<div>Color: {itemInfo.color}</div>
	<div>Size: {itemInfo.size}</div>
	<div>Original Price: <span class="price original">{itemInfo.originalPrice}</span></div>
	<div>Your Price: {itemInfo.discountedPrice}</div>
	<select>
		<option value="ship">Ship it</option>
		<option value="pickup">Pick up</option>
	</select>
</div>

<style>
	.price.original {
		text-decoration: line-through;
	}

	.product-container {
		margin-bottom: 10px;
	}
</style>
