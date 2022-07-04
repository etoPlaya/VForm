<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VSelect
      v-model="form.option"
      :options="options"
      placeholder="Выберите значение"
    />
  </form>
</template>

<script>
import VSelect from '@/components/UI/VSelect';

export default {
  name: 'FormSelect',
  components: {
    VSelect,
  },

  data: () => ({
    form: {
      option: '', 
    },
  }),
  computed: {
    options() {
      return [
        {
          title: 'value - 1',
          value: 1,
        },
        {
          title: 'value - 2',
          value: 2,
        },
        {
          title: 'value - 3',
          value: 3,
        },
      ];
    },
  },
}
</script>
