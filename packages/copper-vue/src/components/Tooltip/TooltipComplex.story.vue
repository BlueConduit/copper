<template>
  <div class="container">
    <div class="cu-center-all">
      <Tooltip>
        <Button>Complex</Button>
        <TooltipContent>
          <div>
            <label class="metric-label" for="public-kpi"
              ><strong>Verified:</strong></label
            >
            <span class="metric-value">5</span>
          </div>
          <div>
            <label class="metric-label" for="private-kpi"
              ><strong>Predicted:</strong></label
            >
            <span class="metric-value">17</span>
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  </div>
</template>

<script>
import Tooltip from "./Tooltip.vue";
import TooltipContent from "./TooltipContent.vue";
import Button from "../Button/Button.vue";

export default {
  name: "TooltipComplex",
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
