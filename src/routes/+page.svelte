<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import Content from './Content.svelte';
	import Title from '../components/items/Title.svelte';
	import Plan from '../components/items/Plan.svelte';
	import config from '$lib/scripts/config';
	import Skill from './Skill.svelte';
	let isOpen = false;
	let ogpImage = '/top.png';
	let openServiceText = () => {
		isOpen = true;
	};

	
	let skillData = [
		{
			title: "HTML",
			description: "トレースを中心に行います。(HTML,CSSは一通り学習済みの方はなるべく時間をかけない形で学習を進めます。)",
			image: "/html.png",
		},
		{
			title: "CSS",
			description: "トレースを中心に行います。(HTML,CSSは一通り学習済みの方はなるべく時間をかけない形で学習を進めます。)",
			image: "/css.png",
		},
		{
			title: "JavaScript",
			description: "基本的な構文からサイト制作で頻出する機能を学びます。入念な学習を行います。",
			image: "/js.png",
		},
		{
			title: "Git",
			description: "共同開発を意識し、バージョン管理、プルリクエストの活用方法を学びます。",
			image: "/git.png",
		},
		{
			title: "Java",
			description: "バックエンドの学習ではSpring Bootを使います。認証やDB操作を行います。",
			image: "/java.png",
		},
		{
			title: "SQL",
			description: "基本的な構文を学び、実際にDB操作を行います。",
			image: "/sql.png",
		},
		{
			title: "API",
			description: "APIを作成し、データ取得、更新作業などを経験します。",
			image: "/api.png",
		},
	];

	
</script>

<svelte:head>
	<title>福岡でプログラミングを学ぼう</title>
	<meta name="description" content="プログラミングができるようになりたい人に、必要な知識と技術を教えます。" />
	<meta property="og:image" content={ogpImage} />
</svelte:head>
<template lang='pug'>
	div.relative.h80vh.s-h60vh
		div.absolute.trbl0.s-full
			img.object-fit-cover.s-full.filter(src='/top.png')
		div.absolute.trbl0.z10.f.fh
			h1.text-white
				div.fs48.s-fs24 福岡でプログラミングを学ぼう
				div.fs28.s-fs14 わかりやすく実践的なカリキュラム
		div.z10.absolute.b100.l0.r0.f.fc.s-b40
			a.w300.inline-block.py14.rounded-full.bg-orange.text-center.border.text-white(href='{config.formUrl}', target='blank') お問い合わせ

	div.w-full.text-center


		div.py50.s-px16
			div.mb50.s-mb40
				Title(title='サービスの想い')
			div.container-960.text-left.mb20
				p.text-center.bold.lh18.fs22.mb18.s-fs16 プログラミングに興味がある人へ
				//- p.text-center.mb18 が今よりもプログラミングができる！わかる！状態になるためのサービスです。
				+if('!isOpen')
					div.f.fc
						button.f.fc.fm(on:click!='{openServiceText}')
							div.text-center.text-link.mr8 続きを読む
							img.object-fit-contain.block.s18(src='/arrow-down.svg')
				p(class="{isOpen ? 'h-full' : 'h0 overflow-hidden'}") 約3年前、私は教員からプログラマーへ転職しました。当初はURLの意味も、API、DB（データベース）、サーバーの基本概念すらわからない状態でした。
					br
					|さらに私は理解が遅く、Webプログラマーとして業務をこなせるようになるまでには非常に多くの時間を要しました。
					br
					|できない、わからない毎日はとてもつらく楽しさよりも苦しい時間でした。
					br
					br
					|そんな経験を通じて、プログラマーに挑戦する新入社員、すでに何らかの形で開発に携わっている方、プログラマーではないけれど開発業務に関わる方、またITやプログラミングに興味を持つ方々が、挫折することなく学習を進め、人生をより良い方向に変えていけるよう、サポートしたいと思い、このサービスを立ち上げました。
					|
					br
					|もう無理かもなぁ。と諦めそうな方、自分にはできないと思っている方の最初の苦しい段階を支えていきます。
					br
					br
					|本サービスでは、Web開発に必要な知識を総合的に身に付けることを目標としてます。フロントとはバックエンドとはAPIとは、なぜサービスが動いているか。サービスの仕組みや必要な技術スタックを総合的に開発作業を通じて学び、なぜやどうしてを解決しプログラマーとしての基礎を築きます。基本を身につけ、自学で成長していけるように導きます。
		
		
		div.py50.bg-dark-green.text-white
			div.mb50.s-mb40
				Title(title='カリキュラム', color='white')
			div.row.container-960
				+each('skillData as data')
					div.col6.mb60.s-mb40.s-px20.s-col12
						Skill(item='{data}')
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

