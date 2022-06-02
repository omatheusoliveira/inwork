<template>
  <div class="loading"></div>
</template>

<script>
export default {
    
};
</script>

<style lang="less" scoped>
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid grey;
  border-top-color: whitesmoke;
  animation: spin 1s linear infinite;
  margin: 300px auto;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
