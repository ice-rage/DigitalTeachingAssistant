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
    max-width: 420px;
    margin: 100px auto 0;
    padding: 20px;
    text-align: center;

    @media @bw1340 {
      margin-top: 70px;
    }

    @media @bw768 {
      margin-top: 40px;
    }

    &__title {
      margin-bottom: 30px;
      color: @deep_purple;
      font-size: 22px;

      @media @bw1340 {
        font-size: 20px;
      }

      @media @bw768 {
        font-size: 18px;
      }
    }

    &__input {
      .v-field__overlay {
        background-color: @light_blue;
        opacity: 1;
      }

      .v-label {
        color: @gray;
        font-weight: normal;
      }
    }

    &__submit-btn {
      min-height: 40px;
      padding: 10px 28px;
      background-color: @deep_purple;
      color: @white;
      text-transform: none;
    }
  }
</style>