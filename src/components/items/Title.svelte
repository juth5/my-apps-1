<script>
	import { page } from '$app/stores';
  export let title = '';
  export let color = '';
</script>

<template lang='pug'>
	h2.fs40.bold.title.s-fs24(class='text-{color}') {title}
</template>


<style>
.title {
    white-space: pre-line; /* 改行コード (\n) を解釈して改行 */
  }
</style>
