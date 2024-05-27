<template>
  <div class="teacher-list">
    <CardList
      :title="'Преподаватели'" 
      :cards="teacherCards"
      class="teacher-list__card-list"
    />
  </div>
</template>

<script setup>
  import CardList from "@/components/CardList.vue";
  import teacherCards from "@/json/teacherCards.json";
</script>

<style lang="less"></style>