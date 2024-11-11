<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Title from '../../components/items/Title.svelte';
  import SubTitle from '../../components/items/SubTitle.svelte';
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template lang='pug'>

  div.w-full.mt100.s-px16
    div.container-1024
      div.mb40.s-mb20
        div.text-center.mb60.s-mb30
          Title(title='スタンダードプランの詳細')
        div.mb40
          div.text-left.mb20.s-mb10
            SubTitle(title='週2回の対面学習')
          div.mb12
            p.lh18 毎週、土、日曜日の朝9時から12時までの3時間。
            p Gitの使い方に慣れてきたら、リモートによる学習も可能です。
          img.block.object-fit-cover.rounded-10(src='/frame7.png')

</template>
<style>

</style>

