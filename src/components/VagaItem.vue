<template>
  <div class="vaga-item-content">
    <div class="card">
      <div class="content">
        <div class="header">
          <div class="title">
            <h1>Auxiliar de produção - PCD</h1>
          </div>
          <div class="created">
            <p>23/04</p>
          </div>
        </div>
        <div class="body">
          <div class="wage">
            <p>De R$ 1.001,00 a R$ 2.000,00</p>
          </div>
          <div class="description">
            <p>
              Organização da produção (limpeza, organização de ferramentas).
              Ajuda com preenchimento de relatórios. Conferencia na produção.
            </p>
          </div>
        </div>
        <div class="footer">
          <div class="company">
            <p>Empresa: Marilan Alimentos S.A.</p>
          </div>
          <div class="contact">
            <h2>Entrar em contato</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <div class="header">
          <div class="title">
            <h1>Auxiliar de produção - PCD</h1>
          </div>
          <div class="created">
            <p>23/04</p>
          </div>
        </div>
        <div class="body">
          <div class="wage">
            <p>De R$ 1.001,00 a R$ 2.000,00</p>
          </div>
          <div class="description">
            <p>
              Organização da produção (limpeza, organização de ferramentas).
              Ajuda com preenchimento de relatórios. Conferencia na produção.
            </p>
          </div>
        </div>
        <div class="footer">
          <div class="company">
            <p>Empresa: Marilan Alimentos S.A.</p>
          </div>
          <div class="contact">
            <h2>Entrar em contato</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VagaItem",
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
  }
  .card:first-child {
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
