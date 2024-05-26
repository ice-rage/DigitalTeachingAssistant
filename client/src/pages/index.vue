<template>
  <div class="home">
    <AutorizationForm v-if="isHidden" class="home__authorization-form"/>
    <ListTemplate 
      :title="'Пользователи'" 
      :items="users" 
      class="home__list-template"
    />
  </div>
</template>

<script setup>
  import AutorizationForm from "@/components/AutorizationForm.vue";
  import ListTemplate from "@/components/ListTemplate.vue";

  const isHidden = ref(false);

  const users = [
    {
      id: "0001",
      surname: "Максимов",
      name: "Максим",
      patronymic: "Максимович",
      role: "Администратор",
      photo: "/images/maksimov.jpg",
    },
    {
      id: "0002",
      surname: "Романов",
      name: "Роман",
      patronymic: "Романович",
      role: "Пользователь",
      photo: "/images/romanov.jpg",
    },
    {
      id: "0003",
      surname: "Олегов",
      name: "Олег",
      patronymic: "Олегович",
      role: "Пользователь",
      photo: "/images/olegov.jpg",
    },
    {
      id: "0003",
      surname: "Игорев",
      name: "Игорь",
      patronymic: "Игоревич",
      role: "Администратор",
      photo: "/images/igorev.jpg",
    },
    {
      id: "0005",
      surname: "Маринова",
      name: "Марина",
      patronymic: "Игоревна",
      role: "Пользователь",
      photo: "/images/marinova.jpg",
    },
  ];
</script>

<style lang="less">
  .home {

  }
</style>