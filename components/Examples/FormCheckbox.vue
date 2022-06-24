<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VCheckbox 
      :checked="form[checkbox.id]"
      :label="checkbox.label"
    />
  </form>
</template>

<script>
import VCheckbox from '@/components/UI/VCheckbox';

export default { 
  name: 'FormCheckbox',
  components: {
    VCheckbox,
  },

  data: () => ({
    form: {
      checkboxChecked: false,
    },
  }),
  computed: {
    checkbox() {
      return {
        id: 'checkboxChecked',
        label: 'Согласитесь написано странно',
      };
    },
  },
}
</script>
