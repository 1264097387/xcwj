<template>
  <div class="btnBox">
    <div class="btn"
         @click="TextClick">
      {{ BtnText }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['BtnText'],
  methods: {
    TextClick () {
      this.$emit('TextClick')
    },
  },
}
</script>

<style scoped lang="less">
.btnBox {
  padding: 5.556vw 2.778vw;
}
.btn {
  height: 12.778vw;
  background-color: #f33564;
  border-radius: 6.389vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5vw;
  box-shadow: 0 0 12px -5px #aaa;
}
</style>
