<template>
  <div class="user">
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
                    <p class="title">
                      Surname
                    </p>
                    <p class="text">
                      {{ userDetails.surname }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      First Name
                    </p>
                    <p class="text">
                      {{ userDetails.first_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Other Names
                    </p>
                    <p class="text">
                      {{ userDetails.other_name }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Date Of Birth
                    </p>
                    <p class="text">
                      {{ userDetails.date }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Email Address
                    </p>
                    <p class="text">
                      {{ userDetails.email }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Phone Number
                    </p>
                    <p class="text">
                      {{ userDetails.phone_number }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      State Of Origin
                    </p>
                    <p class="text">
                      {{ userDetails.state_of_origin }}
                    </p>
                  </b-col>
                  <b-col class="my-2" cols="12" md="6">
                    <p class="title">
                      Local Government Area Of Origin
                    </p>
                    <p class="text">
                      {{ userDetails.lga }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col cols="12" md="4">
              <span class="hidden">Personal Details</span>
              <b-card class="text-center">
                <b-avatar :src="userDetails.passport_photo" size="6rem" />
                <div class="text-center name">
                  {{ userDetails.surname }} {{ userDetails.first_name }}
                </div>
                <div class="text-center mail">
                  {{ userDetails.email }}
                </div>
                <div>&nbsp;</div>
                <div class="text-center ben rectangle-1">
                  Beneficiary
                </div>
                <div>&nbsp;</div>
                <div class="text-center">
                  N-Power Batch D
                </div>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Residential Details</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Residential Address
                    </p>
                    <p class="text">
                      {{ userDetails.residential_address }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      State Of Residence
                    </p>
                    <p class="text">
                      {{ userDetails.state_of_residence }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Local Government Area Of Residence
                    </p>
                    <p class="text">
                      {{ userDetails.local_government_of_residence }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-col cols="12" md="8" class="my-3">
              <span class="personal">Educational Background</span>
              <b-card>
                <b-row>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Highest Level Of Education
                    </p>
                    <p class="text">
                      {{ userDetails.highest_level_of_education }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Institution
                    </p>
                    <p class="text">
                      {{ userDetails.institution }}
                    </p>
                  </b-col>
                  <b-col class="my-3" cols="12">
                    <p class="title">
                      Year Of Graduation
                    </p>
                    <p class="text">
                      {{ userDetails.year_of_graduation }}
                    </p>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>

            <b-row>&nbsp;</b-row>
          </b-row>
        </b-tab>
      </b-container>
      <b-tab title="Applications">
        <Applications :user="userDetails" />
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
  }
}
</script>

<style lang="scss" scoped>
.user {
  min-height: calc(100vh - 73px);
}

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
