<template>
  <div>
    {{ INDEX_TITLE }}
  </div>
</template>

<script setup>
const store = useMainStore();
const INDEX_TITLE = store.INDEX_TITLE;

</script>

<style lang="less"></style>
