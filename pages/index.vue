<template>
  <main>
    <Hero />
    <section id="about" class="about">
      <b-container>
        <b-row align-h="between" align-v="center">
          <b-col cols="12" md="6">
            <h2 class="font-weight-bold">
              About Us
            </h2>
            <p class="lighten my-5">
              In order to guarantee high-level political authority
              and coordination for all social protection programmes
              within Nigeria, the Federal Government of Nigeria has
              established the National Social Investment Office (NSIO).
              The social investment programmes draw from the social
              protection policy framework in a manner that ensures a
              life of dignity for those who have been constrained,
              in one way or another, from achieving their full potential.
            </p>
            <b-button href="#" class="btn--primary px-5 py-3">
              Read More
            </b-button>
          </b-col>
          <b-col cols="12" md="6">
            <div class="about__image ml-md-auto" />
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="programmes">
      <b-container>
        <h2 class="text-center font-weight-bold">
          Our Programmes
        </h2>
        <p class="text-center lighten mx-auto my-3">
          Our programmes are specifically designed to empower, train and
          uplift millions of abandoned Nigerians in every part of the country.
        </p>
        <b-row align-h="between">
          <b-col class="program px-0 m-4">
            <div class="program__image power" />
            <div class="p-4">
              <h3 class="program__name font-weight-bold">
                N-POWER
              </h3>
              <p class="lighten mt-3 mb-5">
                The N-Power Programme is a job creation and
                skills empowerment programme of the Federal
                Government of Nigeria. N-Power is designed
                to help young Nigerians acquire and develop
                life-long skills to become practical solution
                providers in their communities, enabling them
                to become innovative players in the domestic
                and global markets. The N-Power programme is
                for young Nigerians between the ages of 18 and 35
              </p>
              <b-button href="/apply" class="btn--primary px-5 py-3">
                Apply Now
              </b-button>
            </div>
          </b-col>
          <b-col class="program px-0 m-4">
            <div class="program__image trader" />
            <div class="p-4">
              <h3 class="program__name font-weight-bold">
                Trader Moni
              </h3>
              <p class="lighten mt-3 mb-5">
                TraderMoni is a loan programme of the Federal
                Government, created specifically for petty
                traders and artisans across Nigeria. It is a
                part of the Government Enterprise and Empowerment
                Programme (GEEP) scheme of the Federal Government,
                being executed by the Bank of Industry. With TraderMoni,
                you can receive interest-free loans starting from
                N10,000 and growing all the way to N100,000 as
                you pay back.
              </p>
              <b-button href="/apply" class="btn--primary px-5 py-3">
                Apply Now
              </b-button>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="partners mt-4">
      <b-container>
        <h2 class="text-center font-weight-bold">
          Our Partners
        </h2>
        <b-row class="my-5">
          <b-col class="partner">
            <img src="/bank.svg" alt>
          </b-col>
          <b-col class="partner">
            <img src="/cbn.svg" alt>
          </b-col>
          <b-col class="partner">
            <img src="/dangote.svg" alt>
          </b-col>
          <b-col class="partner">
            <img src="/nassarawa.svg" alt>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="news-section">
      <b-container>
        <h2 class="text-center font-weight-bold">
          Latest News
        </h2>
        <p
          class="text-center lighten mx-auto my-3"
        >
          Keep up with the latest updates about programmes and events
        </p>
        <b-row class="news my-5" align-h="between">
          <b-col class="item px-0">
            <div class="item__image" />
            <div class="p-4 pb-0">
              <h3 class="item__name font-weight-bold">
                Impacting Lives During A Global Pandemic
              </h3>
              <p class="item__date">
                June 25, 2020
              </p>
              <p class="lighten my-3">
                The N-Power Programme is a job creation
                and skills empowerment programme of the
                Federal Government of Nigeria…
              </p>
            </div>
            <div class="item__action">
              Read More
            </div>
          </b-col>
          <b-col class="item px-0">
            <div class="item__image" />
            <div class="p-4 pb-0">
              <h3 class="item__name font-weight-bold">
                Impacting Lives During A Global Pandemic
              </h3>
              <p class="item__date">
                June 25, 2020
              </p>
              <p class="lighten my-3">
                The N-Power Programme is a job creation
                and skills empowerment programme of the
                Federal Government of Nigeria…
              </p>
            </div>
            <div class="item__action">
              Read More
            </div>
          </b-col>
          <b-col class="item px-0">
            <div class="item__image" />
            <div class="p-4 pb-0">
              <h3 class="item__name font-weight-bold">
                Impacting Lives During A Global Pandemic
              </h3>
              <p class="item__date">
                June 25, 2020
              </p>
              <p class="lighten my-3">
                The N-Power Programme is a job creation
                and skills empowerment programme of the
                Federal Government of Nigeria…
              </p>
            </div>
            <div class="item__action">
              Read More
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="social">
      <div class="row justify-content-center align-items-center mx-0">
        <div class="container">
          <p>Be the first to know</p>
          <h3>
            Follow us on our social media platforms for
            all the latest updates and applications news
          </h3>
          <div class="row icons justify-content-between">
            <div class="icon">
              <i class="fa fa-twitter" />
            </div>
            <div class="icon">
              <i class="fa fa-facebook" />
            </div>
            <div class="icon">
              <i class="fa fa-instagram" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact" class="questions">
      <div class="row justify-content-center align-items-center mx-0">
        <div class="container">
          <h3>Got Questions?</h3>
          <p>
            For enquiries, complaints or requests,
            feel free to reach out to us.
          </p>
          <a class="btn btn--primary my-3" href="contact-us">Contact Us</a>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: { Hero }
}
</script>

