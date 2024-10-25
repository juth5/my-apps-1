<script>
	import { page } from '$app/stores';
  export let title = '';
  export let color = '';
</script>

<template lang='pug'>
  div.f.fm
    div.w6.h28.bg-orange.mr6
    h3.fs28.s-fs20(class='text-{color}') {title}
</template>


<style>

</style>
