<template>
  <div>
    <FormInputs />
    <FormTextarea />
  </div>
</template>

<script>
import FormInputs from '@/components/FormInputs';
import FormTextarea from '@/components/FormTextarea';

export default { 
  name: 'Index',
  components: {
    FormInputs,
    FormTextarea,
  },
}
</script>

<style lang="scss" scoped>

</style>
