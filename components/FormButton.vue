<template>
  <form 
    novalidate
    class="v-form" 
  >
    <VButton
      buttonColor="black"
    >
      Ну кнопка и кнопка, чо бубнить то
    </VButton>
  </form>
</template>

<script>
import VButton from '@/components/UI/VButton';

export default {
  name: 'FormButton',
  components: {
    VButton,
  },
}
</script>

<style lang="scss" scoped>

</style>