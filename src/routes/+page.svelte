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
	div.w-full.text-center
		div.mb50.s-mb40
			Title(title='カリキュラム')
		+each('contentData as data')
			div.f.fc.mb50.s-mb50.s-px16
				Content(item='{data}')
		div.mb40
			a.w300.inline-block.py14.bg-orange.rounded-full.text-white(href='/curriculum') 詳しく見る
		div.bg-dark-green.pb40.pt40.mb30
			div.mb50.s-mb40
				Title(title='プラン', color='white')
			div.f.fc.w-full.mb50
				div.w500.s-px20
					Plan
			div
				a.w300.inline-block.py14.rounded-full.bg-orange.border.text-white(href='/curriculum') 詳しく見る
		div.mb80
			div.mb50.s-mb40
				Title(title='お問い合わせ')
			div.s-px16.mb50 無料体験へのご参加お待ちしております。お気軽にご参加ください!
			a.w300.inline-block.py14.rounded-full.bg-orange.border.text-white(href='/') 詳しく見る


</template>
<style>
	.filter {
		filter: brightness(0.6);
	}
</style>

