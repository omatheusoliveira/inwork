<template>
  <div class="form">
    <div class="head">
      <img src="../../assets/images/Logo.png" alt="logo-inwork" />
      <p>
        Para darmos início ao seu cadastro, por favor nos informe alguns de seus
        dados
      </p>
    </div>
    <form>
      <div class="company-information">
        <h3>Informações da empresa</h3>
        <div class="razao-social">
          <p>Razão social<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="logradouro">
          <p>Logradouro<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="municipio">
          <p>Municípo/UF<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="cnpj">
          <p>CNPJ<a style="color: red">*</a></p>
          <input type="text" />
        </div>
      </div>
      <div class="another-information">
        <div class="numero">
          <p>Número<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="cep">
          <p>CEP<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="bairro">
          <p>Bairro<a style="color: red">*</a></p>
          <input type="text" />
        </div>
      </div>
      <div class="create-login">
        <h3>Crie seu login</h3>
        <div class="username">
          <p id="username">Nome de usuário<a style="color: red">*</a></p>
          <input type="text" />
        </div>
        <div class="password">
          <p id="password">Senha<a style="color: red">*</a></p>
          <input type="password" />
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
export default {
  name: "FormCadastroPJ",
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
    width: 70%;
    justify-content: space-between;
    max-height: 520px;
    h3 {
      text-align: center;
      font-size: 20px;
    }
    
    .another-information {
      margin-top: 50px;
    }

    .company-information,
    .another-information {
      p {
        margin: 25px 0 6px 0;
      }
    }

    .create-login {
      #username {
        margin: 5px 0 6px 0;
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

    .company-information {
      .razao-social,
      .logradouro,
      .municipio,
      .cnpj {
        input {
          width: 375px;
          height: 50px;
          border-radius: 10px;
          border: 0.1px solid #80808055;
          text-indent: 17px;
        }
      }
    }

    .another-information {
      .numero,
      .cep,
      .bairro {
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
