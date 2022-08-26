<template>
  <div class="container">
    <div class="cu-center-all">
      <Tooltip>
        <Button>Simple</Button>
        <TooltipContent> This is a simple tooltip </TooltipContent>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";
import TooltipContent from "./TooltipContent.vue";
import Button from "../Button/Button.vue";

export default {
  name: "TooltipSimple",
  components: {
    Tooltip,
    TooltipContent,
    Button,
  },
};
</script>

<style scoped>
.container {
  margin: 75px 0;
}
</style>
