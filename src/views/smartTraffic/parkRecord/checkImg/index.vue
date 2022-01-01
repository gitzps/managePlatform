<template>
  <div>
    <img src="#" />
  </div>
</template>

<script>
export default {
  name: "checkImg",
  props: {
    imgUrl: {
      required: false,
      type: String,
      default: () => {
        return "";
      },
    },
  },
};
</script>

<style lang="less" scoped>
</style>
