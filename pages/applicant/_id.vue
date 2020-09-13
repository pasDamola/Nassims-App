<template>
  <b-container>
    <b-row class="beneficiary">
      <b-col cols="8">
        <span class="personal">Personal Details</span>
        <b-card>
          <b-row>
            <b-col cols="6">
              Surname
            </b-col>
            <b-col cols="6">
              First Name
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              Oluchukwu
            </b-col>
            <b-col cols="6">
              Grace
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col cols="6">
              Other Names
            </b-col>
            <b-col cols="6">
              Date Of Birth
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              Margaret Elizabeth
            </b-col>
            <b-col cols="6">
              01/01/1994
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col cols="6">
              Email Address
            </b-col>
            <b-col cols="6">
              Phone Number
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              Oluchukewgr@gmail.com
            </b-col>
            <b-col cols="6">
              08117866543
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col cols="6">
              State Of Origin
            </b-col>
            <b-col cols="6">
              Local Government Area Of Origin
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="6">
              Abia State
            </b-col>
            <b-col cols="6">
              Omueri LGA
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col cols="4">
        <span class="hidden">Personal Details</span>
        <b-card>
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

      <b-col cols="8">
          <b-row>&nbsp;</b-row>
        <span class="personal">Residential Details</span>
        <b-card>
          <b-row>
            <b-col>
              Residential Address
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              18 Salua Street, off anthony bus stop, Ikeja, Lagos State
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col>
              State Of Residence
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              Osun State
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col>
              Local Government Area Of Residence
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              Irewole LGA
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col cols="8">
          <b-row>&nbsp;</b-row>
        <span class="personal">Educational Background</span>
        <b-card>
          <b-row>
            <b-col>
              Highest Level Of Education
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              Bachelor's Degree
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col>
              Institution
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              University Of Benin
            </b-col>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-col>
              Year Of Graduation
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              2016
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-row>&nbsp;</b-row>
    </b-row>
  </b-container>
</template>

<script>
export default {
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

  mounted () {
    // this.$axios.get('https://guarded-cliffs-51823.herokuapp.com/sample/fetch/Applicants')
    //   .then((response) => {
    //     console.log(response.data.data)
    //     this.items = response.data.data
    //   })
    // console.log(this.items)
  }
}
</script>
