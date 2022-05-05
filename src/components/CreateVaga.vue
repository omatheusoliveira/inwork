<template>
  <form>
    <div class="header">
      <div class="title">
        <p>Título</p>
        <input type="text" /> 
      </div>
      <div class="wage">
        <p>Remuneração</p>
        <div class="inputs">
          <input type="number" />
          <p>até</p>
          <input type="number" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="email">
        <p>E-mail para contato</p>
        <input type="text" />
      </div>
      <div class="description">
        <p>Descrição da vaga</p>
        <textarea></textarea>
      </div>
    </div>
    <div class="footer">
      <div class="save-cancel">
        <button>Salvar</button>
        <p>ou</p>
        <!-- AQUI TEM Q COLOCAR O ROUTER PARA HOME-PJ -->
        <router-link to="/home-pf">
          <p>Cancelar</p>
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "EditVaga",
};
</script>

<style lang="less" scoped>
form {
  width: 100%;
  height: 100%;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  padding: 20px 36px 40px 24px;
  p {
    font-size: 26px;
    font-weight: 400;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
      p {
        margin: 0 0 6px 0;
      }
      input {
        width: 375px;
        height: 50px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
      }
    }

    .wage {
      p {
        margin: 0 0 6px 0;
      }
      .inputs {
        display: flex;

        p {
          margin: 0 26px 0 26px;
        }

        input {
          width: 214px;
          height: 50px;
          border-radius: 10px;
          border: 0.1px solid #80808055;
          text-indent: 17px;
        }
      }
    }
  }

  .body {
    p {
      margin: 15px 0 6px 0;
    }
    .email {
      input {
        width: 375px;
        height: 50px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
      }
    }

    .description {
      textarea {
        width: 100%;
        height: 290px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
        resize: none;
        font-size: 22px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: end;

    .save-cancel {
        display: flex;
        align-items: center;
        width: 514px;
        justify-content: space-around;
      button {
        height: 50px;
        width: 250px;
        font-size: 32px;
        font-weight: 500;
      }
    }
  }
}
</style>
