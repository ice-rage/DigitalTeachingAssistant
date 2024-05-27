<template>
  <v-card variant="text" hover class="my-6 card-data">
    <v-avatar class="ma-3 card-data__photo-wrapper">
      <v-img :src="data.photo" class="card-data__photo"></v-img>
    </v-avatar>

    <div class="card-data__text-container">
      <v-card-text v-if="data.id" class="card-data__text">
        ID: {{ data.id }}
      </v-card-text>

      <v-card-text 
        v-if="data.surname && data.name && data.patronymic" 
        class="card-data__text"
      >
        ФИО: {{ data.surname }} {{ data.name }} {{ data.patronymic }}
      </v-card-text>

      <v-card-text v-if="data.role" class="card-data__text">
        Роль: {{ data.role }}
      </v-card-text>

      <v-card-text v-if="data.department" class="card-data__text">
        Кафедра: {{ data.department }}
      </v-card-text>

      <v-card-text v-if="data.taskCount" class="card-data__text">
        Кол-во заданий: {{ data.taskCount }}
      </v-card-text>
    </div>

    <v-spacer class="card-data__spacer"/>

    <v-card-actions class="card-data__actions">
      <v-btn class="ms-2 card-data__action-btn">
        <v-icon 
          :icon="mdiSquareEditOutline"
          class="card-data__action-icon"
        ></v-icon>
      </v-btn>

      <v-btn class="ms-2 card-data__action-btn">
        <v-icon 
          :icon="mdiOpenInNew"
          class="card-data__action-icon"
        ></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
  import { mdiOpenInNew, mdiSquareEditOutline } from "@mdi/js";

  const { data } = defineProps({
    data: {
      type: Object,
      default: () => {},
      required: true,
    },
  });
</script>

<style lang="less">
  .card-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 38px;
    padding: 25px 0;
    border: 2px solid @light_gray;
    border-left: none;
    border-right: none;

    @media @bw768 {
      flex-direction: column;
      gap: 20px;
      padding: 20px;
    }

    &__text {
      padding: 0;
      font-weight: 700;
      font-size: 20px;

      @media @bw1020 {
        font-size: 18px;
      }

      @media @bw768 {
        font-size: 25px;
      }
    }

    &__actions {
      margin-right: 10.274%;

      @media @bw768 {
        margin-right: 0;
      }
    }

    &__action-btn {
      width: 48px;
      height: 48px;

      @media @bw768 {
        width: 125px;
        height: 125px;
      }

      @media @bw450 {
        width: 30vw;
        height: 30vw;
      }
    }

    &__action-icon {
      width: 100%;
      height: 100%;
      color: @dark_orchid;
    }

    .v-avatar.v-avatar--density-default {
      width: 125px;
      height: 125px;

      @media @bw1020 {
        width: 85px;
        height: 85px;
      }

      @media @bw768 {
        width: 75vw;
        height: 75vw;
      }
    }

    .v-btn.v-btn--density-default {
      height: auto;
    }
  }
</style>