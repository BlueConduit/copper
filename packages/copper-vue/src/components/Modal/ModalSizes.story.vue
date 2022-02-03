<template>
  <div class="cu-center cu-stack">
    <p>Click the button to open the modal</p>
    <Button @click="handleOpenModal">Open</Button>
    <p>Pick a size!</p>
    <Button 
      @click="setSize('')"
      :variant="modalSize === '' ? 'primary': 'grey'"
    >
      Default
    </Button>
    <Button 
      @click="setSize('small')"
      :variant="modalSize === 'small' ? 'primary': 'grey'"
    >
      Small
    </Button>
    <Button 
      @click="setSize('medium')"
      :variant="modalSize === 'medium' ? 'primary': 'grey'"  
    >
      Medium
    </Button>
    <Button
      @click="setSize('large')"
      :variant="modalSize === 'large' ? 'primary': 'grey'"
    >
      Large
    </Button>
  </div>
  
  <Modal
    :visible="showModal"
    :max-width="modalSize"
    @close-modal="handleCloseModal"
  >
    Hey there! Click outside this box to close me!
  </Modal>
</template>

<script>
import { ref } from "vue";

import Button from "../Button/Button.vue";
import Modal from "./Modal.vue";

export default {
  name: "ModalSizes",
  components: {
    Button,
    Modal,
  },
  setup() {
    const showModal = ref(false);
    const modalSize = ref('');
    const setSize = (value) => {
      modalSize.value = value;
    }
    const handleCloseModal = () => {
      showModal.value = false;
    };
    const handleOpenModal = () => {
      showModal.value = true;
    }

    return {
      showModal,
      modalSize,
      setSize,
      handleCloseModal,
      handleOpenModal,
    }
  }
}
</script>
