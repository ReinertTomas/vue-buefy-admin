<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
        <card-widget
          class="tile is-child"
          type="is-primary"
          icon="account-multiple"
          :number="512"
          label="Clients"
        />
        <card-widget
          class="tile is-child"
          type="is-info"
          icon="cart-outline"
          :number="7770"
          prefix="$"
          label="Sales"
        />
        <card-widget
          class="tile is-child"
          type="is-success"
          icon="chart-timeline-variant"
          :number="256"
          suffix="%"
          label="Performance"
        />
      </tiles>

      <card-component title="Clients" class="has-table has-mobile-sort-spaced">
        <clients-table-sample
          :data-url="`${$router.options.base}data-sources/clients.json`"
        />
      </card-component>
    </section>
  </div>
</template>

<script>
import TitleBar from "@/components/title/TitleBar";
import HeroBar from "@/components/hero/HeroBar";
import Tiles from "@/components/Tiles";
import CardWidget from "@/components/card/CardWidget";
import CardComponent from "@/components/card/CardComponent";
import ClientsTableSample from "@/components/ClientsTableSample";

export default {
  name: "Home",
  components: {
    ClientsTableSample,
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar,
  },
  data() {
    return {};
  },
  computed: {
    titleStack() {
      return ["Admin", "Dashboard"];
    },
  },
  mounted() {
    this.$buefy.snackbar.open({
      message: "Welcome back",
      queue: false,
    });
  },
  methods: {},
};
</script>
