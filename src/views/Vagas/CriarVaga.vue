<template>
  <div class="editar-vaga">
    <MenuLateral />
    <div class="container">
      <div class="header">
        <h2>Editando vaga</h2>
      </div>
      <div class="content">
        <CreateVaga />
      </div>
    </div>
  </div>
</template>

<script>
import MenuLateral from "../../components/MenuLateral.vue";
import CreateVaga from "../../components/CreateVaga.vue";

export default {
  name: "EditarVagas",
  components: {
    CreateVaga,
    MenuLateral,
  },
};
</script>

<style lang="less" scoped>
.editar-vaga {
  display: flex;

  .container {
    padding: 94px 150px 0 150px;
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
    }
  }
}
</style>
