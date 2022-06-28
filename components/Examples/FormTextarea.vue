<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VTextarea 
      v-model="form[textarea.id]"
      :placeholder="textarea.placeholder"
      :label="textarea.label"
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
        label: 'Введите сообщение',
      }
    },
  },
}
</script>
