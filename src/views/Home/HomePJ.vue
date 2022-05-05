<template>
  <div class="homepf">
    <MenuLateral />
    <div class="container">
      <div class="header">
        <h2>Vagas para Marília e região</h2>
        <input type="text" placeholder="Pesquisar por vagas" />
      </div>
      <div class="new-job">
        <img src="../../assets/icons/icon-add.png" alt="icon-add" />
        <a>Nova vaga</a>
      </div>
      <div class="content">
        <VagaItemPJ />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLateral from "../../components/MenuLateral.vue";
import VagaItemPJ from "../../components/VagaItemPJ.vue";

export default {
  name: "HomePJ",
  components: {
    MenuLateral,
    VagaItemPJ,
  },
};
</script>

<style lang="less" scoped>
.homepf {
  display: flex;

  .container {
    padding: 20px 150px 20px 150px;
    width: calc(100vw - 253px);

    .new-job{
        display: flex;
        align-items: center;
        margin-bottom: 12px;
        cursor: pointer;
        width: fit-content;
        a{
            font-size: 24px;
            font-weight: 500;
            margin-left: 18px;
        }
    }

    .header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 15px;

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
