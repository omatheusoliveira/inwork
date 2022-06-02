<template>
    <div class="vaga-item-content">
      <LoadingAnimation v-if="isLoading" />
      <div class="card" v-for="vacancies in vacancy" :key="vacancies.id">
        <div class="content">
          <div class="header">
            <div class="title">
              <h1>{{ vacancies.title }}</h1>
            </div>
            <div class="created">
              <p>{{ vacancies.created_at }}</p>
            </div>
          </div>
          <div class="body">
            <div class="wage">
              <p>Remuneração de: R$ {{ vacancies.remuneration }}</p>
            </div>
            <div class="description">
              <p>
                {{ vacancies.description }}
              </p>
            </div>
          </div>
          <div class="footer">
            <div class="company">
              <p>
                Empresa: <strong> {{ vacancies.company }} </strong>
              </p>
            </div>
            <div class="contact">
              <h2 @click="alertFuncao">
                Entrar em contato
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";
import LoadingAnimation from "./LoadingAnimation.vue";

export default{
  name: "VagaItem",
  components: {
    LoadingAnimation,
  },

  data() {
    return {
      vacancy: [],
      isLoading: false,
    };
  },
  created() {
    this.getVacancy();
  },
  methods: {
    alertFuncao() {
      alert("Está função ainda não está disponivel no sistema");
    },

    getVacancy() {
      this.isLoading = true;
      setTimeout(() => {
        axios.get("http://localhost:3000/vacancy").then((response) => {
          this.vacancy = response.data;
          this.isLoading = false;
        });
      }, 800);
    },
  },
};
</script>

<style lang="less" scoped>
.vaga-item-content {
  .card {
    width: 100%;
    height: 302px;
    background: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
    margin-bottom: 60px;
  }

  .content {
    padding: 20px 24px 40px 24px;

    .header {
      display: flex;
      text-decoration: underline;
      align-items: center;
      justify-content: space-between;

      .title {
        h1 {
          margin: 0;
          font-weight: 500;
        }
      }
      .created {
        p {
          margin: 0;
          font-size: 24px;
          font-weight: 500;
        }
      }
    }

    .body {
      width: 530px;

      .wage {
        margin: 17px 0;
      }

      .description {
        font-weight: 500;
        font-size: 18px;
        margin: 17px 0 29px 0;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;

      .company {
        p {
          margin: 0;
          font-size: 18px;
        }
      }
      .contact {
        h2 {
          margin: 0;
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
