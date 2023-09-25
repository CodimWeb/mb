<template>
  <div class="about-company-plan">
    <div class="container about-company__container">
      <h2 class="h2 about-company-plan__heading" v-text="$t('about-company-plan__heading')" />

      <div class="flex-column about-company-plan__list">
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-1')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-1')"></div>
            <!--            <div class="flex-column about-company-plan__icon-box">-->
            <!--              <div class="about-company-plan__icon"/>-->
            <!--            </div>-->
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
          <!--          <div class="t1_regular about-company-plan__item-response">-->
          <!--            Выпуск токенов maran, работающих по стандарту ERC-20, блокчейн Ethereum. Cоздание RoadMap проекта, написание-->
          <!--            технических документов. Разработка кодов и математики проекта.-->
          <!--          </div>-->
        </div>
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-2')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-2')" />
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
        </div>
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-3')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-3')" />
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
        </div>
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-4')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-4')" />
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
        </div>
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-5')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-5')" />
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
        </div>
        <div class="about-company-plan__item">
          <div class="about-company-plan__item-grid">
            <div class="h4_regular about-company-plan__date" v-html="$t('about-company-plan__date-6')" />
            <div class="h3_medium about-company-plan__title" v-html="$t('about-company-plan__title-6')" />
          </div>
          <div class="about-company-plan__expander-container">
            <div class="about-company-plan__expander"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>