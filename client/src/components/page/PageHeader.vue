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
        <a href="#" class="page-header__nav-link">Преподаватели</a>
        <a href="#" class="page-header__nav-link">Пользователи</a>

        <div class="page-header__nav-user">
          <a href="#" class="page-header__nav-user-link">
            Ахроменко Дарья Сергеевна
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
  import { mdiSchool, mdiLogout } from "@mdi/js";
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
    height: 60px;
    background-color: @lavender;
    z-index: 100;

    @media @bw1340 {
      height: 50px;
    }

    @media @bw768 {
      height: 40px;
    }
    
    &__container {
      .container();

      position: relative;
      display: flex;
      justify-content: space-between;
      padding: 0;
    }
    
    &__logo {
      display: flex;
      justify-content: left;
      align-items: center;
      flex-wrap: nowrap;
      padding: 0 20px;
      background-color: @light_steel_blue;
      color: @deep_purple;

      @media @bw1340 {
        max-width: 300px;
      }
    }
    
    &__logo-icon {
      flex-shrink: 0;
      width: 32px;
      height: 32px;
      font-size: 0;

      @media @bw1020 {
        width: 24px;
        height: 24px;
      }
    }

    &__logo-text {
      margin-left: 15px;

      @media @bw650 {
        display: none;
      }
    }
    
    &__nav {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      // margin: 0 auto;

      @media @bw1020 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        flex-direction: column;
        align-items: flex-start;
        padding: 211px 30px 30px;
        background-color: fade(@light_gray, 98%);
        transition: transform 0.4s;
        transform: translate(-100%);
        overflow-x: hidden;
        overflow-y: auto;

        @supports (backdrop-filter: blur(20px)) {
          background-color: fade(@light_gray, 70%);
          backdrop-filter: blur(20px);
        }
      }

      @media @bw768 {
        padding: 149px 20px 30px;
      }
    }
    
    &__nav-link {
      margin: 0 15px;
      color: @deep_purple;
      font-weight: 600;
      font-size: 18px;
      transition: color 0.2s;

      @media @bw1020 {
        margin: 0 0 40px;
        font-size: 16px;
      }

      &:hover {
        @media(hover: hover) {
          color: @dark_orchid;
        }
      }
    }

    &__nav-user {
      display: flex;
      align-items: center;
      margin-left: 90px;

      @media @bw1660 {
        margin-left: 70px;
      }

      @media @bw1340 {
        margin-left: 50px;
      }
    }

    &__nav-user-link {
      margin-right: 25px;
      color: @deep_purple;
      font-weight: 600;
      font-size: 16px;
    }

    &__nav-logout {
      width: 32px;
      height: 32px;
      font-size: 0;
      margin-right: 20px;
    }

    &__logout-icon {
      width: 100%;
      height: 100%;
      color: @deep_purple;
    }

    &__right-block {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 202px;

      // @media @bw1660 {
      //   width: 152px;
      // }

      @media @bw1020 {
        width: auto;
        margin-left: auto;
      }
    }

    &__user-icon {
      display: none;

      @media @bw1020 {
        display: block;
        margin: auto;
        z-index: 1;
      }
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