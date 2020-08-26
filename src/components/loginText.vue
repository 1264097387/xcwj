<template>
  <div>
    <mt-field v-model="content"
              :placeholder="placeholder"
              :label="label"
              :type="type"
              class="input" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: '',
    }
  },
  props: ['label', 'placeholder', 'type'],
  watch: {
    content () {
      this.$emit('contentWatch', this.content)
    },
  },
}
</script>

<style>
.input {
  box-shadow: 0 0 3.333vw -1.389vw #aaa;
  margin-top: 2.778vw;
  border-radius: 1.389vw;
}
</style>
