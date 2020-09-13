<template>
  <div>
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-container>
        <b-tab title="Overview" active>
          <b-row class="beneficiary">
            <b-col cols="12" md="8">
              <span class="personal">Personal Details</span>
              <b-card>
                <b-row>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Surname</p>
                    <p class="text">Oluchukwu</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">First Name</p>
                    <p class="text">Grace</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Other Names</p>
                    <p class="text">Margaret Elizabeth</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Date Of Birth</p>
                    <p class="text">01/01/1994</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Email Address</p>
                    <p class="text">Oluchukewgr@gmail.com</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Phone Number</p>
                    <p class="text">08117866543</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">State Of Origin</p>
                    <p class="text">Abia State</p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">Local Government Area Of Origin</p>
                    <p class="text">Omueri LGA</p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <span class="hidden">Personal Details</span>
              <b-card class="text-center">
                  <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
                  <div class="text-center name">Oluchukwu Grace</div>
                  <div class="text-center mail">Oluchukewgr@gmail.com</div>
                  <div>&nbsp;</div>
                  <div class="text-center ben rectangle-1">
                      Beneficiary
                  </div>
                  <div>&nbsp;</div>
                  <div class="text-center">N-Power Batch C</div>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Residential Details</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">Residential Address</p>
                    <p class="text">18 Salua Street, off anthony bus stop, Ikeja, Lagos State</p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">State Of Residence</p>
                    <p class="text">Osun State</p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">Local Government Area Of Residence</p>
                    <p class="text">Irewole LGA</p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Educational Background</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">Highest Level Of Education</p>
                    <p class="text">Bachelor's Degree</p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">Institution</p>
                    <p class="text">University Of Benin</p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">Year Of Graduation</p>
                    <p class="text">2016</p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-row>&nbsp;</b-row>
          </b-row>
        </b-tab>
      </b-container>
      <b-tab title="Applications">
        <Applications />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import Applications from '@/components/Applications'

export default {
  components: { Applications },
  data () {
    return {
      items: [],
      fields: [
        'first_name',
        'surname',
        'date',
        'phone_number',
        'residential_address'
      ]
    }
  },
  computed: {
    userDetails () {
      const stringifiedgUser = localStorage.getItem('nasims-user') || sessionStorage.getItem('nasims-user')
      if (stringifiedgUser) {
        return JSON.parse(stringifiedgUser)
      }
      return null
    }
  },
  created () {
    if (this.userDetails === null) {
      this.$router.push('/login')
    }
  },
  mounted () {
    this.$axios.get('https://guarded-cliffs-51823.herokuapp.com/sample/fetch/Applicants')
      .then((response) => {
        console.log(response.data.data)
        this.items = response.data.data
      })
    console.log(this.items)
  }
}
</script>

<style lang="scss" scoped>
.beneficiary{
  background-color: #F7F7F7;
  padding: 10px 0;
  @media screen and (min-width: 992px) {
    padding: 50px;
  }
}

.title,
.text {
  margin: 0;
}

.title {
  opacity: 0.8;
  margin: 5px 0 2px;
}

.text {
  font-weight: 600;
  opacity: 0.8;
}

.tabs::v-deep {
  border: 1px solid rgba($color: #000000, $alpha: 0.1);
  max-width: 1200px;
  margin: 50px auto;
  padding: 10px 0;
  a {
    padding-bottom: 15px;
    color: #444;
  }

  .tab--active {
    color: #288855;
    position: relative;
    border: none;
    display: block;

    &:after {
      content: '';
      width: 100%;
      height: 5px;
      border-radius: 10px 10px 0 0;
      background-color: #288855;
      position: absolute;
      bottom: -2px;
      left: 0;
    }
  }
}
</style>
