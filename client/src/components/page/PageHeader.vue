<template>
  <header class="page-header">
    <div class="page-header__container">
      <a href="/" title="На главную" class="page-header__logo">
        <v-icon :icon="mdiSchool" class="page-header__logo-icon"/>

        <h4 class="page-header__logo-text">
          Цифровой помощник преподавателя
        </h4>
      </a>

      <nav class="page-header__nav">
        <a href="#" class="page-header__nav-link">Пользователи</a>
        <a href="#" class="page-header__nav-link">Преподаватели</a>
        
        <div class="page-header__nav-user">
          <a href="#" class="page-header__user-btn">
            <v-icon 
              :icon="mdiAccountCircle" 
              class="page-header__user-icon"
            ></v-icon>
          </a>

          <a href="#" class="page-header__nav-logout">
            <v-icon 
              :icon="mdiLogout" 
              class="page-header__logout-icon">
            </v-icon>
          </a>
        </div>
        
        <v-btn type="button" class="page-header__nav-toggle"></v-btn>
      </nav>
    </div>
  </header>
</template>

<script setup>
  import { mdiSchool, mdiAccountCircle, mdiLogout } from "@mdi/js";
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
    z-index: 100;

    @media @bw1340 {
      height: 100px;
    }

    @media @bw768 {
      height: 80px;
    }
    
    &__container {
      .container();

      position: relative;
      display: flex;
      justify-content: space-between;
      padding-left: 0;
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

      @media @bw1020 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: flex-start;
        padding: 211px 30px 30px;
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

      @media @bw768 {
        padding: 149px 20px 30px;
      }
    }
    
    &__nav-link {
      border-radius: 13px;
      margin: 0 21px;
      padding: 19px 49px;
      background-color: @dark_orchid_40;
      color: @white;
      font-family: @font2;
      font-weight: 400;
      transition: background-color 0.2s;

      @media @bw1340 {
        margin: 0 10px;
        padding: 15px 30px;
      }

      @media @bw1020 {
        margin: 0 0 40px;
        font-size: 16px;
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
    }

    &__user-btn {
      display: block;
      width: 68px;
      height: 63px;
      margin: auto;
      z-index: 1;

      @media @bw1340 {
        width: 58px;
        height: 53px;
      }

      @media @bw768 {
        width: 48px;
        height: 43px;
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
      display: block;
      width: 76px;
      height: 63px;
      font-size: 0;
      z-index: 1;

      @media @bw1340 {
        width: 66px;
        height: 53px;
      }

      @media @bw768 {
        width: 56px;
        height: 43px;
      }
    }

    &__logout-icon {
      width: 100%;
      height: 100%;
    }

    &__nav-toggle {
      display: none;

      @media @bw1020 {
        position: relative;
        display: block;
        right: -8px;
        margin-left: 23px;
        width: 40px;
        height: 40px;
        border: none;
        background: none;
      }

      @media @bw768 {
        margin-left: 6px;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        display: block;
        top: 19px;
        left: 10px;
        width: 20px;
        height: 2px;
        border-radius: 2px;
        background-color: @deep_purple;
        transform-origin: 50% 50%;
        transition: transform 0.4s, box-shadow 0.4s;
      }

      &::before {
        top: 13px;
        box-shadow: 0 6px 0 @deep_purple;
      }

      &::after {
        top: 25px;
      }
    }
  }
</style>