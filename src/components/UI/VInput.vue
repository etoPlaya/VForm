<template>
  <label
    :class="[
      { 'v-input_focus': isFocused },
      { 'v-input_error': !isValid && model && !isFocused }, // Введеное не валидно && Не пустой && Не в фокусе
    ]" 
    class="v-input"
  >
    <span  
      v-if="label"
      v-once
      class="v-input__label"
    >
      {{ label }}
    </span>

    <input 
      v-model="model"
      :placeholder="placeholder"
      :type="type"
      v-bind="$attrs"
      v-on="$listeners"
      autocomplete="off"
      class="v-input__field"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </label>
</template>

<script>
export default {
  name: 'VInput',

  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
      validator: val => ['text', 'email', 'phone', 'password'].includes(val),
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isFocused: false,
  }),
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(value) {
        return this.$emit('change-value', value);
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.v-input__field {
  .v-input_error & {
    border-color: red;
  }
}
</style>