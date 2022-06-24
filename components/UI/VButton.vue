<template>
  <button 
    v-bind="$attrs"
    v-on="$listeners"
    :to="to"
    :is="tag"
    :class="[
      `v-button_${buttonColor}`,
    ]"
    class="v-button"
    @mousedown.prevent
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'VButton',

  props: {
    tag: {
      type: String,
      default: 'button',
      validator: val => ['nuxt-link', 'a', 'button'].includes(val),
    },
    to: {
      type: String,
      default: null,
    },
    buttonColor: {
      type: String,
      default: null,
      validator: val => ['white', 'black', 'green'].includes(val),
    },
  },
}
</script>
