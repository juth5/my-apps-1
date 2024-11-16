<script>
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
  import Title from '../../components/items/Title.svelte';
  import SubTitle from '../../components/items/SubTitle.svelte';
  import Modal from '../modal/Modal.svelte';
  
  
  let title1 = 'HTML, CSS\nの学習内容の一部を紹介';
	let listData = [ "HTML", "CSS", "JavaScript", "Git", "Java", "SQL", "API", "Markdown" ];


  let newListData = [
    {
      title: "HTML、CSS",
      description: "Web制作でよく使われるタグの使い方、formタグの書き方、Flexbox、positionなどの基本を学びます。感覚的に書けようになるように、既存サイトのトレースを複数回行います。",
    },
    {
      title: "JavaScript",
      description: "jsの基本的な構文、Webサービスでよく使われる機能の作成、データの整形などで知識と技術を身につけます。また、	JavaScriptのフレームワークを使いサイト制作にも挑戦します。",
    },
    {
      title: "Git",
      description: "Gitの概念を学びます。ソースコードをgithubで管理し共同開発のためのブランチの概念、プルリクエストの作成、競合解決、マージについて一通り学びます。",
    },
    {
      title: "Java",
      description: "Javaでバックエンドについて学びます。Spring bootというフレームワークを使い、フロントエンドとサーバーサイドの関係、認証の仕組み、DB操作によるデータの書き込み、取得の基本を学びます。",
    },
    {
      title: "SQL",
      description: "Java、Spring bootを使いSQLを通してDB操作を行います。基本的な構文、テーブルのリレーションなどの基本について学びます。",
    },
    {
      title: "API",
      description: "APIによるデータのやり取りの基本を学びます。実際にAPIを作成しフロントから呼び出します。",
    },
    {
      title: "Markdown",
      description: "エンジニアがよく使うMarkdownに学びます。主に、プルリクエスト作成の時に使用します。",
    },

  ];
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
	let isOpenModal = false;
  let hoge = null;

  let openModal = (list) => {
    hoge = list;
    isOpenModal = true;
  };


  let closeModal = () => {
    isOpenModal = false;
  };
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<template lang='pug'>

	div.w-full.mt100
    div.container-1024.s-px16
      div.mb100.s-mb50
        div.mb60.s-mb40
          div.text-center.mb60.s-mb30
            Title(title='カリキュラムの特徴')
        div.mb60.s-mb40
          div.text-left.mb10
            SubTitle(title='身につける能力')
            div 本サービスは、Web開発に必要な知識と技術の基本を総合的に身につけ、自学で成長できる基礎を築くことを目標としています。
            div 開発することをベースとしてフロントエンドについて、バックエンドについて、データベースなどについて理解することでなぜサービスが動いているのかについて感覚的に理解します。
            div それぞれが基本段階ではあっても、総合的に理解することで発展的に考える力が身につくと考えているからです。
        div.mb60.s-mb40
          div.text-left.mb10
            SubTitle(title='主な学習内容')
          div.lh18 
          ul
            +each('newListData as list')
              li.ml20.mb8
                div.inline-block.cursor-pointer.text-link(on:click!='{() => openModal(list.description)}') {list.title}
          Modal(show='{isOpenModal}', onClose='{closeModal}', text='{hoge}')
        div.mb60.s-mb40
          div.text-left.mb10
            SubTitle(title='つまずきを素早く解決する')
          div.mb12
            p.lh18 福岡市内(博多、天神)のコワーキングスペースで学習を行います。
          img.block.object-fit-cover.rounded-10(src='/frame6.png')
        div
          div.text-left.mb10
            SubTitle(title='チーム開発を意識する')
          div.lh18 プログラミングを学ぶだけでなくGitのバージョン管理、プルリクエストの作成方法などチーム開発の現場で役立つノウハウを学びます。

    //- div.py40.mb100.s-mb50.bg-dark-green
    //-   div.container-1024.mb40.s-mb20.s-px16
    //-     div.text-center.text-white.mb60.s-mb30
    //-       Title(title='HTML, CSSの\n学習内容の一部を紹介')
    //-     ul
    //-       +each('htmlCssList as list')
    //-         li.lh18.text-white.ml20
    //-           a(href='{list.link}') {list.label}
    //- div.container-1024.mb40.s-mb20.s-px16
    //-   div.text-center.mb60.s-mb30
    //-     Title(title='JavaScriptの\n学習内容の一部を紹介')
    //-   ul
    //-     +each('JavaScriptList as list')
    //-       li.lh18.ml20
    //-         a(href='{list.link}') {list.label}




</template>
<style>

</style>

