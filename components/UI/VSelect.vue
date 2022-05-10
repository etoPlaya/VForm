<template>
  <div 
    class="v-select"
    v-click-outside="setBlur"
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

  data: () => ({
    isActive: false,
  }),
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
        return this.$emit('change-value', value);
      },
    },
    sortingOptions() {
      // Если есть placeholder то он будет выбран по дефолту и будет внутри select
      if (this.placeholder) {
        const options = this.options.map(option => option);

        options.unshift({
          value: '',
          title: this.placeholder,
        });

        return options;
      }

      return this.options;
    },
    indexSelectedOption() {
      return this.sortingOptions.findIndex(option => {
        return option.value === this.value;
      });
    },
  },

  created() {
    this.placeholder ? null : this.$emit('change-value', this.options[0].value);
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
      if (event.key === 'ArrowUp' && this.isActive && this.indexSelectedOption) {
        return this.setModel(this.sortingOptions[this.indexSelectedOption - 1].value);
      }

      if (event.key === 'ArrowDown' && this.isActive && this.indexSelectedOption !== this.options.length) {
        return this.setModel(this.sortingOptions[this.indexSelectedOption + 1].value);
      }

      if (event.key === 'Escape' && this.isActive || event.key === 'Enter' && this.isActive) {
        return this.isActive = false;
      }

      return;
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

.v-select__option_active {
  background-color: #eee;
}
</style>