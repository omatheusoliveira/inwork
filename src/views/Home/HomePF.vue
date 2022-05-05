<template>
  <div class="homepf">
    <MenuLateral />
    <div class="container">
      <div class="header">
        <h2>Vagas para Marília e região</h2>
        <input type="text" placeholder="Pesquisar por vagas" />
      </div>
      <div class="content">
          <VagaItem />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLateral from "../../components/MenuLateral.vue";
import VagaItem from "../../components/VagaItem.vue";

export default {
  name: "HomePF",
  components: {
    MenuLateral,
    VagaItem,
  },
};
</script>

<style lang="less" scoped>
.homepf {
  display: flex;

  .container {
    padding: 20px 150px 20px 150px;
    width: calc(100vw - 253px);


    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 65px;

      h2 {
        margin: 0;
        font-weight: 500;
      }

      input {
        width: 250px;
        height: 50px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
      }
      input::-webkit-input-placeholder {
        color: #494949;
        font-weight: 400;
        font-size: 16px;
      }
    }
  }
}
</style>
