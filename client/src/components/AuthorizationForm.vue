<template>
  <v-form 
    v-model="isFormValid"
    class="authorization-form" 
    @submit.prevent="logIn"
  >
    <h1 class="authorization-form__title">Вход в систему</h1>

    <v-text-field 
      v-model="form.username" 
      label="E-mail" 
      name="email"
      color="primary"
      density="comfortable"
      single-line
      clearable
      :rules="[rules.required]"
      class="authorization-form__input"
    />

    <v-text-field
      v-model="form.password"
      label="Пароль"
      name="password"
      type="password"
      color="primary"
      density="comfortable"
      single-line
      clearable
      :rules="[rules.required]"
      class="authorization-form__input"
    />
    <v-btn
      type="submit" 
      variant="flat"
      :disabled="!isFormValid"
      class="authorization-form__submit-btn"
    >
      Войти
    </v-btn>
  </v-form>
</template>

<script setup>
  const isFormValid = defineModel({ default: false });

  const form = reactive({
    username: "",
    password: "",
  });

  const rules = {
    required: value => !!value || "Это поле обязательно",
  };

  const logIn = () => {
    // здесь будет запрос к API 
    console.log(form);
  };
</script>

<style lang="less">
  .authorization-form {
    display: flex;
    flex-direction: column;
    gap: 21px;
    border: 3px solid @deep_purple;
    border-radius: 20px;
    max-width: 507px;
    margin: calc(50vh - 376px) auto;
    padding: 15px 75px 56px;
    box-shadow: @shadow_main;

    @media @bw1340 {
      margin: calc(50vh - 316px) auto;
    }

    @media @bw768 {
      padding-bottom: 46px;
    }

    @media @bw650 {
      padding: 15px 10% 36px;
    }

    @media (max-height: 768px) and (min-width: 768px) {
      margin: 20px auto;
    }

    &__title {
      margin: 0 0 22px;
      color: @black;
      font-weight: 500;
      font-size: 40px;
      text-align: center;

      @media @bw1340 {
        font-size: 30px;
      }

      @media @bw768 {
        font-size: 20px;
      }
    }

    &__input {
      .v-field,
      .v-field__input,
      .v-input__control {
        max-height: 58px;

        @media @bw1340 {
          max-height: 50px;
        }

        @media @bw768 {
          max-height: 45px;
        }
      }

      .v-field__input,
      .v-field-label {
        font-size: 30px;

        @media @bw1340 {
          font-size: 22px;
        }

        @media @bw768 {
          font-size: 14px;
        }
      }

      .v-field__overlay {
        border-radius: 20px 20px 0 0;
        background-color: @light_blue;
        box-shadow: @shadow_main;
        opacity: 1;
      }

      .v-field-label {
        color: @gray;
        font-weight: 500;
        margin-left: 18px;
      }

      .v-input__details {
        padding-top: 0;
        padding-inline: 18px;
        max-height: 16px;
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

      @media @bw1340 {
        min-height: 50px;
        font-size: 16px;
      }

      @media @bw768 {
        min-height: 45px;
      }
    }

    .v-input {
      flex: 0;
    }
  }
</style>