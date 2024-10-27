<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Content from './Content.svelte';
	import Title from '../components/items/Title.svelte';
	import Plan from '../components/items/Plan.svelte';
	import config from '$lib/scripts/config';
	
	

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
	div.relative.h80vh.s-h60vh
		div.absolute.trbl0.s-full
			img.object-fit-cover.s-full.filter(src='/top.png')
		div.absolute.trbl0.z10.f.fh
			h1.text-white
				div.fs48.s-fs24 プログラミングを学ぼう
				div.fs28.s-fs14 わかりやすく実践的なカリキュラム
		div.z10.absolute.b100.l0.r0.f.fc.s-b40
			a.w300.inline-block.py14.rounded-full.bg-orange.text-center.border.text-white(href='{config.formUrl}', target='blank') お問い合わせ

	div.w-full.text-center


		div.py50.s-px16
			div.mb50.s-mb40
				Title(title='サービスへの想い')
			div.container-1024.text-left.mb20
				p 約3年前、私は教員からプログラマーへ転職しました。当初はURLの意味も、API、DB（データベース）、サーバーの基本概念すらわからない状態からのスタートでした。
					br
					|さらに、私は理解力が遅い方で、Webプログラマーとして業務をこなせるようになるまでには非常に多くの時間を要しました。
					br
					br
					|そんな経験を通じて、プログラマーに挑戦する新入社員や、すでに何らかの形で開発に携わっている方、プログラマーではないけれど開発業務に関わる方、またITやプログラミングに興味を持つ方々が、途中で挫折することなく学習を進め、人生をより良い方向に変えていけるよう、サポートしたいと思い、このサービスを立ち上げました。
					|もう無理かもなぁ。と諦めそうな方、自分にはできないと思っている方の最初の苦しい段階を支えていきます。
					br
					br
					|本サービスでは、Web開発に必要な最低限の知識を身に付けることを目的としています。特に、フロントエンドの知識はもちろん、私が特に苦労したサーバーサイドやDB（データベース）、APIに関する理解が深まるように、プログラムを工夫してご提供しています。
		
		
		div.py50.bg-dark-green.text-white
			div.mb50.s-mb40
				Title(title='カリキュラム', color='white')
			+each('contentData as data')
				div.f.fc.mb50.s-mb50.s-px16
					Content(item='{data}')
			div
				a.w300.inline-block.py14.bg-light-green.rounded-full.text-white(href='/curriculum') 詳しく見る
				
		div.pb40.pt40.mb30
			div.mb50.s-mb40
				Title(title='プラン',)
			div.f.fc.w-full.mb50
				div.w500.s-px20
					Plan
			div
				a.w300.inline-block.py14.rounded-full.bg-light-green.border.text-white(href='/plan') 詳しく見る
		div.bg-dark-green.text-white.py50
			div.mb50.s-mb40
				Title(title='お問い合わせ')
			div.s-px16.mb50 見学や無料体験も行っております。
				br
				|お気軽にご連絡ください。
			a.w300.inline-block.py14.rounded-full.bg-orange.border.text-white(href='{config.formUrl}', target='blank') お問い合わせ


</template>
<style>
	.filter {
		filter: brightness(0.6);
	}
</style>

