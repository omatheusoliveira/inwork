<template>
  <div class="home">
    <img src="../assets/images/Logo.png" alt="logo" class="logo" />
    <h1>Bem-vindo,</h1>
    <h3>Por favor, faça login.</h3>
    <div class="user">
      <p>Usuário<a style="color: red">*</a></p>
      <input type="text" placeholder="Digite seu usuário" />
    </div>
    <div class="password">
      <p>Senha<a style="color: red">*</a></p>
      <input type="text" placeholder="Digite sua senha" />
    </div>
    <button type="submit">Entrar</button>
    <p>Criar conta como:</p>
    <div class="footer">
      <router-link to="/cadastro-pf"> 
        <a class="pf">Pessoa Fisíca</a>
      </router-link>
      <p>ou</p>
      <router-link to="/cadastro-pj">
        <a class="pj">Pessoa Jurídica</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginView",
};
</script>

<style lang="less" scoped>
.home {
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin: 0 0 25px 0;
  }

  h1 {
    font-size: 64px;
    font-weight: 500;
    margin: 30px 0 0 0;
  }

  h3 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
  }

  .user {
    p {
      margin: 50px 0 6px 0;
    }
  }

  .password {
    p {
      margin: 42px 0 6px 0;
    }
  }

  .user,
  .password {
    input {
      width: 375px;
      height: 50px;
      border-radius: 10px;
      border: 0.1px solid #80808055;
      text-indent: 17px;
    }
    p {
      color: @text-color;
    }
  }

  button {
    width: 375px;
    height: 50px;
    margin: 40px 0 30px 0;
    font-weight: 500;
    font-size: 36px;
  }

  .footer {
    width: 375px;
    display: flex;
    justify-content: space-between;
    color: @text-color;

    a {
      cursor: pointer;
      text-decoration-line: underline;
    }

    p {
      margin: 0;
    }
  }
}
</style>
