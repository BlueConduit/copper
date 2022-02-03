<template>
  <div :class="modalClasses" :id="simple_id_prefixed">
    <div :class="contentClasses">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted } from "vue";
import classNames from "classnames";

/**
 * We use this as a trivial way to give each modal a unique ID. We only need
 * an id for the click listener on the window, so we shouldn't require users
 * to give us an id to use the component.
 * It gets set ONCE and incremented EACH TIME the setup() method runs, which
 * gives us a unique number for every modal.
 * https://github.com/vuejs/vue/issues/5886
 */
let simple_id = 0;

export default {
  name: "Modal",

  emits: [
    /**
     * Emitted when the modal is closed by clicking outside the modal box. Note,
     * this will only fire if `dismissable` is true.
     */
    "closeModal",
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

    /**
     * True if the modal should be visible.
     */
    visible: {
      type: Boolean,
      required: true,
    },

    /**
     * Use this to specify a specific max width that the modal should have.
     * Without specifying a value here the width of the modal will be controlled
     * by its contents.
     */
    maxWidth: {
      type: String,
      default: "",
      validator: function (value) {
        if (value) {
          return ["small", "medium", "large"].indexOf(value) !== -1;
        }
        return true;
      },
    },
  },
  setup(props, context) {
    // See comment at the top of the <script>
    simple_id += 1;
    let simple_id_prefixed = `cu-modal-id-${simple_id}`;

    const windowClick = (event) => {
      const backdrop = document.querySelector(`#${simple_id_prefixed}`);
      if (event.target == backdrop) {
        context.emit("closeModal");
      }
    };

    onMounted(() => {
      if (props.dismissable) {
        window.addEventListener("click", windowClick);
      }
    });

    onUnmounted(() => {
      // Not sure how mounting/unmounting works when props change yet, so we
      // won't check props.dismissable in case it was changed to false after
      // this was first mounted. That way we won't have lingering event listeners
      window.removeEventListener("click", windowClick);
    });

    return {
      simple_id_prefixed,
      modalClasses: computed(() =>
        classNames("cu-modal", {
          "cu-modal--visible": props.visible,
        })
      ),
      contentClasses: computed(() =>
        classNames("cu-modal__content", {
          "cu-modal__content--small": props.maxWidth === "small",
          "cu-modal__content--medium": props.maxWidth === "medium",
          "cu-modal__content--large": props.maxWidth === "large",
        })
      ),
    };
  },
};
</script>
