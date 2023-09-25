<template>
  <div class="about-company-participation">
    <div class="container about-company__container">
      <h2 class="h2 about-company-participation__heading" v-text="$t('about-company-participation__heading')"/>

      <div class="about-company-participation__steps">
        <div class="flex-column about-company-participation__item">
          <div class="h3_semibold about-company-participation__icon">01</div>
          <div class="flex-column">
            <span class="h4_bold about-company-participation__item-title" v-text="$t('about-company-participation__item-title-1')"/>
            <div class="t1_regular about-company-participation__item-description" v-text="$t('about-company-participation__item-description-1')"/>
          </div>
        </div>
        <div class="flex-column about-company-participation__item">
          <div class="h3_semibold about-company-participation__icon">02</div>
          <div class="flex-column">
            <span class="h4_bold about-company-participation__item-title" v-text="$t('about-company-participation__item-title-2')"/>
            <div class="t1_regular about-company-participation__item-description" v-text="$t('about-company-participation__item-description-2')"/>
          </div>
        </div>
        <div class="flex-column about-company-participation__item">
          <div class="h3_semibold about-company-participation__icon">03</div>
          <div class="flex-column">
            <span class="h4_bold about-company-participation__item-title" v-text="$t('about-company-participation__item-title-3')"/>
            <div class="t1_regular about-company-participation__item-description" v-text="$t('about-company-participation__item-description-3')"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>