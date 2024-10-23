<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	export let item;

	$: {
    item;
  }
</script>

<template lang='pug'>
	div
		div.py12
			div.text-center
				h2.fs28 {item.text}
			div.text-center
				h3.fs18 {item.description}
		div.w1200
			img.block.w-full.object-fit-cover.rounded-4(src='{item.image}')
	
</template>


<style>

</style>
