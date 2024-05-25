<template>
  <v-form 
    class="authorization-form" 
    @submit.prevent="handleSubmit"
  >
    <h1 class="authorization-form__title">Вход в систему</h1>

    <v-text-field 
      v-model="form.username" 
      label="E-mail" 
      name="email"
      color="primary"
      class="authorization-form__input"
    />

    <v-text-field
      v-model="form.password"
      label="Пароль"
      name="password"
      type="password"
      color="primary"
      class="authorization-form__input"
    />
    <v-btn 
      type="submit" 
      variant="flat" 
      class="authorization-form__submit-btn"
    >
      Войти
    </v-btn>
  </v-form>
</template>

<script setup>
  const form = reactive({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    // здесь будет запрос к API 
    console.log(form);
  };
</script>

<style lang="less">
  .authorization-form {
    display: flex;
    flex-direction: column;
    gap: 21px;
    border: 3px solid @black;
    border-radius: 20px;
    max-width: 507px;
    height: 471px;
    margin: calc(50vh - 376px) auto 0;
    padding: 15px 75px 56px;
    text-align: center;
    box-shadow: @shadow_main;

    @media @bw1340 {
      margin-top: 70px;
    }

    @media @bw768 {
      margin-top: 40px;
    }

    &__title {
      margin: 0 0 22px;
      color: @black;
      font-weight: 500;
      font-size: 40px;

      @media @bw1340 {
        font-size: 20px;
      }

      @media @bw768 {
        font-size: 18px;
      }
    }

    &__input {
      .v-input__control {
        max-height: 58px;
      }

      .v-field__overlay {
        border-radius: 20px 20px 0 0;
        background-color: @light_blue;
        box-shadow: @shadow_main;
        opacity: 1;
      }

      .v-field-label {
        margin-left: 18px;
      }

      .v-label {
        color: @gray;
        font-weight: 500;
      }
    }

    &__submit-btn {
      align-items: flex-start;
      border-radius: 0 0 20px 20px;
      min-height: 58px;
      padding: 9px 6px;
      background-color: @yellow_green;
      color: @white;
      font-size: 22px;
      letter-spacing: normal;
      text-transform: none;
    }
  }
</style>