<template>
  <div class="about-company-advantages">
    <div class="container about-company__container">
      <h1 class="h2 about-company-advantages__heading" v-text="$t('about-company-advantages__heading')"/>

      <div class="about-company-advantages__grid">
        <div class="flex-column about-company-advantages__item">
          <img src="../../../../img/about-company/advantage-01.svg" alt="" class="about-company-advantages__icon">
          <span class="h4_bold about-company-advantages__item-title"
                v-text="$t('about-company-advantages__item-title-1')"/>
          <span class="t1_regular about-company-advantages__item-description"
                v-text="$t('about-company-advantages__item-description-1')"/>
        </div>
        <div class="flex-column about-company-advantages__item">
          <img src="../../../../img/about-company/advantage-02.svg" alt="" class="about-company-advantages__icon">
          <span class="h4_bold about-company-advantages__item-title"
                v-text="$t('about-company-advantages__item-title-2')"/>
          <span class="t1_regular about-company-advantages__item-description"
                v-text="$t('about-company-advantages__item-description-2')"/>
        </div>
        <div class="flex-column about-company-advantages__item">
          <img src="../../../../img/about-company/advantage-03.svg" alt="" class="about-company-advantages__icon">
          <span class="h4_bold about-company-advantages__item-title"
                v-text="$t('about-company-advantages__item-title-3')"/>
          <span class="t1_regular about-company-advantages__item-description"
                v-text="$t('about-company-advantages__item-description-3')"/>
        </div>
        <div class="flex-column about-company-advantages__item">
          <img src="../../../../img/about-company/advantage-04.svg" alt="" class="about-company-advantages__icon">
          <span class="h4_bold about-company-advantages__item-title"
                v-text="$t('about-company-advantages__item-title-4')"/>
          <span class="t1_regular about-company-advantages__item-description"
                v-text="$t('about-company-advantages__item-description-4')"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>