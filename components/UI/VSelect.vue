<template>
  <div 
    v-if="options.length"
    v-click-outside="setBlur"
    class="v-select"
  >
    <div 
      class="v-select__header"
      @click.prevent="isActive = !isActive"
    >
      <div class="v-select__header-value">
        {{ model }}
      </div>

      <IconArrow class="v-select__header-icon" />
    </div>

    <div v-if="isActive" class="v-select__options">
      <div 
        v-for="(option, index) in sortingOptions"
        :key="index"
        :class="{ 'v-select__option_active': option.value === value }"
        class="v-select__option"
        @click.stop="setModel(option.value)"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>

<script>
import IconArrow from '@/assets/icons/arrow.svg';

export default {
  name: 'VSelect',
  components: {
    IconArrow,
  },

  model: {
    prop: 'value',
    event: 'change',
  },
  props: {
    placeholder: {
      type: String,
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    isActive: false,
  }),
  computed: {
    model: {
      get() {
        if (this.value) {
          return this.value;
        }
        
        return this.placeholder
          ? this.placeholder
          : this.options[0].title;
      },
      set(value) {
        return this.$emit('change', value);
      },
    },
    sortingOptions() {
      if (!this.placeholder || !this.options.length) {
        return this.options;
      }

      // Если есть placeholder то он будет выбран по дефолту и будет внутри select
      const options = this.options.map(option => option);

      options.unshift({
        value: '',
        title: this.placeholder,
      });

      return options;
    },
    indexSelectedOption() {
      return this.sortingOptions.findIndex(option => option.value === this.value);
    },
  },

  created() {
    if (!this.placeholder && this.options.length) {
      this.$emit('change', this.options[0].value);
    }
  },
  mounted() {
    this.initKeyboardsHelper();
  },
  beforeDestroy() {
    this.destroyKeyboardsHelper();
  },

  methods: {
    setBlur() {
      this.isActive = false;
    },
    setModel(value) {
      this.model = value;
    },
    
    keyboardsHelper(event) {
      if (!this.isActive) return;

      if (event.key === 'ArrowUp' && this.indexSelectedOption) {
        this.setModel(this.sortingOptions[this.indexSelectedOption - 1].value);
        return;
      }

      if (event.key === 'ArrowDown' && this.indexSelectedOption !== this.options.length) {
        this.setModel(this.sortingOptions[this.indexSelectedOption + 1].value);
        return;
      }

      if (event.key === 'Escape' || event.key === 'Enter') {
        this.isActive = false;
      }
    },
    initKeyboardsHelper() {
      document.addEventListener('keydown', this.keyboardsHelper);
    },
    destroyKeyboardsHelper() {
      document.removeEventListener('keydown', this.keyboardsHelper);
    },
  },
}
</script>

<style lang="scss" scoped>
.v-select__header {
  cursor: pointer;
}
</style>