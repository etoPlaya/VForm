<template>
  <label
    :class="[
      { 'v-textarea_focus': isFocused },
    ]" 
    class="v-textarea"
  >
    <span
      v-if="label"
      class="v-textarea__label"
    >
      {{ label }}
    </span>

    <textarea
      v-bind="$attrs"
      :value="value"
      :placeholder="placeholder"
      class="v-textarea__field"
      @focus="isFocused = true"
      @blur="isFocused = false"
      @input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'VTextarea',

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
  },
  data: () => ({
    isFocused: false,
  }),
}
</script>
