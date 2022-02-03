<template>
  <div class="cu-toast-notification" :class="[classes, className]">
    <div class="cu-toast-notification__content">
      <div class="cu-toast-notification__icon">
        <svg
          width="15"
          height="15"
          viewBox="0 0 22 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            v-if="variant === 'warning'"
            d="M0 19H22L11 0L0 19ZM12 16H10V14H12V16ZM12 12H10V8H12V12Z"
            fill="#fac756"
          />
          <path
            v-else-if="variant === 'success'"
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z"
            fill="#31c48d"
          />
          <path
            v-else-if="variant === 'error'"
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
            fill="#f37579"
          />
          <path
            v-else
            d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z"
            fill="#5ca3ea"
          />
        </svg>
      </div>
      <div class="cu-toast-notification__text">
        <div
          class="cu-toast-notification__header"
          :class="[headerClasses, headerClassName]"
        >
          <!-- @slot Slot for the notification header  -->
          <slot name="header" />
        </div>
        <div class="cu-toast-notification__message">
          <!-- @slot Slot for the notification message  -->
          <slot name="message" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "ToastNotification",

  props: {
    /**
     * Which type of notification is this?
     */
    variant: {
      type: String,
      validator: function (value) {
        return ["info", "warning", "success", "error"].indexOf(value) !== -1;
      },
      default: "info",
    },
    /**
     * Use this prop to add custom CSS class names to the Toast Notification as needed
     */
    className: {
      type: String,
      default: "",
    },
    /**
     * Use this prop to add custom CSS class names to the Toast Notification Header as needed
     */
    headerClassName: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "cu-toast-notification--warning": props.variant === "warning",
        "cu-toast-notification--success": props.variant === "success",
        "cu-toast-notification--error": props.variant === "error",
      })),
      headerClasses: computed(() => ({
        "cu-toast-notification__header--warning": props.variant === "warning",
        "cu-toast-notification__header--success": props.variant === "success",
        "cu-toast-notification__header--error": props.variant === "error",
      })),
    };
  },
};
</script>
