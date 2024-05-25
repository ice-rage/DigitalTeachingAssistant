<template>
  <footer class="page-footer">
    <div class="page-footer__container">
      <div class="page-footer__contacts">
        <h4 class="page-footer__contacts-title">Наши контакты:</h4>
        <a href="tel:74993485321" class="page-footer__contacts-data">
          +79132823723
        </a>
        <a 
          href="mailto:hackaton2024@gmail.com" 
          class="page-footer__contacts-data"
        >
          hackaton2024@gmail.com
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
    padding: 20px 0 15px;
    background-color: @deep_purple_90;
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

    &__contacts-title,
    &__contacts-data {
      font-weight: 500;
      font-size: 22px;
    }

    &__copyright {
      display: flex;
      flex-direction: column;
      gap: 7px;
      font-family: @font2;
      font-size: 22px;
      text-align: right;
    }
  }
</style>