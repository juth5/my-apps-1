<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Content from './Content.svelte';
	import Title from '../components/items/Title.svelte';

	let contentData = [
		{
			text: 'HTML,CSS',
			description: 'トレースによるトレンドのレイアウトを学ぶ',
			image1: '/src/lib/images/html1.png',
			image2: '/src/lib/images/html3.png',
			borderColor: 'orange',
		},
		{
			text: 'JavaScript',
			description: '基本から実践までを学ぶ',
			image1: '/src/lib/images/js2.png',
			image2: '/src/lib/images/js1.png',
			borderColor: 'yellow',
		},
		{
			text: 'Git (バージョン管理)',
			description: '共同開発の方法を学ぶ',
			image1: '/src/lib/images/git1.png',
			image2: '/src/lib/images/git2.png',
			borderColor: 'red',
		},
	];

	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template lang='pug'>
	div.relative.h80vh
		div.absolute.trbl0.s-full
			img.object-fit-cover.s-full.filter(src='/src/lib/images/Frame1.png')
		div.absolute.trbl0.z10.f.fh
			h1.text-white
				div.fs48 プログラミングを学ぼう
				div.fs28 わかりやすく実践的なカリキュラム
	div.text-center
		div.my60
			Title(title='カリキュラム')
		+each('contentData as data')
			div.f.fc.mb70
				Content(item='{data}')
</template>
<style>
	.filter {
		filter: brightness(0.6);
	}
</style>
