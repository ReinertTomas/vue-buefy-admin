<template>
  <footer v-show="isFooterBarVisible" class="footer">
    <div class="container-fluid">
      <div class="level">
        <div class="level-item">
          <div class="footer-copyright">
            <b>&copy; {{ year }}, Company</b> &mdash; Vue Bulma Admin
            <span class="tag">v1.5.0</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FooterBar",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    ...mapState(["isFooterBarVisible"]),
  },
};
</script>
