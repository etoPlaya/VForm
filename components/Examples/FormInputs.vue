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
        v-model="form[input.id]"
        :placeholder="input.placeholder"
        :label="input.label"
        :type="input.type"
        :errors="input.errors"
        :isValid="input.isFilled && input.isCorrectly"
      />
    </div>
  </form>
</template>

<script>
import VInput from '@/components/UI/VInput';

import { validateRegex } from '@/utils/inputsValidateRegex';
import { ERROR_NAMES } from '@/utils/const/inputsErrors';

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
          label: 'Введите имя',
          isFilled: Boolean(this.form.name),
          isCorrectly: Boolean(validateRegex.name.test(this.form.name)),
          errors: [
            Boolean(this.form.name) ? '' : ERROR_NAMES.NOT_FILLED,
            Boolean(this.form.name) && !Boolean(validateRegex.name.test(this.form.name)) ? ERROR_NAMES.NOT_CORRECTLY : '',
          ],
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'phone',
          placeholder: 'Телефон',
          label: 'Введите телефон',
          type: 'phone',
          isFilled: Boolean(this.form.phone),
          isCorrectly: Boolean(validateRegex.phone.test(this.form.phone)),
          errors: [
            Boolean(this.form.phone) ? '' : ERROR_NAMES.NOT_FILLED,
            Boolean(this.form.phone) && !Boolean(validateRegex.phone.test(this.form.phone)) ? ERROR_NAMES.NOT_CORRECTLY : '',
          ],
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'email',
          placeholder: 'Email',
          label: 'Введите email',
          type: 'email',
          isFilled: Boolean(this.form.email),
          isCorrectly: Boolean(validateRegex.email.test(this.form.email)),
          errors: [
            Boolean(this.form.email) ? '' : ERROR_NAMES.NOT_FILLED,
            Boolean(this.form.email) && !Boolean(validateRegex.email.test(this.form.email)) ? ERROR_NAMES.NOT_CORRECTLY : '',
          ],
          required: true, // Не нужно указывать если все инпуты обязательны
        },
        {
          id: 'any',
          placeholder: 'Текст',
          label: 'Введите текст',
        },
      ];
    },
  },

  methods: {
    onSubmitForm() {
      // Удалить если все инпуты обязательны
      const requiredInputs = this.inputs.filter(input => input.required || input.isFilled || input.isCorrectly);

      // Если все инпуты обязательны изменить requiredInputs на this.inputs
      if (requiredInputs.every(input => input.isFilled && input.isCorrectly)) {
        return console.log('Заполено корректно');
      }
    },
  },
}
</script>
