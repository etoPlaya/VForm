<template>
  <div>
    <FormInputs />
    <FormTextarea />
    <FormSelect />
  </div>
</template>

<script>
import FormInputs from '@/components/FormInputs';
import FormTextarea from '@/components/FormTextarea';
import FormSelect from '@/components/FormSelect';

export default { 
  name: 'Index',
  components: {
    FormInputs,
    FormTextarea,
    FormSelect,
  },
}
</script>

<style lang="scss" scoped>

</style>
