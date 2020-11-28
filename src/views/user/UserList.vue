<template>
  <div>
    <title-bar :titleStack="titleStack" />
    <hero-bar>
      Users
      <router-link slot="right" to="/users/create" class="button is-primary">
        <b-icon icon="account-plus" custom-size="default" />
        <span>Create User</span>
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <card-component class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          :data-url="`${$router.options.base}data-sources/clients.json`"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
import TitleBar from "@/components/layout/TheTitle.vue";
import HeroBar from "@/components/layout/TheHero.vue";
import ClientsTableSample from "@/components/ClientsTableSample";
import CardComponent from "@/components/ui/CardComponent";
export default {
  name: "UsersList",
  components: {
    TitleBar,
    HeroBar,
    ClientsTableSample,
    CardComponent,
  },
  computed: {
    titleStack() {
      return ["Admin", "Users"];
    },
  },
};
</script>
