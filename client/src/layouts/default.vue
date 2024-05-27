<template>
  <v-layout class="layout">
    <v-main class="layout__main">
      <PageHeader class="layout__page-header"/>
      
      <div class="layout__container">
        <RouterView class="layout__page-content"/>
      </div>
      
      <PageFooter/>
    </v-main>
  </v-layout>
</template>

<script setup>
  import PageFooter from "@/components/page/PageFooter.vue";
  import PageHeader from "@/components/page/PageHeader.vue";
</script>

<style lang="less"></style>