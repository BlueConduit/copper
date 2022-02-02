<template>
  <Modal
    :visible="showModal"
    @close-modal="handleCloseModal"
  >
    here is the modal!
  </Modal>
  <div class="cu-center">
    <h1>Simple modal exmaple</h1>
    <p>Here's a little content to show behind the modal</p>
    <Button @click="handleOpenModal">Open</Button>
  </div>
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
    }

    return {
      showModal,
      handleCloseModal,
      handleOpenModal,
    }
  }
}
</script>

<style>

</style>
