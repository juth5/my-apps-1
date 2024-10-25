<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
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
			link: '/',
		}
	];

	let icons = [
		{
			icon: '/read.svg',
			link: '/curriculum',
		},
		{
			icon: '/plan.svg',
			link: '/plan',
		},
		{
			icon: '/mail.svg',
			link: '/',
		}
	];
</script>

<template lang='pug'>
	header.fixed.t0.l0.z100.w-full.bg-black
		div.f.fm.fbw.h80.px20.text-white.fs16.s-fs14
			a(href='/')
				img.h40.block.object-fit-contain(src='/pc_logo.png')
			div.s-hide
				+each('headerItems as item')
					a.mr24.mr0-last(href='{item.link}') {item.label}
			div.f.fm.s-show
				+each('icons as icon')
					a.mr24.mr0-last(href='{icon.link}')
						img.block.object-fit-contain.h30(src='{icon.icon}')
</template>


<style>

</style>
