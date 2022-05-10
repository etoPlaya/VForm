<template>
  <label
    :class="[
      { 'v-textarea_focus': isFocused },
    ]" 
    class="v-textarea"
  >
    <span  
      v-if="label"
      v-once
      class="v-textarea__label"
    >
      {{ label }}
    </span>

    <input 
      v-model="model"
      :placeholder="placeholder"
      v-bind="$attrs"
      v-on="$listeners"
      class="v-textarea__field"
      @focus="isFocused = true"
      @blur="isFocused = false"
    />
  </label>
</template>

<script>
export default {
  name: 'VTextarea',

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
.v-textarea__field {
  resize: none;
}
</style>