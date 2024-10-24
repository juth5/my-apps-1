<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	

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

	div.w-full.text-center.mt100
		div hoge


</template>
<style>

</style>

