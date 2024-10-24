<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Content from './Content.svelte';
	import Title from '../components/items/Title.svelte';
	import Plan from '../components/items/Plan.svelte';
	

	let contentData = [
		{
			text: 'HTML,CSS',
			description: 'トレースによるトレンドのレイアウトを学ぶ',
			image1: '/html1.png',
			image2: '/html3.png',
			borderColor: 'orange',
		},
		{
			text: 'JavaScript',
			description: '基本から実践までを学ぶ',
			image1: '/js1.png',
			image2: '/js2.png',
			borderColor: 'yellow',
		},
		{
			text: 'Git (バージョン管理)',
			description: '共同開発の方法を学ぶ',
			image1: '/git1.png',
			image2: '/git2.png',
			borderColor: 'red',
		},
	];

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template lang='pug'>
	div.relative.h80vh.s-h60vh.mb50
		div.absolute.trbl0.s-full
			img.object-fit-cover.s-full.filter(src='/top.png')
		div.absolute.trbl0.z10.f.fh
			h1.text-white
				div.fs48.s-fs24 プログラミングを学ぼう
				div.fs28.s-fs14 わかりやすく実践的なカリキュラム
	div.text-center
		div.mb50.s-mb40
			Title(title='カリキュラム')
		+each('contentData as data')
			div.f.fc.mb50.s-mb50
				Content(item='{data}')
		div.bg-dark-green.pb30.pt30
			div.mb50.s-mb40
				Title(title='プラン', color='white')
			div.f.fc.w-full
				div.w500
					Plan
</template>
<style>
	.filter {
		filter: brightness(0.6);
	}
</style>

