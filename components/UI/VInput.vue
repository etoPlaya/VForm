<template>
  <label
    :class="[
      { 'v-input_focus': isFocused },
      { 'v-input_error': hasErrors }, 
    ]" 
    class="v-input"
  >
    <span  
      v-if="label"
      class="v-input__label"
    >
      {{ label }}
    </span>

    <input 
      v-bind="$attrs"
      :value="value"
      :placeholder="placeholder"
      :type="type"
      autocomplete="off"
      class="v-input__field"
      @focus="onFocus"
      @blur="onBlur"
      @input="$emit('input', $event.target.value)"
    />

    <div class="v-input-errors">
      <span
        v-for="(error, index) in errors"
        :key="index"
        v-show="hasBeenFocused && !isFocused"
      >
        {{ error }}
      </span>
    </div>
  </label>
</template>

<script>
export default {
  name: 'VInput',

  model: {
    prop: 'value',
    event: 'input',
  },
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
    errors: {
      type: Array,
      default: () => [],
    },
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    isFocused: false,
    hasBeenFocused: false, // Значит, что инпут был в фокусе хоть раз
  }),
  computed: {
    hasErrors() {
      return !this.isValid && this.value && !this.isFocused; // Введеное не валидно && Не пустой && Не в фокусе
    },
  },
  
  methods: {
    onFocus() {
      this.isFocused = true;
      this.hasBeenFocused = true;
    },
    onBlur() {
      this.isFocused = false;
    },
  },
}
</script>
