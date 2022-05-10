<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VSelect
      placeholder="Выберите значение"
      :value="form.option"
      :options="options"
      @change-value="changeFieldValue($event, 'option')"
    />

    {{ form.option }}
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
          value: 1,
          title: 'value - 1',
        },
        {
          value: 2,
          title: 'value - 2',
        },
        {
          value: 3,
          title: 'value - 3',
        },
      ];
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
