<script lang="ts">
	import Item from '$lib/shopping/Item.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let orderedItems: {
		id: string;
		imgUrl: string;
		brand: string;
		productName: string;
		color: string;
		size: string;
		originalPrice: number;
		discountedPrice: number;
		ship: boolean;
		pickUp: Map<string, string>;
	}[] = [];

	function addItem() {
		let nextId = uuidv4();
		let newImgUrl = `https://picsum.photos/seed/${nextId}/200`;
		orderedItems.push({
			id: nextId,
			imgUrl: newImgUrl,
			brand: 'Gucci',
			productName: 'Sun Glasses',
			color: 'Black',
			size: 'One Size',
			originalPrice: 300,
			discountedPrice: 200,
			ship: true,
			pickUp: {} as Map<string, string>
		});
		orderedItems = orderedItems;
	}

	for (let i = 0; i < 3; i++) {
		addItem();
	}
</script>

<!-- component body -->
{#each orderedItems as item}
	<Item itemInfo={item} />
{/each}

<button on:click={addItem}>Add an item</button>
