<template>
  <form 
    novalidate
    class="v-form" 
    @submit.prevent="onSubmitForm" 
  >
    <div 
      v-for="(input, index) in inputs"
      :key="index"
      class="v-form__section"
    >
      <VInput 
        :value="form[input.id]"
        :placeholder="input.placeholder"
        :label="input.label"
        :type="input.type"
        :isValid="input.isFilled && input.isCorrectlyFilled"
        @change-value="changeFieldValue($event, input.id)"
      />
    </div>
  </form>
</template>

<script>
import VInput from '@/components/UI/VInput';

import { validateRegex } from '@/utils/inputsValidateRegex';

export default { 
  name: 'FormInputs',
  components: {
    VInput,
  },

  data: () => ({
    form: {
      name: '',
      phone: '',
      email: '',
      any: '',
    },
  }),
  computed: {
    inputs() {
      return [
        {
          id: 'name',
          placeholder: 'Имя',
          label: 'Ввидите имя',
          isFilled: Boolean(this.form.name),
          isCorrectlyFilled: Boolean(validateRegex.name.test(this.form.name)),
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'phone',
          placeholder: 'Телефон',
          label: 'Ввидите телефон',
          type: 'phone',
          isFilled: Boolean(this.form.phone),
          isCorrectlyFilled: Boolean(validateRegex.phone.test(this.form.phone)),
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'email',
          placeholder: 'Email',
          label: 'Ввидите email',
          type: 'email',
          isFilled: Boolean(this.form.email),
          isCorrectlyFilled: Boolean(validateRegex.email.test(this.form.email)),
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'any',
          placeholder: 'Текст',
          label: 'Ввидите текст',
        },
      ];
    },
  },

  methods: {
    changeFieldValue(value, fieldId) {
      this.form[fieldId] = value;
    },

    onSubmitForm() {
      // Удалить если все инпуты обязательны
      const requiredInputs = this.inputs.filter(input => input.required);

      // Если все инпуты обязательны изменить requiredInputs на this.inputs
      if (requiredInputs.every(input => input.isFilled && input.isCorrectlyFilled)) {
        return console.log('Заполено корректно');
      }
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
