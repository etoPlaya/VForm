<template>
  <div
    v-bind="$attrs"
    v-on="$listeners"
    :class="{ 'v-checkbox_checked': model }"
    class="v-checkbox"
    @click.prevent="model = !value"
  >
    <span  
      v-if="label"
      v-once
      class="v-checkbox__label"
    >
      {{ label }}
    </span>

    <div class="v-checkbox__icon">
      <IconCheck v-show="model" />
    </div>
  </div>
</template>

<script>
import IconCheck from '@/assets/icons/check.svg';

export default {
  name: 'VCheckbox',
  components: {
    IconCheck,
  },

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
  },
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
.v-checkbox {
  cursor: pointer;
}
</style>