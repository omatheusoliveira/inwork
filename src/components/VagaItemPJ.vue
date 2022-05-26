<template>
  <div class="vaga-item-content">
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
            <p>{{ vacancies.remuneration }}</p>
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
          <div class="edit-vacancy">
            <img src="../assets/icons/icon-edit.png" alt="icon-edit" />
            <a>Editar vaga</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "VagaItemPJ",

  data() {
    return {
      vacancy: [],
    };
  },
  mounted() {
    axios.get('http://localhost:3000/vacancy')
      .then(response => {
        this.vacancy = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
}
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
      .edit-vacancy {
        cursor: pointer;
        img {
          width: 25px;
          height: 25px;
          margin-right: 12px;
        }
        a {
          font-size: 24px;
          font-weight: 500;
        }
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
