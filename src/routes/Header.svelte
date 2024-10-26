<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import config from '$lib/scripts/config';
	
	let headerItems = [
		{
			label: 'カリキュラム',
			link: '/curriculum',
		},
		{
			label: 'プラン',
			link: '/plan',
		},
		{
			label: 'お問い合わせ',
			link: config.formUrl,
		}
	];

	let icons = [
		{
			icon: '/book.svg',
			link: '/curriculum',
		},
		{
			icon: '/present.svg',
			link: '/plan',
		},
		{
			icon: '/mail.svg',
			link: config.formUrl,
		}
	];
</script>

<template lang='pug'>
	header.fixed.t0.l0.z100.w-full.bg-black
		div.f.fm.fbw.h80.px20.text-white.fs16.s-h50.s-fs14
			a.s-hide(href='/') プログラミング
			a.s-show(href='/')
				img.h30.block.object-fit-contain(src='/home.svg')
			div.s-hide
				+each('headerItems as item')
					a.mr24.mr0-last(href='{item.link}', target='blank') {item.label}
			div.f.fm.s-show
				+each('icons as icon')
					a.mr24.mr0-last(href='{icon.link}', target='blank')
						img.block.object-fit-contain.h30(src='{icon.icon}')
</template>


<style>

</style>
