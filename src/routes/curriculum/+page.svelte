<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Title from '../../components/items/Title.svelte';

	let listData = [ "HTML", "CSS", "JavaScript", "Git", "DB(データベース)", "SQL", "フレームワーク(sveltekit)", "Markdown" ];
  let htmlCssList = [
    { label: '要素1と要素2を横並びにしよう!' , link: 'https://training-nine-sigma.vercel.app/templates/flexbox/lesson1.html' },
    { label: '要素1と要素2と要素3を横並びにして、要素間のスペースを均等に配置しよう！' , link: 'https://training-nine-sigma.vercel.app/templates/flexbox/lesson3.html' },
    { label: '枠線の範囲内の中央に要素1を配置しよう' , link: 'https://training-nine-sigma.vercel.app/templates/flexbox/lesson8.html' },
    { label: 'headerをつくってみよう!' , link: 'https://training-nine-sigma.vercel.app/templates/flexbox/lesson12.html' },
    { label: '要素1の上に微妙に位置をずらして要素2を重ねよう!' , link: 'https://training-nine-sigma.vercel.app/templates/position/lesson2.html' },
    { label: 'formタグの中にinputを配置して、typeを変えて表示しよう!' , link: 'https://training-nine-sigma.vercel.app/templates/form/lesson1.html' },
    { label: 'カード型の要素を並べて配置しよう!(右下の時間も置いてみよう)' , link: 'https://training-nine-sigma.vercel.app/templates/training/lesson2.html' },
  ];

  let JavaScriptList = [
    { label: '変数を定義して"Hello World!"を代入しよう。(console.logで変数の値を出力しよう)!' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson1.html' },
    { label: '変数fruitsを定義して配列に"apple", "orange", "grape"を格納しよう。(最後にconsole.logで変数の値を出力しよう)' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson3.html' },
    { label: '変数personを定義して、objectのkeyにname,valueに名前。keyにage,valueに年齢を格納しよう!(最後にconsole.logで変数の値を出力しよう)' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson4.html' },
    { label: 'if文を書いてみよう。変数isNewにtrueを代入してif文で分岐しよう。trueであればconsoleにOK。falseの場合はNOと表示しよう。!' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson10.html' },
    { label: '繰り返し分を書いて、consoleに0から9を表示しよう!for文' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson13.html' },
    { label: 'Domを取得しよみよう!' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson26.html' },
    { label: 'jsで動く要素を作ってみよう!' , link: 'https://training-nine-sigma.vercel.app/templates/js/lesson36.html' },
  ];
	
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template lang='pug'>

	div.w-full.mt100.s-px16
    div.container-1024
      div.mb40.s-mb20
        div.mb20.s-mb10
          Title(title='学習について')
        div 福岡市内(博多、天神)のコワーキングスペースに集まり学習を行います。
        div 学習の初めのつまずきなどの苦しいステージを支えながら自走できるエンジニアの育成を目指します。
        br|
        div.mb20 Web開発に必要な以下の項目を学習します。
        ul 
          +each('listData as list')
            li.ml20 {list}
      div.mb40.s-mb20
        div.mb20.s-mb10
          Title(title='HTML, CSSの学習内容の一部を紹介')
        ul
          +each('htmlCssList as list')
            li.ml20
              a(href='{list.link}') {list.label}
      div.mb40.s-mb20
        div.mb20.s-mb10
          Title(title='JavaScriptの学習内容の一部を紹介')
        ul
          +each('JavaScriptList as list')
            li.ml20
              a(href='{list.link}') {list.label}




</template>
<style>

</style>

