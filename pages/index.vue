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
import FormInputs from '@/components/Examples/FormInputs';
import FormTextarea from '@/components/Examples/FormTextarea';
import FormSelect from '@/components/Examples/FormSelect';
import FormCheckbox from '@/components/Examples/FormCheckbox';
import FormButton from '@/components/Examples/FormButton';

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
