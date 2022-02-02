<template>
  <div class="cu-center">
    <p>Use the <code>dismissable</code> prop to prevent the modal from closing when someone clicks outside of it.</p>
    <Button @click="handleOpenModal">Open</Button>
  </div>
  <Modal
    :visible="showModal"
    :dismissable="false"
    @close-modal="handleCloseModal"
  >
    You have to click the button to close me!
    <Button @click="handleCloseModal">Close</Button>
  </Modal>
</template>

<script>
import { ref } from "vue";

import Button from "../Button/Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "ModalBlocking",
  components: {
    Button,
    Modal,
  },
  setup() {
    const showModal = ref(false);
    const handleCloseModal = () => {
      showModal.value = false;
    };
    const handleOpenModal = () => {
      showModal.value = true;
    }

    return {
      showModal,
      handleCloseModal,
      handleOpenModal,
    }
  }
}
</script>
