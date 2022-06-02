<template>
  <div class="profile-pj">
    <MenuLateralPJ />
    <div class="container">
      <div class="header">
        <img
          src="../../assets/icons/icon-user-profile.png"
          alt="icon-user-profile"
        />
        <div class="company-name">
          <h1>Olá,</h1>
          <h1 style="text-decoration: underline">{{ users.companyname }}.</h1>
        </div>
      </div>
      <form @submit.prevent="updateUser">
        <div class="company-information">
          <div class="razao-social">
            <p>Razão social</p>
            <input type="text" v-model="users.companyname"/>
          </div>
          <div class="logradouro">
            <p>Logradouro</p>
            <input type="text" v-model="users.address"/>
          </div>
          <div class="municipio">
            <p>Municípo/UF</p>
            <input type="text" v-model="users.city"/>
          </div>
          <div class="cnpj">
            <p>CNPJ</p>
            <input type="text" v-model="users.cnpj"/>
          </div>
        </div>
        <div class="another-information">
          <div class="numero">
            <p>Número</p>
            <input type="text" v-model="users.number"/>
          </div>
          <div class="cep">
            <p>CEP</p>
            <input type="text" v-model="users.cep"/>
          </div>
          <div class="bairro">
            <p>Bairro</p>
            <input type="text" v-model="users.district"/>
          </div>
          <div class="footer">
            <button type="submit">Salvar</button>
            <p class="or">ou</p>
            <router-link to="/home-pf">
              <p>Cancelar</p>
            </router-link>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MenuLateralPJ from "../../components/MenuLateralPJ.vue";
import axios from 'axios';

export default {
  name: "ProfilePJ",
  components: {
    MenuLateralPJ,
  },

  data() {
    return {
      users: [],
    };
  },

  mounted() {
    axios.get("http://localhost:3000/users-pj")
      .then((response) => {
        this.users = response.data[0];
        console.log(response)
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    async updateUser() {
      await axios
        .put(`http://localhost:3000/users-pj/${this.users.id}`,{
          companyname: this.users.companyname,
          address: this.users.address,
          city: this.users.city,
          cnpj: this.users.cnpj,
          number: this.users.number,
          cep: this.users.cep,
          district: this.users.district,
        })
        .then((response) => {
          console.log(response);
          alert('Dados atualizados com sucesso!');	
          this.$router.push("/home-pj");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="less" scoped>
.profile-pj {
  display: flex;

  .container {
    padding: 60px 0;
    p {
      font-size: 26px;
      font-weight: 400;
    }
    .header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: calc(100vw - 253px);

      img {
        height: 120px;
        width: 120px;
      }

      .company-name {
        display: flex;
        margin-bottom: 20px;

        h1:first-child {
          margin-right: 8px;
        }
      }
    }

    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      max-height: 520px;

      p{
        margin: 0 0 6px 0;
      }

      .company-information,
      .another-information {
        input {
          width: 425px;
          height: 50px;
          border-radius: 10px;
          border: 0.1px solid #80808055;
          text-indent: 17px;
          font-size: 22px;
        }
      }

      .company-information{
        .logradouro,
        .municipio,
        .cnpj{
          margin-top: 21px;
        }
      }
      .another-information{
        .cep,
        .bairro{
          margin-top: 21px;
        }
      }

      .another-information {
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 63px;
          .or {
            font-size: 26px;
            font-weight: 600;
            color: #a7a7a7;
            text-decoration: none;
            cursor: inherit;
          }
          p {
            text-align: center;
            text-decoration-line: underline;
            font-size: 26px;
            margin: 0;
            cursor: pointer;
          }
          button {
            height: 50px;
            width: 230px;
            font-size: 32px;
            font-weight: 500;
          }
        }
      }
    }
  }
}
</style>
