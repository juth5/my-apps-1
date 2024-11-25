<script>
  export let show = false;
  export let onClose = () => {};
  export let text = '';
  $: {
    show;
  }
  
</script>
<template lang='pug'>
  +if('show')
    div.modal-backdrop.f.fh(on:click!='{onClose}')
      div.modal-content(on:click|stopPropagation)
        slot
          div {text}
        button.mt40(on:click!='{onClose}') 閉じる
</template>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .modal-content {
    background-color: #fff;
    margin: 10% auto;
    padding: 20px;
    width: 80%;
    max-width: 500px;
    border-radius: 8px;
  }
</style>
