<template>
  <b-navbar toggleable="sm" variant="faded" fixed type="light" class="py-3">
    <b-container>
      <b-navbar-brand href="#">
        <img src="/logo.svg" alt="Logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-text-collapse" />
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            Home
          </b-nav-item>
          <b-nav-item href="/apply">
            Apply
          </b-nav-item>
          <b-nav-item href="#">
            About
          </b-nav-item>
          <b-nav-item href="#">
            Contact
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
