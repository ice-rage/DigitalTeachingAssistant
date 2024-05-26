<template>
  <div class="list-template">
    <div class="list-template__title-wrapper">
      <h4 class="list-template__title">{{ title }}</h4>
    </div>

    <section class="list-template__items">
      <v-card 
        v-for="item in currentItems"
        :key="item.id"
        class="list-template__item"
      >
        <v-avatar
          class="ma-3 list-template__item-photo"
          rounded="0"
          size="125"
        >
          <v-img :src="item.photo" class="list-template__photo-img"></v-img>
        </v-avatar>

        <div class="list-template__item-data">
          <v-card-text>ID: {{ item.id }}</v-card-text>
          <v-card-text>ФИО: 
            {{ item.surname }} 
            {{ item.name }} 
            {{ item.patronymic }}
          </v-card-text>
          <v-card-text>Роль: {{ item.role }}</v-card-text>
        </div>
        <v-spacer></v-spacer>

        <v-card-actions>
          <v-btn
            class="ms-2"
            :icon="mdiSquareEditOutline"
            variant="text"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </section>

    <v-row justify="center">
      <v-col cols="7">
        <v-container class="max-width">
          <v-pagination
            v-model="currentPage"
            :length="totalPageCount"
            @update:model-value="updateCurrentPage"
            class="my-4"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import { mdiSquareEditOutline } from "@mdi/js";

  const { title, items, } = defineProps({
    title: {
      type: String,
      default: "",
      required: true,
    },
    items: {
      type: Array,
      default: () => {},
      required: true,
    },
  });

  const limit = 4;
  const totalItemCount = items.length;
  const totalPageCount = Math.ceil(totalItemCount / limit);
  const currentPage = ref(1);
  const currentItems = ref();

  onMounted(() => {
    if (totalItemCount < limit) {
      currentItems.value = items;
    } else {
      currentItems.value = items.slice(0, limit);
    }
  });

  const updateCurrentPage = (pageIndex) => {
		let firstItem = (pageIndex - 1) * limit;
		let lastItem = pageIndex * limit;
		currentItems.value = items.slice(firstItem, lastItem);
		currentPage.value = pageIndex;
  }
</script>

<style lang="less">
  .list-template {
    &__title-wrapper {
      position: absolute;
      top: 124px;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 3px solid @deep_purple;
      border-radius: 0 0 0 30px;
      width: 475px;
      padding: 21px 0;
      background-color: @white;
      z-index: 1;

      @media @bw1340 {
        top: 100px;
        width: 390px;
        padding: 15px 0;
      }

      @media @bw768 {
        top: 80px;
        padding: 10px 0;
      }

      @media @bw650 {
        width: 100%;
        border-right: none;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 30px;

      @media @bw1340 {
        font-size: 22px;
      }

      @media @bw768 {
        font-size: 16px;
      }
    }

    &__items {
      margin-top: 100px;
    }

    &__item {
      display: flex;
    }

    &__item-data {
      display: flex;
      flex-direction: column;
    }
  }
</style>