<template>
  <div class="NavTop">
    <div>
      <slot name='left'></slot>
    </div>
    <div>
      <slot name="img"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="less">
.NavTop {
  height: 12.889vw;
  background-color: white;
  display: flex;

  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
  div:nth-child(2) {
    flex: 6;
    /* background: url('../assets/icon_w8tkk6teaws/logo1.png') no-repeat 5%; */
  }
}
</style>
