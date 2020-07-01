<template>
<div class="container_tooltip">
  <div
    class="tooltil_area"
    v-for="item in 20"
    :key="item.index"
  >
    <gg-tooltip
      :text="textTool"
      :ChangePositionToRight="ChangePositionToRight"
    >
    <div class="block"></div>
    </gg-tooltip>
  </div>
</div>

</template>
<script>
import GgTooltip from './../components/GgTooltip'
export default {
  name: 'Tooltip',
  components: {
    GgTooltip
  },
  data () {
    return {
      textTool: 'Исключить участника',
      ChangePositionToRight: false
    }
  }
}
</script>
<style lang="scss">
.container_tooltip{
  display: flex;
  flex-wrap: wrap;
}
.block{
  width: 50px;
    height: 50px;
    margin: 10px;
    background-color: rgb(136, 136, 199);
}
</style>
