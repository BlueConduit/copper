<template>
  <div
    :class="modalClasses"
    id='test-modal'
  >
    <div class="cu-modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from 'vue'
import classNames from 'classnames'
export default {
  name: "Modal",

  /**
   * Emitted when the modal is closed by clicking outside the modal box. Note,
   * this will only fire if `dismissable` is true. 
   */
  emits: [
    'closeModal',
  ],

  props: {
    /**
     * True if the modal should be dismissable by the user. In other words, this
     * should be true if a user should be able to close the modal by clicking
     * the dark backdrop behind the modal box.
     */
    dismissable: {
      type: Boolean,
      default: true,
    },

    visible: {
      type: Boolean,
      required: true,
    }
  },
  setup(props, context) {

    const windowClick = (event) => {
      const backdrop = document.querySelector('#test-modal');
      if (event.target == backdrop) {
        context.emit('closeModal');
      }
    }
    onMounted(() => {
      if (props.dismissable) {
        window.addEventListener('click', windowClick);
      }
    });

    onUnmounted(() => {
      // Not sure how mounting/unmounting works when props change yet, so we
      // won't check props.dismissable in case it was changed to false after
      // this was first mounted. That way we won't have lingering event listeners
      window.removeEventListener('click', windowClick);
    });

    return {
      modalClasses: computed(() => classNames(
        'cu-modal',
        {
          'cu-modal--visible': props.visible,
        }
      )),
    };
  }
}
</script>
