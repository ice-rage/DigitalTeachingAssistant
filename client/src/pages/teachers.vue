<template>
  <div class="teacher-list">
    <ListTemplate 
      :title="'Преподаватели'" 
      :items="teacherCards"
      class="teacher-list__list-template"
    />
  </div>
</template>

<script setup>
  import ListTemplate from "@/components/ListTemplate.vue";
  import teacherCards from "@/json/teacherCards.json";
</script>

<style lang="less"></style>