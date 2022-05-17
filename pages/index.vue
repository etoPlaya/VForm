<template>
  <div>
    <FormInputs />
    <FormTextarea />
    <FormSelect />
    <FormCheckbox />
    <FormButton />
  </div>
</template>

<script>
import FormInputs from '@/components/FormInputs';
import FormTextarea from '@/components/FormTextarea';
import FormSelect from '@/components/FormSelect';
import FormCheckbox from '@/components/FormCheckbox';
import FormButton from '@/components/FormButton';

export default { 
  name: 'Index',
  components: {
    FormInputs,
    FormTextarea,
    FormSelect,
    FormCheckbox,
    FormButton,
  },
}
</script>

<style lang="scss" scoped>

</style>
