<template>
  <form @submit.prevent="createVacancy">
    <div class="header">
      <div class="title">
        <p>Título</p>
        <input type="text" v-model="title" required/>
      </div>
      <div class="wage">
        <p>Remuneração</p>
        <div>
          <input type="number" v-model="remuneration" required/>
        </div>
      </div>
    </div>
    <div class="body">
      <div class="email">
        <p>E-mail para contato</p>
        <input type="text" v-model="contact" required/>
      </div>
      <div class="description">
        <p>Descrição da vaga</p>
        <textarea v-model="description" maxlength="150" required></textarea>
      </div>
    </div>
    <div class="footer">
      <div class="save-cancel">
        <button>Salvar</button>
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
  name: "CreateVaga",

  data() {
    return {
      title: "",
      remuneration: "",
      contact: "",
      description: "",
      company: null,
    };
  },

  async mounted() {
    await this.getEmpresa();
  },

  methods: {
    async getEmpresa() {
      await axios
        .get("http://localhost:3000/users-pj")
        .then((response) => {
          this.company = response.data[0];
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async createVacancy() {
      await axios
        .post("http://localhost:3000/vacancy", {
          title: this.title,
          remuneration: this.remuneration,
          contact: this.contact,
          description: this.description,
          created_at: moment(new Date()).format("DD/MM/YYYY"),
          company: this.company.companyname,
        })
        .then((response) => {
          console.log(response);
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
        font-size: 24px;
        padding: 5px 0 0 17px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;

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
