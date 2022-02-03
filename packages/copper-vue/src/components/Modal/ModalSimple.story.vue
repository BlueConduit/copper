<template>
  <div class="cu-center">
    <p>Click the button to open the modal</p>
    <Button @click="handleOpenModal">Open</Button>
  </div>
  <Modal :visible="showModal" @close-modal="handleCloseModal">
    Hey there! Click outside this box to close me!
  </Modal>
</template>

<script>
import { ref } from "vue";

import Button from "../Button/Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "ModalSimple",
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
    };

    return {
      showModal,
      handleCloseModal,
      handleOpenModal,
    };
  },
};
</script>
