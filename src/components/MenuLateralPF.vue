<template>
  <div class="menu-lateral">
    <div class="logo">
      <img src="../assets/images/Logo.png" alt="logo" />
    </div>
    <div class="buttons">
      <div class="vagas">
        <img src="../assets/icons/icon-vaga.png" alt="iconvaga" />
        <router-link to="/home-pf">
          <label style="text-decoration: underline">Vagas</label>
        </router-link>
      </div>
      <div class="profile">
        <img src="../assets/icons/icon-user.png" alt="iconprofile" />
        <router-link to="/my-profile-pf">
          <label>Perfil</label>
        </router-link>
      </div>
    </div>
    <div class="logout">
      <img src="../assets/icons/icon-logout.png" alt="iconlogout" />
      <label>Sair</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuLateral",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.menu-lateral {
  width: 253px;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 60px 0;

  label {
    font-size: 24px;
    font-weight: 500;
    color: @text-color-menu-lateral;
  }

  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;

    .profile{
      img{
        margin-left: 3px;
      }
      label{
        margin-right: 18px;
      }
    }
  }

  .logout{
    label{
      margin-right: 31px;
    }
  }

  .vagas, .profile, .logout{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 150px;
  }

  .logo {
    img {
      width: 215px;
      height: 58px;
    }
  }
  .buttons, .logout, label{
    cursor: pointer;
  }
}
</style>
