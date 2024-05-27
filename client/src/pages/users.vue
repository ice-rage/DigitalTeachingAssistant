<template>
  <div class="user-list">
    <ListTemplate 
      :title="'Пользователи'" 
      :cards="userCards"
      class="user-list__card-list"
    />
  </div>
</template>

<script setup>
  import ListTemplate from "@/components/CardList.vue";
  import userCards from "@/json/userCards.json";
</script>

<style lang="less"></style>