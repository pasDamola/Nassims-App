<template>
  <div v-if="isAppForm">
    <b-container class="pb-4">
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
              <b-form-select
                id="input-3"
                v-model="form.programme"
                :options="programmes"
                required
              />
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
                class="file"
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
                  <b-form-select
                    v-model="form.state_of_origin"
                    @change="getSelectedItem"
                  >
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
            <hr>
            &nbsp;
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
                  <b-form-select
                    id="input-3"
                    v-model="form.local_government_of_residence"
                  >
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
            <hr>
            &nbsp;
            <h3>Educational Background</h3>
            <b-form-group
              id="input-group-2"
              label="Highest Level Of Education:"
              class="titless"
              label-for="input-3"
            >
              <b-form-select
                id="input-3"
                v-model="form.highest_level_of_education"
                :options="education"
                required
              />
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
            <hr>
            &nbsp;
            <h3>Other Details</h3>
            <b-form-group
              id="input-group-2"
              label="Bank Verification Number:"
              class="titless"
              label-for="input-3"
            >
              <b-form-input
                id="input-2"
                v-model="form.bvn"
                required
                placeholder="Enter BVN"
              />
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="National Youth Service Certificate"
              class="titless"
              label-for="input-3"
            >
              <b-form-file
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
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
              />
            </b-form-group>
            <b-row>
              <b-col />
              <b-col cols="12">
                <b-button
                  class="bt"
                  block
                  variant="success"
                  @click="changeView(false)"
                >
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
                <a>Screenshot(8).png</a>
              </b-row>
              <b-row class="persona-info-subs">
                <a>Screenshot(15).png</a>
              </b-row>
              <b-row class="persona-info-subs">
                <a>Screenshot(16).png</a>
              </b-row>
            </b-col>
            <b-col cols="4" />
          </b-row>
          <b-row>&nbsp;</b-row>
          <b-row>&nbsp;</b-row>
          <b-row>
            <!-- <b-overlay
              :show="busy"
              rounded
              opacity="0.6"
              spinner-small
              spinner-variant="success"
              @hidden="onHidden"
            > -->
            <b-button
              ref="button"
              class="bt"
              block
              variant="success"
              :disabled="busy"
              @click="submitApp"
            >
              {{ btnText }}
            </b-button>
            <!-- </b-overlay> -->
          </b-row>
          <b-row>
            <div class="mx-auto edit">
              <span
                class="shift-down"
                @click="changeView(true)"
              >Go Back And Edit the Details</span>
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
      btnText: 'Confirm and Submit Application',
      selected: null,
      busy: false,
      localGovts: [],
      localGovtsOfResidence: [],
      form: {
        lga: '',
        passport_photo:
          'data:image/png;base64,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',
        programme: '',
        highest_level_of_education: '',
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
        password: '',
        residential_address: '',
        local_government_of_residence: '',
        institution: '',
        year_of_graduation: '',
        nysc_certificate:
          'data:image/png;base64,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',
        birth_certificate:
          'data:image/png;base64,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',
        lga_identification_letter:
          'data:image/png;base64,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'
      },
      states: [],
      programmes: [
        { text: 'Select A Programme', value: null, disabled: true },
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
          value: 'Junior School Certificate Exam (JSCE)'
        },
        {
          text: 'Senior School Certificate Examination (SSCE)',
          value: 'Senior School Certificate Exam (SSCE)'
        },
        {
          text: 'Ordinary National Diploma (OND)',
          value: 'Ordinary National Diploma (OND)'
        },
        {
          text: 'Higher National Diploma (HND)',
          value: 'Higher National Diploma (HND)'
        },
        { text: 'Bachelors Degree', value: "Bachelor's Degree" },
        { text: 'Masters Degree', value: "Master's Degree" },
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
    this.getProgrammes()
  },
  methods: {
    getProgrammes () {
      this.$axios.get('https://sleepy-wildwood-51098.herokuapp.com/programme/graduates').then(({ data }) => {
        const programmes = data.data.map((el) => {
          return {
            text: el.name,
            value: el.name
          }
        })
        this.programmes = programmes
        this.programmes.unshift({ text: 'Select A Programme', value: null, disabled: true })
      })
    },
    getSelectedItem (state) {
      // Just a regular js function that takes 1 arg
      this.form.state_of_origin = state
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
      this.form.state_of_residence = state
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
      this.busy = true
      this.btnText = 'Loading...'
      this.$axios
        .post(
          'https://guarded-cliffs-51823.herokuapp.com/sample/post/applicants',
          this.form,
          {
            headers: {
              Authorization: 'Token 5c96d7b979c2bc8:f8cacdd5a91ed76'
            }
          }
        )
        .then((response) => {
          console.log(response)
          this.$router.push({ path: '/confirm' })
        })
        .catch((err) => {
          this.busy = false
          console.log(err)
        })
    },
    onHidden () {
      // Return focus to the button once hidden
      this.$refs.button.focus()
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
