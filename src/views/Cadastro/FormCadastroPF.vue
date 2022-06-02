<template>
  <div class="form">
    <div class="head">
      <img src="../../assets/images/Logo.png" alt="logo-inwork" />
      <p>
        Para darmos início ao seu cadastro, por favor nos informe alguns de seus
        dados
      </p>
    </div>
    <form @submit.prevent="registerPF">
      <div class="personal-information">
        <h3>Informações pessoais</h3>
        <div class="email">
          <p>Email<a style="color: red">*</a></p>
          <input type="text" v-model="email" required />
        </div>
        <div class="cpf">
          <p>CPF<a style="color: red">*</a></p>
          <input type="text" v-model="cpf" required />
        </div>
        <div class="full-name">
          <p>Nome completo<a style="color: red">*</a></p>
          <input type="text" v-model="fullname" required />
        </div>
        <div class="phone">
          <p>Celular<a style="color: red">*</a></p>
          <input type="text" v-model="phone" required />
        </div>
      </div>
      <div class="create-login">
        <h3>Crie seu login</h3>
        <div class="username">
          <p id="username">Nome de usuário<a style="color: red">*</a></p>
          <input type="text" v-model="username" required />
        </div>
        <div class="password">
          <p id="password">Senha<a style="color: red">*</a></p>
          <input type="password" v-model="password" required />
        </div>
        <div class="footer">
          <button type="submit">Finalizar</button>
          <p class="or">ou</p>
          <router-link to="/login">
            <p>Cancelar</p>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FormCadastroPF",

  data() {
    return {
      email: "",
      cpf: "",
      fullname: "",
      cellphone: "",
      username: "",
      password: "",
    };
  },
  methods: {
    async registerPF() {
      await axios
        .post("http://localhost:3000/users-pf", {
          email: this.email,
          cpf: this.cpf,
          fullname: this.fullname,
          cellphone: this.cellphone,
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          this.$router.push("/home-pf");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.form {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .head {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 515px;

    p {
      font-size: 24px;
      font-weight: 600;
      text-align: center;
    }
  }

  form {
    display: flex;
    width: 1000px;
    justify-content: space-between;

    h3 {
      text-align: center;
      font-size: 20px;
    }

    .personal-information {
      p {
        margin: 25px 0 6px 0;
      }
    }

    .create-login {
      #username {
        margin: 0 0 6px 0;
      }

      #password {
        margin: 25px 0 6px 0;
      }

      .footer {
        .or {
          font-size: 26px;
          font-weight: 600;
          color: #a7a7a7;
          text-decoration: none;
          margin: 20px 0;
          cursor: inherit;
        }
        p {
          text-align: center;
          text-decoration-line: underline;
          font-size: 26px;
          margin: 0;
          cursor: pointer;
        }
      }
    }

    .personal-information {
      .email,
      .cpf,
      .full-name,
      .phone {
        input {
          width: 375px;
          height: 50px;
          border-radius: 10px;
          border: 0.1px solid #80808055;
          text-indent: 17px;
        }
      }
    }
    .create-login {
      display: flex;
      flex-direction: column;
      align-items: center;

      .username,
      .password {
        input {
          width: 375px;
          height: 50px;
          border-radius: 10px;
          border: 0.1px solid #80808055;
          text-indent: 17px;
        }
      }
    }
  }

  button {
    height: 50px;
    width: 250px;
    font-size: 32px;
    font-weight: 500;
    margin: 55px 0 0 0;
  }
}
</style>
