<template>
  <div class="about-company-mission">
    <div class="container about-company__container">
      <span class="h3_semibold about-company-mission__heading" v-text="$t('about-company-mission__1')"/>

      <div class="about-company-mission__grid">
        <div class="about-company-mission__item">
          <img src="../../../../img/about-company/mission-01.svg" class="about-company-mission__icon" alt=""/>
          <div class="flex-column h4_bold about-company-mission__text" v-text="$t('about-company-mission__text-1')"/>
        </div>
        <div class="about-company-mission__item">
          <img src="../../../../img/about-company/mission-02.svg" class="about-company-mission__icon" alt=""/>
          <div class="flex-column h4_bold about-company-mission__text" v-text="$t('about-company-mission__text-2')"/>
        </div>
        <div class="about-company-mission__item">
          <img src="../../../../img/about-company/mission-03.svg" class="about-company-mission__icon" alt=""/>
          <div class="flex-column h4_bold about-company-mission__text" v-text="$t('about-company-mission__text-3')"/>
        </div>
      </div>

      <div class="flex-column t1_regular about-company-mission__content" v-text="$t('about-company-mission__content')"/>
    </div>
  </div>
</template>