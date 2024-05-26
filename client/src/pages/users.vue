<template>
  <div class="user-list">
    <ListTemplate 
      :title="'Пользователи'" 
      :items="userCards"
      class="user-list__list-template"
    />
  </div>
</template>

<script setup>
  import ListTemplate from "@/components/ListTemplate.vue";
  import userCards from "@/json/userCards.json";
</script>

<style lang="less"></style>