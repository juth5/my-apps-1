<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	export let item;

	$: {
    item;
  }
</script>

<template lang='pug'>
	div.s100.s-s80
		img.object-fit-cover.s-full.rounded-10(src='{item}')
</template>


<style>

</style>
