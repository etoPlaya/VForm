<template>
  <label
    :class="{ 'v-checkbox_checked': checked }"
    class="v-checkbox"
  >
    <span  
      v-if="label"
      class="v-checkbox__label"
    >
      {{ label }}
    </span>

    <div class="v-checkbox__icon">
      <IconCheck v-show="checked" />
    </div>

    <input 
      v-bind="$attrs"
      :checked="checked"
      type="checkbox"
      class="v-checkbox__input"
      @change="$emit('change', !checked)"
    />
  </label>
</template>

<script>
import IconCheck from '@/assets/icons/check.svg';

export default {
  name: 'VCheckbox',
  components: {
    IconCheck,
  },

  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.v-checkbox {
  cursor: pointer;
}
</style>