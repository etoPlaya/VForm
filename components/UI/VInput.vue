<template>
  <label
    :class="[
      { 'v-input_focus': isFocused },
      { 'v-input_error': !isValid && value && !isFocused }, // Введеное не валидно && Не пустой && Не в фокусе
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
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="$emit('input', $event.target.value)"
    />

    <div class="v-input-errors">
      <span
        v-for="(error, index) in errors"
        :key="index"
        v-show="isDirty && !isFocused"
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
    isDirty: false, // Значит, что инпут был в фокусе хоть раз
  }),
  watch: {
    isFocused() {
      this.isDirty = true;
    },
  },
}
</script>
