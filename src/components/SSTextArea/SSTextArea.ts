import Vue, { VueConstructor, VNode } from 'vue';
import { Shapeshift } from '@shapeshift/core';

const SSTextArea = Vue.extend({
  props: {
    value: [String, Number],
    ss: {
      type: Shapeshift,
      required: true,
    }
  },

  data() {
    return {
      nestedValue: this.value
    }
  },

  watch: {
    value(newValue) {
      this.nestedValue = newValue;
    }
  },

  render(createElement): VNode {
    const self = this;
    const listeners = Object.assign({}, this.$listeners);
    const input = createElement('textarea', {
      domProps: {
        value: this.nestedValue
      },
      attrs: {
        placeholder: this.ss.schema.title,
      },
      on: Object.assign(listeners, {
        input: function (event: any) {
          self.nestedValue = event.target.value;
          self.$emit('input', self.nestedValue);
        }
      }),
    });
    return createElement('div', [input]);
  }
});
export default SSTextArea;
