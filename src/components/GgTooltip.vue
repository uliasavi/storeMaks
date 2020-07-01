<template>
    <div class="gg-tooltip">
        <div
          class="slot_area"
          @mouseenter="vall"
          @mouseleave="vallw"
        >
          <slot></slot>
        </div>
        <div class="tooltip" :class="{rotateTre: isRotate}" :style="{ display: classTool}">
            <div class="tooltip_tool" :class="{ShadowChange: isRotate}">
                <div class="textTooltip">{{text}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'GgTooltip',
  props: {
    text: {
      type: String,
      default: 'Исключить участника'
    },
    ChangePositionToRight: {
      type: Boolean
    }
  },
  data () {
    return {
      isRotate: false,
      classTool: 'none'
    }
  },
  methods: {
    vall () {
      this.classTool = 'block'
      if (this.ChangePositionToRight === true) {
        this.isRotate = true
      }
    },
    vallw () {
      this.classTool = 'none'
      this.isRotate = false
    }
  }
}
</script>
<style lang="scss">
.gg-tooltip{
  position: relative;
}
.tooltip{
    position: absolute;
    top: 50%;
    left: 100%;
    margin: 0 0.5rem;
    transform: translateY(-50%);
    user-select: none;
    width: 140px;
    z-index: 500;
}
.tooltip.rotateTre{
  left: 0;
  transform: translate(-110%, -50%);
}
.tooltip_tool{
    box-sizing: border-box;
    display: flex;
    align-items: center;
    text-shadow: 0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16);
    color: #000;
    font-size: 12px;
    line-height: 20px;
    letter-spacing: 0.85;
    background: #FFFFFF;
    box-shadow: 2px 1px 2px rgba(8, 35, 48, 0.24), 2px 2px 6px rgba(8, 35, 48, 0.16);
}
.ShadowChange{
    box-shadow: -2px 1px 2px rgba(8, 35, 48, 0.24), -2px 2px 6px rgba(8, 35, 48, 0.16);
}
.tooltip:before{
    position: absolute;
    top: 3px;
    left: -7px;
    content: '';
    background: #fff;
    width: 14px;
    height: 14px;
    box-shadow: 2px 1px 2px rgba(8, 35, 48, 0.24), 2px 2px 6px rgba(8, 35, 48, 0.16);
    z-index: -1;
    transform: rotate(45deg);
  }
.tooltip.rotateTre:before{
    display: none;
}
.tooltip.rotateTre:after{
    position: absolute;
    top: 3px;
    right:-7px;
    content: '';
    background: #fff;
    width: 14px;
    height: 14px;
    box-shadow: 0px 1px 2px rgba(8, 35, 48, 0.24), 0px 2px 6px rgba(8, 35, 48, 0.16);
    z-index: -1;
    transform: rotate(45deg);
    }
</style>
