<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VTextarea 
      :value="form[textarea.id]"
      :placeholder="textarea.placeholder"
      :label="textarea.label"
      @change-value="changeFieldValue($event, textarea.id)"
    />
  </form>
</template>

<script>
import VTextarea from '@/components/UI/VTextarea';

export default { 
  name: 'FormTextarea',
  components: {
    VTextarea,
  },

  data: () => ({
    form: {
      message: '',
    },
  }),
  computed: {
    textarea() {
      return {
        id: 'message',
        placeholder: 'Сообщение',
        label: 'Ввидите сообщение',
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
