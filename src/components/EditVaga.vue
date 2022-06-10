<template>
  <form>
    <div class="header">
      <div class="title">
        <p>Título</p>
        <input type="text" v-model="vacancy.title" />
      </div>
      <div class="wage">
        <p>Remuneração</p>
        <div class="inputs">
          <input type="number" v-model="vacancy.remuneration" />
        </div>
      </div>
    </div>
    <div class="body">
      <div class="email">
        <p>E-mail para contato</p>
        <input type="text" v-model="vacancy.contact" />
      </div>
      <div class="description">
        <p>Descrição da vaga</p>
        <textarea v-model="vacancy.description"></textarea>
      </div>
    </div>
    <div class="footer">
      <div class="delete-vaga">
        <img src="../assets/icons/icon-trash.png" alt="icon-trash" />
        <p @click="alertFuncao()">Excluir vaga</p>
      </div>
      <div class="save-cancel">
        <button @click="updateVacancy()">Salvar</button>
        <p>ou</p>
        <router-link to="/home-pj">
          <p>Cancelar</p>
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "EditVaga",

  data() {
    return {
      vacancy: {},
    };
  },

  methods: {
    async updateVacancy() {
      await axios
        .put(`http://localhost:3000/vacancy/${this.$route.params.id}`,{
          title: this.vacancy.title,
          remuneration: this.vacancy.remuneration,
          contact: this.vacancy.contact,
          description: this.vacancy.description,
          created_at:  moment(new Date()).format("DD/MM/YYYY"),
          company: this.vacancy.company,
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

  mounted() {
    axios
      .get(`http://localhost:3000/vacancy/${this.$route.params.id}`)
      .then((response) => {
        this.vacancy = response.data;
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="less" scoped>
form {
  width: 100%;
  height: 570px;
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
    width: 70%;

    .title,
    .wage {
      p {
        margin: 0 0 6px 0;
      }
      input {
        width: 300px;
        height: 50px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
      }
      input {
        font-size: 24px;
      }
    }
  }

  .body {
    p {
      margin: 15px 0 6px 0;
    }
    .email {
      input {
        width: 300px;
        height: 50px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        text-indent: 17px;
      }
      input[type="text"] {
        font-size: 24px;
      }
    }

    .description {
      textarea {
        width: 100%;
        height: 180px;
        border-radius: 10px;
        border: 0.1px solid #80808055;
        resize: none;
        font-size: 22px;
        padding: 5px 0 0 17px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .delete-vaga {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 30px;
        height: 38px;
      }

      p {
        margin: 8px 0 0 12px;
      }
    }

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
