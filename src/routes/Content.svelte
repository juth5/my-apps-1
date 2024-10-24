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
				h3(class="border-{item.borderColor}").fs28.border-bottom.inline-block.bw4.s-fs20 {item.text}
			div.text-center
				h4.fs18.s-fs14 {item.description}
		div.f.fm.s-flex-column
			div.h400.mr24.s-mr0.s-mb24
				img.block.s-full.object-fit-cover.rounded-10(src='{item.image1}')
			div.h400
				img.block.s-full.object-fit-cover.rounded-10(src='{item.image2}')

	
</template>


<style>

</style>
