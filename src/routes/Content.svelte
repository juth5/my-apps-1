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
		div.mb30
			div.text-center.mb10
				h3(class="border-{item.borderColor}").fs28.border-bottom.inline-block.bw4 {item.text}
			div.text-center
				h4.fs18 {item.description}
		div.f.fm
			div.h400.mr24
				img.block.s-full.object-fit-cover.rounded-10(src='{item.image1}')
			div.h400
				img.block.s-full.object-fit-cover.rounded-10(src='{item.image2}')

	
</template>


<style>

</style>
