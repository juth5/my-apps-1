<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	let headerItems = [
		{
			label: 'カリキュラム',
			link: '/',
		},
		{
			label: 'プラン',
			link: '/',
		},
		{
			label: 'お問い合わせ',
			link: '/',
		}
	];
</script>

<template lang='pug'>
	header.fixed.t0.l0.z100.w-full.bg-black
		div.f.fm.fbw.h80.px20.text-white.fs16
			div プログラミング
			div
				+each('headerItems as item')
					a.mr24.mr0-last(href='{item.link}') {item.label}
</template>


<style>

</style>
