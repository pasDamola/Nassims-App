<template>
  <div v-if="isAppForm">
    <b-container>
      <b-row>&nbsp;</b-row>
      <b-row />
      <b-row />
      <b-row class="text-center">
        <b-col />
        <b-col>
          <img src="/Bitmap.svg" alt>
        </b-col>
        <b-col />
      </b-row>
      <b-row class="text-center">
        <b-col />
        <b-col cols="8">
          <div class="batchC">
            N-Power Batch C Registration
            <div />
          </div>
        </b-col>
        <b-col />
      </b-row>
      <b-row class="text-center">
        <b-col />
        <b-col class="kindly">
          Kindly fill in the right details below
        </b-col>
        <b-col />
      </b-row>&nbsp;
      <b-row>&nbsp;</b-row>
      <b-row>
        <b-col />
        <b-col cols="8">
          <b-form v-if="show">
            <b-form-group
              id="input-group-1"
              label="What N-Power Programme Are You Applying For?:"
              class="titless"
              label-for="input-1"
            >
              <b-form-select id="input-3" v-model="form.programme" :options="programmes" required />
            </b-form-group>
            <div>&nbsp;</div>
            <h3>Personal Information</h3>
            <b-form-group
              id="input-group-2"
              class="titless"
              label="Passport Photo:"
              label-for="input-2"
            >
              <b-form-file
                v-model="form.passport_photo"
                class="file"
                :state="Boolean(form.passport_photo)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
              <!-- <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div> -->
            </b-form-group>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Surname:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.surname"
                    required
                    placeholder="Enter surname"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Firstname:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.first_name"
                    required
                    placeholder="Enter firstname"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Other Names:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.other_name"
                    required
                    placeholder="Enter other names"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Date Of Birth:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-datepicker
                    id="example-datepicker"
                    v-model="form.date"
                    placeholder="DD/MM/YY"
                    class="mb-2"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Email Address:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    required
                    placeholder="Enter email address"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Phone Number:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.phone_number"
                    required
                    placeholder="Enter phone"
                  />
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="State of Origin:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-select v-model="form.state_of_origin" @change="getSelectedItem">
                    <option
                      v-for="(selectOption, indexOpt) in states"
                      :key="indexOpt"
                      :value="selectOption.state"
                    >
                      {{ selectOption.state }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  class="titless"
                  label="Local Government Area Of Origin:"
                  label-for="input-3"
                >
                  <b-form-select id="input-3" v-model="form.lga">
                    <option
                      v-for="(selectedState, i) in localGovts"
                      :key="i"
                      :value="selectedState"
                    >
                      {{ selectedState }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Password:"
                  class="titless"
                  label-for="input-3"
                >
                  <!-- <b-input-group-prepend is-text>
                  <b-icon icon="search" />
                  </b-input-group-prepend>-->
                  <b-form-input
                    v-model="form.password"
                    :type="isPassword ? 'password' : 'text'"
                    required
                    placeholder="Enter Password"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Confirm Password:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.password"
                    type="password"
                    required
                    placeholder="Enter Password"
                  />
                </b-form-group>
              </b-col>
            </b-row>&nbsp;
            <hr>&nbsp;
            <h3>Residential Details</h3>
            <b-form-group
              id="input-group-2"
              label="Residential Address:"
              class="titless"
              label-for="input-3"
            >
              <b-form-input
                id="input-2"
                v-model="form.residential_address"
                required
                placeholder="Enter Residential Address"
              />
            </b-form-group>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-6"
                  label="State Of Residence:"
                  class="titless"
                  label-for="input-6"
                >
                  <b-form-select
                    v-model="form.state_of_residence"
                    placeholder="Select State of Residence"
                    @change="getSelectedItemOfResidence"
                  >
                    <option
                      v-for="(selectOptions, indexOpt) in states"
                      :key="indexOpt"
                      :value="selectOptions.state"
                    >
                      {{ selectOptions.state }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Local Government Area Of Residence:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-select id="input-3" v-model="form.local_government_of_residence">
                    <option
                      v-for="(selectedState, i) in localGovtsOfResidence"
                      :key="i"
                      :value="selectedState"
                    >
                      {{ selectedState }}
                    </option>
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>&nbsp;
            <hr>&nbsp;
            <h3>Educational Background</h3>
            <b-form-group
              id="input-group-2"
              label="Highest Level Of Education:"
              class="titless"
              label-for="input-3"
            >
              <b-form-select id="input-3" v-model="form.highest_level_of_education" :options="education" required />
            </b-form-group>
            <b-row>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Instituition:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.institution"
                    required
                    placeholder="Enter Instituition"
                  />
                </b-form-group>
              </b-col>
              <b-col cols="6">
                <b-form-group
                  id="input-group-2"
                  label="Year Of Graduation:"
                  class="titless"
                  label-for="input-3"
                >
                  <b-form-input
                    id="input-3"
                    v-model="form.year_of_graduation"
                    required
                    placeholder="Enter Year Of Graduation"
                  />
                </b-form-group>
              </b-col>
            </b-row>&nbsp;
            <hr>&nbsp;
            <h3>Other Details</h3>
            <b-form-group
              id="input-group-2"
              label="Bank Verification Number:"
              class="titless"
              label-for="input-3"
            >
              <b-form-input id="input-2" v-model="form.bvn" required placeholder="Enter BVN" />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="National Youth Service Certificate"
              class="titless"
              label-for="input-3"
            >
              <b-form-file
                v-model="form.nysc_certificate"
                :state="Boolean(form.nysc_certificate)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Birth Certificate"
              class="titless"
              label-for="input-3"
            >
              <b-form-file
                v-model="form.birth_certificate"
                :state="Boolean(form.birth_certificate)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Local Government Identification Letter"
              class="titless"
              label-for="input-3"
            >
              <b-form-file
                v-model="form.lga_identification_letter"
                :state="Boolean(form.lga_identification_letter)"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
            </b-form-group>
            <b-row>
              <b-col />
              <b-col cols="12">
                <b-button class="bt" block variant="success" @click="changeView(false)">
                  Complete Application
                </b-button>
              </b-col>
              <b-col />
            </b-row>
          </b-form>
        </b-col>
        <b-col />
      </b-row>
    </b-container>
  </div>
  <div v-else>
    <b-container>
      <b-row>
        <b-col cols="3" />
        <b-col cols="6">
          <b-row>
            <div class="mx-auto">
              <img class src="/Bitmap.svg" alt>
            </div>
          </b-row>
          <b-row>
            <div class="mx-auto batchC">
              N-Power Batch C Registration
              <div />
            </div>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <div class="text-left confirm">
              Kindly Confirm Your Application Entry:
            </div>
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <div class="npower-prog">
              N-Power Programme: {{ form.programme }}
            </div>
          </b-row>
          <b-row>
            <div class="subtitles">
              Personal Information
            </div>
          </b-row>
          <b-row>
            <hr>
          </b-row>
          <b-row>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                Surname:
              </b-row>
              <b-row class="persona-info-subs">
                First Name:
              </b-row>
              <b-row class="persona-info-subs">
                Other Names:
              </b-row>
              <b-row class="persona-info-subs">
                Date Of Birth:
              </b-row>
              <b-row class="persona-info-subs">
                Email Address:
              </b-row>
              <b-row class="persona-info-subs">
                Phone Number:
              </b-row>
              <b-row class="persona-info-subs">
                State Of Origin:
              </b-row>
              <b-row class="persona-info-subs">
                LGA Of Origin:
              </b-row>
            </b-col>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                {{ form.surname }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.first_name }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.other_name }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.date }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.email }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.phone_number }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.state_of_origin }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.lga }}
              </b-row>
            </b-col>
            <b-col cols="6" />
          </b-row>

          <b-row>
            <div class="subtitles">
              Residential Details
            </div>
          </b-row>
          <b-row>
            <hr>
          </b-row>
          <b-row>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                Residential Address:
              </b-row>
              <b-row class="persona-info-subs">
                State Of Residence:
              </b-row>
              <b-row class="persona-info-subs">
                LGA Of Residence:
              </b-row>
            </b-col>
            <b-col cols="5">
              <b-row class="persona-info-subs">
                {{ form.residential_address }}
              </b-row>

              <b-row class="persona-info-subs">
                {{ form.state_of_residence }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.local_government_of_residence }}
              </b-row>
            </b-col>
            <b-col cols="4" />
          </b-row>

          <b-row>
            <div class="subtitles">
              Educational Background
            </div>
          </b-row>
          <b-row>
            <hr>
          </b-row>
          <b-row>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                Highest Level Of Education:
              </b-row>
              <b-row class="persona-info-subs">
                Institution:
              </b-row>
              <b-row class="persona-info-subs">
                Year Of Graduation:
              </b-row>
            </b-col>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                {{ form.highest_level_of_education }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.institution }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.year_of_graduation }}
              </b-row>
            </b-col>
            <b-col cols="6" />
          </b-row>

          <b-row>
            <div class="subtitles">
              Other Details
            </div>
          </b-row>
          <b-row>
            <hr>
          </b-row>
          <b-row>
            <b-col cols="3">
              <b-row class="persona-info-subs">
                Bank Verification Number:
              </b-row>
              <b-row class="persona-info-subs">
                NYSC Certificate:
              </b-row>
              <b-row class="persona-info-subs">
                Birth Certificate:
              </b-row>
              <b-row class="persona-info-subs">
                LGA Identification Letter:
              </b-row>
            </b-col>
            <b-col cols="5">
              <b-row class="persona-info-subs">
                {{ form.bvn }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.nysc_certificate }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.birth_certificate }}
              </b-row>
              <b-row class="persona-info-subs">
                {{ form.lga_identification_letter }}
              </b-row>
            </b-col>
            <b-col cols="4" />
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <b-button class="bt" block variant="success" @click="submitApp">
              Confirm and Submit Application
            </b-button>
          </b-row>
          <b-row>
            <div class="mx-auto edit">
              <span @click="changeView(true)">Go Back And Edit the Details</span>
            </div>
          </b-row>
        </b-col>
        <b-col cols="3" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
