<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__contacts">
        <h4 class="page-footer__contacts-title">Наши контакты:</h4>
        <a href="tel:74993485321" class="page-footer__contacts-data">
          +7 499 348 53 21
        </a>
        <a 
          href="mailto:contacts@digital-teaching-assistant.ru" 
          class="page-footer__contacts-data"
        >
          contacts@digital-teaching-assistant.ru
        </a>
      </div>

      <div class="page-footer__copyright">
        © Digital Teaching Assistant 
        <span class="page-footer__copyright-year">2024</span>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="less">
  .page-footer {
    flex: 0 0 auto;
    padding: 30px 0;
    background-color: @deep_purple;
    color: @white;

    &__container {
      .container();

      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__contacts {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }

    &__contacts-title {
      margin-bottom: 10px;

      @media @bw768 {
        margin-bottom: 5px;
      }
    }

    &__contacts-data {
      display: flex;
      margin-bottom: 5px;

      @media @bw768 {
        margin-bottom: 3px;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__copyright {
      display: flex;
      flex-direction: column;
      gap: 10px;
      text-align: right;
    }
  }
</style>