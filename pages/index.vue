<template>
  <div>
    <FormInputs />
    <FormTextarea />
    <FormSelect />
    <FormCheckbox />
  </div>
</template>

<script>
import FormInputs from '@/components/FormInputs';
import FormTextarea from '@/components/FormTextarea';
import FormSelect from '@/components/FormSelect';
import FormCheckbox from '@/components/FormCheckbox';

export default { 
  name: 'Index',
  components: {
    FormInputs,
    FormTextarea,
    FormSelect,
    FormCheckbox,
  },
}
</script>

<style lang="scss" scoped>

</style>
