<template>
  <footer>
    <div class="container-footer">
      <div class="logos">
        <a href="https://www.univ-catholille.fr/">
          <img
            src="../assets/lacatho.svg"
            alt="Université catholique de Lille"
          />
        </a>
        <a href="https://www.all-lacatho.fr/fr/">
          <img src="../assets/all.png" alt="All la catho" />
        </a>
      </div>
      <p class="text">
        Fédération des étudiants de l’Université Catholique de Lille<br />
        70 Boulevard Vauban, Lille 59800
      </p>
      <div class="social">
        <div class="icons">
          <a href="https://www.facebook.com/fede.lille.catho/" target="_blank">
            <img src="../assets/facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/fede_lille/" target="_blank">
            <img src="../assets/instagram.svg" alt="instagram" />
          </a>
          <a href="https://fr.linkedin.com/company/fedeucl" target="_blank">
            <img src="../assets/linkedin.svg" alt="linkedin" />
          </a>
        </div>
        <p>Suivez-nous</p>
      </div>
    </div>
    <NuxtLink to="/mentions-legales">Mentions légales</NuxtLink>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--secondary);
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 750px) {
    padding: 20px 0;
  }
  .container-footer {
    max-width: 1500px;
    margin: 0 20px;
    @media screen and (min-width: 1500px) {
      margin: 0 auto;
    }
    display: flex;
    align-items: center;
    width: calc(100% - 40px);
    justify-content: space-between;
    .logos {
      display: flex;
      align-items: center;
      justify-content: space-between;
      a:not(:last-child) {
        margin-right: 20px;
      }
      img {
        max-width: 120px;
        max-height: 120px;
      }
    }
    .text {
      margin: 0 10px;
    }
    .social {
      .icons {
        display: flex;
        justify-content: space-between;
        img {
          max-width: 80%;
        }
      }
    }
    @media screen and (max-width: 750px) {
      flex-direction: column;
      .logos,
      .text,
      .social {
        margin-bottom: 40px;
      }
    }
  }
}
// .logos {
//   margin: auto;
//   // :not(:last-child) {
//   // 	margin-right: 20px;
//   // }
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   max-width: 300px;
//   width: 100%;
//   img {
//     max-width: 120px;
//     max-height: 120px;
//     &:not(:last-child) {
//       margin-right: 40px;
//     }
//   }
//   @media screen and (max-width: 750px) {
//     justify-content: space-evenly;
//     img {
//       max-width: 100px;
//     }
//   }
// }
// .text {
//   padding: 0 30px;
//   margin: auto 0;
//   @media screen and (min-width: 1000px) {
//     // min-width: 500px;
//   }
// }
// .social {
//   margin: auto;
//   min-width: 150px;
//   a:not(:last-child) {
//     margin-right: 10px;
//   }
//   img {
//     height: 40px;
//   }
//   p {
//     margin-top: 10px;
//   }
// }
// .container-footer {
//   grid-template-columns: 25% 50% 25%;
//   margin: 0 auto;
//   width: 100%;
//   height: 100%;
//   // display: flex;
//   // align-items: center;
//   // justify-content: space-between;
//   display: grid;
//   padding: 22px 40px;
//   text-align: center;
//   max-width: 2000px;
//   // margin: 0 auto;
//   .logos,
//   .text,
//   .social {
//     max-height: 144px;
//     margin: 0;
//     align-items: center;
//     justify-content: center;
//   }
//   @media screen and (max-width: 750px) {
//     padding: 0;
//     grid-template-columns: repeat(1, minmax(0, 1fr));
//     div {
//       margin-bottom: 20px;
//     }
//   }
// }
</style>
