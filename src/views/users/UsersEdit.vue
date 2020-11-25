<template>
  <div>
    <title-bar :titleStack="titleStack" />
    <hero-bar>
      Edit
    </hero-bar>
    <section class="section is-main-section">
      <div class="container is-max-desktop">
        <tiles>
          <profile-update-form class="tile is-child" />
        </tiles>
      </div>
    </section>
  </div>
</template>

<script>
import TitleBar from "@/components/title/TitleBar.vue";
import HeroBar from "@/components/hero/HeroBar.vue";
import Tiles from "@/components/Tiles";
import ProfileUpdateForm from "@/components/user/ProfileUpdateForm";

export default {
  name: "UsersEdit",
  components: {
    TitleBar,
    HeroBar,
    Tiles,
    ProfileUpdateForm,
  },
  computed: {
    titleStack() {
      return ["Admin", "Users"];
    },
  },
};
</script>
