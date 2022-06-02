<template>
  <div class="homepf">
    <div class="menu-lateral">
      <MenuLateralPF />
    </div>
    <div class="container">
      <div class="header">
        <h2>Vagas para Marília e região</h2>
        <input type="text" placeholder="Pesquisar por vagas" readonly @click="alertFuncao"/>
      </div>
      <div class="content">
        <VagaItemPF />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLateralPF from "../../components/MenuLateralPF.vue";
import VagaItemPF from "../../components/VagaItemPF.vue";

export default {
  name: "HomePF",
  components: {
    MenuLateralPF,
    VagaItemPF,
  },
  
  methods: {
    alertFuncao() {
      alert('Está função ainda não está disponivel no sistema');
    },
  },
};
</script>

<style lang="less" scoped>
.homepf {
  display: flex;
  
  .menu-lateral {
    position: fixed;
  }

  .container {
    padding: 40px 150px 20px 400px;
    width: 100vw;
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
