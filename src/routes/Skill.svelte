<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import SkillImage from './SkillImage.svelte';
	export let item;
	
	$: {
    item;
  }
</script>

<template lang='pug'>
	div.px40.s-px0
		h4.fs24.mb10.s-mb12.s-fs20 {item.title}
		div.f.fm
			div.mr28.s-mr0.s-mr18.s-fs14
				SkillImage(item='{item.image}')
			div.text-left {item.description}

	
</template>


<style>

</style>
