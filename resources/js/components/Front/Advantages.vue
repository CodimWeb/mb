<template>
  <div class="advantages">
    <div class="container advantages__container">
      <h2
          class="h1 advantages__heading"
          v-text="$t('advantages__heading')"/>

      <div class="advantages__grid">
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-01.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-1')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-1')"/>
        </div>
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-02.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-2')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-2')"/>
        </div>
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-03.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-3')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-3')"/>
        </div>
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-04.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-4')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-4')"/>
        </div>
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-05.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-5')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-5')"/>
        </div>
        <div class="advantages__item">
          <img src="../../../img/advantages/icon-advantage-06.svg" class="advantages__icon" alt=""/>
          <span class="h3_semibold advantages__title" v-text="$t('advantages__title-6')"/>
          <span class="t1_regular advantages__description" v-text="$t('advantages__description-6')"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {}
</script>