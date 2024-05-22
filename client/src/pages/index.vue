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
      class="authorization-form__input"
    />

    <v-text-field
      v-model="form.password"
      label="Пароль"
      name="password"
      type="password"
      class="authorization-form__input"
    />
    <v-btn type="submit" variant="flat" class="authorization-form__submit-btn">
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
    max-width: 420px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    &__title {
      margin-bottom: 30px;
      color: @deep_purple;
      font-size: 22px;
    }

    &__input {
      .v-field__overlay {
        background-color: @light_blue;
        opacity: 1;
      }

      .v-label {
        color: @gray;
        font-weight: normal;
        text-shadow: 1px;
      }
    }

    &__submit-btn {
      padding: 10px 28px;
      background-color: @deep_purple;
      color: @white;
      text-transform: none;
    }
  }
</style>