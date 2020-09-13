<template>
  <div>
    <b-tabs
      active-nav-item-class="tab--active"
      content-class="mt-3 tabs"
    >
      <b-tab title="Accepted" active>
        <div class="apps">
          <b-table hover :items="items" :fields="fields" />
        </div>
      </b-tab>
      <b-tab title="Applied">

      </b-tab>
      <b-tab title="Ongoing">

      </b-tab>
      <b-tab title="Closed">

      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [],
    fields: ['first_name', 'surname', 'date', 'phone_number', 'residential_address']
  })
}
</script>

<style lang="scss" scoped>
.apps {
  background-color: #F7F7F7;
}

.tabs::v-deep {
  max-width: 1200px;
  padding: 10px 0;

  a {
    padding-bottom: 15px;
    color: #444;
  }

  .tab--active {
    color: #288855;
    position: relative;
    // border: none;
    display: block;

    &:after {
      content: '';
      display: none;
    }
  }
}
</style>