import stateOptions from '~/static/json/nigeria-states-and-local-govts.json'

export default {
  async fetch () {
    this.states = await stateOptions
  },
  data () {
    return {
      isPassword: true,
      selected: null,
      localGovts: [],
      localGovtsOfResidence: [],
      form: {
        lga: '',
        passport_photo: null,
        programme: null,
        highest_level_of_education: null,
        other_name: '',
        phone_number: '',
        state_of_origin: '',
        batch: 'batch C',
        date: '',
        bvn: '',
        email: '',
        surname: '',
        first_name: '',
        state_of_residence: '',
        localGovtOfResidence: '',
        year: '',
        instituition: '',
        password: '',
        residential_address: '',
        local_government_of_residence: '',
        institution: '',
        year_of_graduation: '',
        nysc_certificate: null,
        birth_certificate: null,
        lga_identification_letter: null
      },
      states: [],
      programmes: [
        { text: 'Select A Programme', value: null },
        { text: 'N-Power Agro', value: 'N-Power Agro' },
        { text: 'N-Power Tax', value: 'N-Power Tax' },
        { text: 'N-Power Build', value: 'N-Power Build' },
        { text: 'N-Power Creative', value: 'N-Power Creative' },
        { text: 'N-Power Health', value: 'N-Power Health' },
        { text: 'N-Power Teach', value: 'N-Power Teach' },
        { text: 'N-Power Tech Hardware', value: 'N-Power Tech Hardware' },
        { text: 'N-Power Tech Software', value: 'N-Power Tech Software' }
      ],
      education: [
        { text: 'Select highest level of Education', value: null },
        {
          text: 'Junior School Certificate Examination (JSCE)',
          value: 'Junior School Certificate Examination (JSCE)'
        },
        {
          text: 'Senior School Certification Examination (SSCE)',
          value: 'Senior School Certification Examination (SSCE)'
        },
        {
          text: 'Ordinary National Diploma (OND)',
          value: 'Ordinary National Diploma (OND)'
        },
        {
          text: 'Higher National Diploma (HND)',
          value: 'Higher National Diploma (HND)'
        },
        { text: 'Bachelors Degree', value: 'Bachelors Degree' },
        { text: 'Masters Degree', value: 'Masters Degree' },
        {
          text: 'Doctor Of Philosophy (PhD)',
          value: 'Doctor Of Philosophy (PhD)'
        }
      ],
      show: true
    }
  },
  computed: {
    ...mapState(['isAppForm'])
  },
  mounted () {
    this.$axios.defaults.headers.common.Authorization = 'Token 5c96d7b979c2bc8:f8cacdd5a91ed76'
    this.$axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
  },
  methods: {
    getSelectedItem (state) {
      // Just a regular js function that takes 1 arg
      this.form.selectedState = state
      this.getLocalGovt(state)
    },
    getLocalGovt (state) {
      const arr1 = this.states.filter(d => d.state === state)
      if (arr1.length > 0) {
        this.localGovts = arr1[0].lgas
      }
    },
    getSelectedItemOfResidence (state) {
      // Just a regular js function that takes 1 arg
      this.form.selectedStateOfResidence = state
      this.getLocalGovtOfResidence(state)
    },
    getLocalGovtOfResidence (state) {
      const arr1 = this.states.filter(d => d.state === state)
      if (arr1.length > 0) {
        this.localGovtsOfResidence = arr1[0].lgas
      }
    },
    setActiveState (val) {
      this.$store.commit('setActiveState', val)
    },
    changeView (view) {
      this.$store.commit('SET_VIEW_STATE', view)
    },
    submitApp () {
      this.$axios
        .post('https://guarded-cliffs-51823.herokuapp.com/sample/post/applicants', this.form, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: 'Token 5c96d7b979c2bc8:f8cacdd5a91ed76'
          }
        })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = error => reject(error)
      })
    }

  }
}
</script>

<style>

.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
