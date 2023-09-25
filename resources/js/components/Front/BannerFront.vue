<template>
  <div class="banner-front" :style="{backgroundImage: 'url(' + getImage() + ')'}">
    <div class="container banner-front__container">
      <div class="banner-front__content">
        <h1 class="h1 banner-front__heading" v-html="$t('banner-front__heading')" />
        <p class="h4_regular banner-front__description" v-html="$t('banner-front__description')" />
        <div class="fui-button__container">
          <!--          <router-link-->
          <!--              :to="getButtonLink()"-->
          <!--              v-text="getButtonText()"-->
          <!--              class="fui-button banner-front__button" />-->
          <router-link :to="{ name: 'betting' }" v-text="$t('Place a bet')" class="fui-button banner-front__button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import heroImageRU from '../../../img/front/front_page_banner_image_ru.png';
import heroImageEN from '../../../img/front/front_page_banner_image_en.png';
import heroImageCH from '../../../img/front/front_page_banner_image_ch.png';

export default {
  data() {
    return {
      bgImage: {
          ru: heroImageRU,
          en: heroImageEN,
          ch: heroImageCH,
        }
    }
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    // getButtonLink() {
    //   let link;
    //
    //   if(!this.user) {
    //     link = {name: 'register'}
    //   } else {
    //     link = {name: 'betting'}
    //   }
    //
    //   return link
    // },
    getImage() {
      let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, '$1');
      return this.bgImage[locale]
    },
    getButtonText() {
      let text;

      if (!this.user) {
        text = this.$t('Register')
      } else {
        text = this.$t('Back to betting')
      }

      return text
    }
  }
}
</script>