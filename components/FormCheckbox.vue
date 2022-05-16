<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VCheckbox 
      :value="form[checkbox.id]"
      :label="checkbox.label"
      @change-value="changeFieldValue($event, checkbox.id)"
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
      }
    },
  },

  methods: {
    changeFieldValue(value, fieldId) {
      this.form[fieldId] = value;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
