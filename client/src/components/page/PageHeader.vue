<template>
  <header class="page-header">
    <v-container class="page-header__container">
      <RouterLink to="/" title="На главную" class="page-header__logo">
        <v-icon :icon="mdiSchool" class="page-header__logo-icon"/>

        <h4 class="page-header__logo-text">
          Цифровой помощник преподавателя
        </h4>
      </RouterLink>

      <nav class="page-header__nav">
        <RouterLink
          to="/users" 
          class="page-header__nav-link"
        >
          Пользователи
        </RouterLink>

        <RouterLink
          to="/teachers" 
          class="page-header__nav-link"
        >
          Преподаватели
        </RouterLink>
        
        <div class="page-header__nav-user">
          <v-btn flat href="#" class="page-header__user-btn">
            <v-icon 
              :icon="mdiAccountCircle" 
              class="page-header__user-icon"
            ></v-icon>
          </v-btn>

          <v-btn flat href="#" class="page-header__nav-logout">
            <v-icon 
              :icon="mdiLogout" 
              class="page-header__logout-icon">
            </v-icon>
          </v-btn>
        </div>
      </nav>

      <div class="page-header__right-block">
        <v-btn 
          type="button" 
          class="page-header__nav-toggle" 
          @click="isMenuOpened = !isMenuOpened"
        ></v-btn>
      </div>
    </v-container>
  </header>
</template>

<script setup>
  import { mdiSchool, mdiAccountCircle, mdiLogout } from "@mdi/js";
  import { RouterLink } from "vue-router";
  import { watch } from "vue";

  const isMenuOpened = ref(false);

  watch(isMenuOpened, () => document.body.classList.toggle("show-nav"));
</script>

<style lang="less">
  .page-header {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    height: 124px;
    background-color: @deep_purple_90;
    z-index: 10;

    @media @bw1340 {
      height: 100px;
    }

    @media @bw768 {
      height: 80px;
    }
    
    &__container {
      .layout-container();

      position: relative;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
      
      @media @bw1340 {
        padding-left: 0;
      }
    }
    
    &__logo {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-wrap: nowrap;
      max-width: 475px;
      padding-left: 25px;
      background-color: @deep_purple;
      color: @white;
      box-shadow: @shadow_logo;

      @media @bw1340 {
        max-width: 390px;
      }

      @media @bw768 {
        width: 19.973%;
        padding-left: 0;
      }
    }
    
    &__logo-icon {
      width: 75px;
      height: 68px;

      @media @bw1340 {
        width: 65px;
        height: 58px;
      }

      @media @bw768 {
        width: 55px;
        height: 48px;
        margin: 0 auto;
      }

      @media @bw450 {
        width: 45px;
        height: 38px;
      }
    }

    &__logo-text {
      font-family: @font2;
      font-weight: 400;
      font-size: 30px;
      margin-left: 35px;

      @media @bw1340 {
        margin-left: 25px;
        font-size: 22px;
      }

      @media @bw768 {
        display: none;
      }
    }
    
    &__nav {
      box-sizing: border-box;
      display: flex;
      align-items: center;

      @media @bw1340 {
        margin-left: 20px;
      }

      @media @bw1020 {
        position: absolute;
        top: 0;
        left: 0;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 100vh;
        margin-left: 0;
        padding: 150px 30px 30px;
        background-color: fade(@deep_purple, 98%);
        transition: transform 0.4s;
        transform: translate(-100%);
        overflow-x: hidden;
        overflow-y: auto;

        @supports (backdrop-filter: blur(20px)) {
          background-color: fade(@deep_purple, 70%);
          backdrop-filter: blur(20px);
        }
      }

      @media @bw650 {
        align-items: center;
      }
    }
    
    &__nav-link {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 13px;
      width: 250px;
      height: 68px;
      margin: 0 21px;
      background-color: @dark_orchid_40;
      color: @white;
      font-family: @font2;
      font-weight: 400;
      transition: background-color 0.2s;

      @media @bw1340 {
        width: 200px;
        height: 62px;
        margin: 0 10px;
        font-size: 20px;
      }

      @media @bw1020 {
        width: 250px;
        height: 68px;
        margin: 0 0 30px;

        &:last-of-type {
          margin: 0 0 50px;
        }
      }

      &:hover {
        @media(hover: hover) {
          background-color: @dark_orchid;
        }
      }
    }

    &__nav-user {
      display: flex;
      justify-content: stretch;
      align-items: center;
      gap: 36px;
      margin-left: 93px;

      @media @bw1660 {
        gap: 26px;
        margin-left: 63px;
      }

      @media @bw1340 {
        gap: 16px;
        margin-left: 33px;
      }

      @media @bw1020 {
        min-width: 250px;
        margin-left: 0;
      }
    }

    &__user-btn,
    &__nav-logout {
      display: flex;
      margin: auto;
      background: none;
      color: @white;
      z-index: 1;
    }

    &__user-btn {
      width: 68px;

      @media @bw1340 {
        width: 58px;
      }

      @media @bw768 {
        width: 48px;
      }
    }

    &__user-icon,
    &__logout-icon {
      transition: color 0.2s;

      &:hover {
        @media (hover: hover) {
          color: @dark_orchid;
        }
      }
    }

    &__user-icon {
      width: 100%;
      height: 100%;
    }

    &__nav-logout {
      width: 76px;

      @media @bw1340 {
        width: 66px;
      }

      @media @bw768 {
        width: 56px;
      }
    }

    &__logout-icon {
      width: 100%;
      height: 100%;
    }

    &__right-block {
      display: none;

      @media @bw1020 {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: auto;
        margin-left: auto;
      }
    }

    &__nav-toggle {
      display: none;

      @media @bw1020 {
        position: relative;
        display: block;
        width: 53px;
        background: none;
      }

      @media @bw768 {
        width: 43px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 21px;
        left: 9px;
        width: 35px;
        height: 4px;
        border-radius: 2px;
        background-color: @white;
        transform-origin: 50% 50%;
        transition: transform 0.4s, box-shadow 0.4s;

        @media @bw768 {
          top: 17px;
          left: 8px;
          width: 28px;
          height: 3px;
        }
      }

      &::before {
        top: 15px;
        box-shadow: 0 10px 0 @white;

        @media @bw768 {
          top: 12px;
        }
      }

      &::after {
        top: 36px;
        border: none;
        color: @white;
        opacity: 1;

        @media @bw768 {
          top: 32px;
        }
      }
    }

    .v-btn--size-default {
      min-width: auto;
      padding: 0;
    }

    .v-btn.v-btn--density-default {
      height: 63px;

      @media @bw1340 {
        height: 53px;
      }

      @media @bw768 {
        height: 43px;
      }
    }
  }
</style>