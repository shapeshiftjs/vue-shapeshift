import Vue, { VueConstructor } from 'vue';

const SSCheckbox = Vue.extend({
  props: {
    schema: {
      type: Object,
      required: true
    },
    uiSchema: {
      type: Object,
      required: false
    }
  },
  render(createElement) {
    const input = createElement('input', {
      attrs: {
        type: 'checkbox',
        class: 'uk-checkbox'
      }
    });

    const label = createElement('label', {}, [input, ' ' + this.schema.name]);

    return createElement(
      'div',
      {
        attrs: {
          class: 'uk-margin uk-grid-small uk-child-width-auto uk-grid'
        }
      },
      [label]
    );
  }
});
export default SSCheckbox;