<style lang="scss" scoped>
.c-row {
  display: flex;
  flex-flow: row wrap;
}

.about {
  height: 100vh;

  .container,
  .row {
    height: 100%;
  }

  &__image {
    position: relative;
    width: 450px;
    min-height: 500px;
    max-width: 100%;
    background-image: url('/about-img.png');
    background-repeat: no-repeat;

    @media screen and (max-width: 600px) {
      transform: scale(0.5);
    }
  }
}

.programmes {
  background-color: #f2fcf9;
  padding: 50px 0;

  .container > p {
    max-width: 700px;
    font-size: 1.1rem;
  }

  .program {
    box-shadow: 2px 2px 7px 2px rgba($color: #000000, $alpha: 0.1);
    border-radius: 4px;
    background-color: #fff;
    width: 500px;
    max-width: 100%;
    flex-grow: 0;
    flex-basis: unset;

    &__image {
      width: 100%;
      height: 300px;
      border-radius: 4px 4px 0 0;
      &.power {
        background: linear-gradient(
            rgba($color: #000000, $alpha: 0.2),
            rgba($color: #000000, $alpha: 0.2)
          ),
          url('/n-power.jpg');
      }
      &.trader {
        background: linear-gradient(
            rgba($color: #000000, $alpha: 0.2),
            rgba($color: #000000, $alpha: 0.2)
          ),
          url('/trader-moni.jpg');
      }
    }

    &__name {
      color: #f9ae00;
      font-size: 1.5rem;
    }
  }
}

.news-section {
  padding: 50px 0;

  .container > p {
    max-width: 700px;
    font-size: 1.1rem;
  }

  .item {
    box-shadow: 2px 2px 7px 2px rgba($color: #000000, $alpha: 0.1);
    border-radius: 4px;
    width: 360px;
    max-width: 100%;
    flex-grow: 0;
    flex-basis: unset;

    &__image {
      width: 100%;
      height: 180px;
      border-radius: 4px 4px 0 0;
      background: linear-gradient(
          rgba($color: #000000, $alpha: 0.2),
          rgba($color: #000000, $alpha: 0.2)
        ),
        url('https://source.unsplash.com/1600x900/?children');
    }

    &__name {
      font-size: 1.2rem;
    }

    .lighten {
      font-size: 0.9rem;
    }

    &__date {
      opacity: 0.6;
      font-size: 0.8rem;
      position: relative;
      &::after {
        content: '';
        width: 50px;
        height: 2px;
        background-color: #f9ae00;
        position: absolute;
        bottom: -5px;
        left: 0;
      }
    }

    &__action {
      padding: 15px 0;
      border-top: 1px solid rgba($color: #000000, $alpha: 0.1);
      text-align: center;
      color: #288855;
      text-transform: capitalize;
      font-size: 1.3rem;
    }
  }
}

.partners {
  padding: 50px 0;

  .partner {
    // border: 1px solid rgba($color: #000000, $alpha: 0.2);
  }
}

.social {
  background-color: #141414;
  .container {
    padding: 50px 0;
    max-width: 700px;
    text-align: center;
    color: #fff;

    p {
      opacity: 0.8;
    }

    .icons {
      max-width: 100px;
      margin: 30px auto;
    }
  }
}

.questions {
  .container {
    padding: 50px 0;
    max-width: 700px;
    text-align: center;

    p {
      opacity: 0.8;
    }

    a {
      width: 200px;
      max-width: 100%;
    }

    .icons {
      max-width: 100px;
      margin: 30px auto;
    }
  }
}
</style>
