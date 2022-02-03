import ModalSimple from "./ModalSimple.story.vue";
import ModalBlocking from "./ModalBlocking.story.vue";
import ModalSizes from "./ModalSizes.story.vue";

export default {
  title: "Components/Modal",
};

export const SimpleModal = () => ModalSimple;
export const BlockingModal = () => ModalBlocking;
export const SizedModal = () => ModalSizes;
