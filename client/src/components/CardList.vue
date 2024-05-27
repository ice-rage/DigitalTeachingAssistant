<template>
  <div class="card-list">
    <div class="card-list__title-wrapper">
      <div class="card-list__title-container">
        <h4 class="card-list__title">{{ title }}</h4>

        <v-btn class="card-list__add-btn">Добавить</v-btn>
      </div>
    </div>

    <section class="card-list__cards">
      <CardData
        v-for="(card, cardIndex) in currentCards"
        :key="cardIndex"
        :data="card"
        class="card-list__card"
      />
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

    <v-btn flat class="card-list__add-btn-mobile">
      <v-icon 
        :icon="mdiPlusCircle"
        class="card-list__add-mobile-icon"
      ></v-icon>
    </v-btn>
  </div>
</template>

<script setup>
  import { onMounted } from "vue";
  import CardData from "./CardData.vue";
  import { mdiPlusCircle } from "@mdi/js";

  const { title, cards } = defineProps({
    title: {
      type: String,
      default: "",
      required: true,
    },
    cards: {
      type: Array,
      default: () => [],
      required: true,
    },
  });

  const limit = 5;
  const totalCardCount = cards.length;
  const totalPageCount = Math.ceil(totalCardCount / limit);
  const currentPage = ref(1);
  const currentCards = ref();

  onMounted(() => {
    if (totalCardCount < limit) {
      currentCards.value = cards;
    } else {
      currentCards.value = cards.slice(0, limit);
    }
  });

  const updateCurrentPage = (pageIndex) => {
    let firstCard = (pageIndex - 1) * limit;
    let lastCard = pageIndex * limit;
    currentCards.value = cards.slice(firstCard, lastCard);
    currentPage.value = pageIndex;
  };
</script>

<style lang="less">
  .card-list {
    display: flex;
    flex-direction: column;
    padding-top: 89px;

    .v-btn.v-btn--density-default {
      @media @bw768 {
        height: 30vw;
      }
    }
    
    &__title-wrapper {
      position: absolute;
      top: 124px;
      left: 0;
      display: flex;
      align-items: center;
      border: 3px solid @deep_purple;
      border-top: none;
      border-right: none;
      border-radius: 0 0 0 30px;
      width: 100%;
      padding: 21px 0;
      background-color: @white;
      z-index: 10;

      @media @bw1340 {
        top: 100px;
      }

      @media @bw768 {
        top: 80px;
      }
    }

    &__title-container {
      .main-container();

      display: flex;
      justify-content: space-between;
      align-items: center;

      @media @bw768 {
        justify-content: center;
      }
    }

    &__title {
      font-weight: 600;
      font-size: 30px;
    }

    &__add-btn {
      .add-btn();

      align-self: flex-end;

      @media @bw1020 {
        padding: 6px 50px;
        font-size: 18px;
      }

      @media @bw768 {
        display: none;
      }
    }

    &__card {
      .v-btn.v-btn--density-default {
        @media @bw768 {
          height: 125px;
        }
      }
    }

    &__add-btn-mobile {
      display: none;

      @media @bw768 {
        display: block;
        position: absolute;
        right: 20px;
        bottom: 100px;
        background-color: @white;
        border-radius: 50%;
        width: 30vw;
        padding: 5px;
      }
    }

    &__add-mobile-icon {
      width: 100%;
      height: 100%;
      color: @yellow_green;
    }

    .v-pagination .v-btn.v-btn--density-default {
      @media @bw768 {
        height: 48px;
      }
    }
  }
</style>
