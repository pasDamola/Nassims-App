<template>
  <div class="footer py-4">
    <b-container>
      <b-row align-h="between">
        <b-col cols="12" md="4">
          &copy; {{ new Date().getFullYear() }} NASIMS. All rights reserved
        </b-col>
        <b-col cols="12" md="4">
          <router-link to="/apply">
            Apply
          </router-link>
          <router-link to="#">
            About
          </router-link>
          <router-link to="#">
            Contact
          </router-link>
        </b-col>
        <b-col cols="12" md="2">
          <router-link to="#">
            <i class="fa fa-facebook" aria-hidden="true" />
          </router-link>
          <router-link to="#">
            <i class="fa fa-twitter" aria-hidden="true" />
          </router-link>
          <router-link to="#">
            <i class="fa fa-instagram" aria-hidden="true" />
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #07321B;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    margin: 0 15px;
  }
}
</style>
