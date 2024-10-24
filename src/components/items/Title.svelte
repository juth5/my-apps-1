<script>
	import { page } from '$app/stores';
  export let title = '';
  export let color = '';
</script>

<template lang='pug'>
	h2.fs40.bold.s-fs24(class='text-{color}') {title}
</template>


<style>

</style>
