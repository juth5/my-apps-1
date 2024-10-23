<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Content from './Content.svelte';

	let contentData = [
		{
			text: 'HTML,CSS',
			description: 'トレースによるトレンドのレイアウト方法を学ぶ',
			image: '/src/lib/images/html.png',
		},
		{
			text: 'JavaScript',
			description: '基本から実践までを学ぶ',
			image: '/src/lib/images/html.png',
		},
		{
			text: 'Git (バージョン管理)',
			description: '共同開発の方法を学ぶ',
			image: '/src/lib/images/html.png',
		},
		{
			text: 'データベース',
			description: 'データベースの活用方法を学ぶ',
			image: '/src/lib/images/html.png',
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
			img.object-fit-cover.s-full.filter(src='/src/lib/images/Frame 1.png')
		div.absolute.trbl0.z10.f.fh
			h1.text-white
				div.fs48 プログラミングを学ぼう
				div.fs28 わかりやすく実践的なカリキュラム
	div
		+each('contentData as data')
			div.f.fc.py24
				Content(item='{data}')
</template>
<style>
	.filter {
		filter: brightness(0.6);
	}
</style>
