<template>
    <div class="fast-start">
        <div class="container fast-start__container">
            <div class="fast-start__video">
                <div class="fast-start__video-container">
                    <img :src="getImage()"
                        class="fast-start__video-container-image" alt="" />
                </div>
            </div>
            <div class="fast-start__content">
                <h2 class="h1 fast-start__heading" v-text="$t('fast-start__heading')" />

                <div class="fast-start__list" v-if="$t('fast-start__list')">
                    <div class="fast-start__item">
                        <div class="fast-start__item-number">
                            <div class="h4_bold fast-start__item-number-box" v-text="1" />
                        </div>
                        <div class="fast-start__item-content">
                            <!--                            <span class="h4_medium fast-start__item-title" v-text="item.title"/>-->
                            <span class="t1_regular fast-start__item-description" v-html="$t('fast-start__list__1')" />
                        </div>
                    </div>
                    <div class="fast-start__item">
                        <div class="fast-start__item-number">
                            <div class="h4_bold fast-start__item-number-box" v-text="2" />
                        </div>
                        <div class="fast-start__item-content">
                            <!--                            <span class="h4_medium fast-start__item-title" v-text="item.title"/>-->
                            <span class="t1_regular fast-start__item-description" v-html="$t('fast-start__list__2')" />
                        </div>
                    </div>
                    <div class="fast-start__item">
                        <div class="fast-start__item-number">
                            <div class="h4_bold fast-start__item-number-box" v-text="3" />
                        </div>
                        <div class="fast-start__item-content">
                            <!--                            <span class="h4_medium fast-start__item-title" v-text="item.title"/>-->
                            <span class="t1_regular fast-start__item-description" v-html="$t('fast-start__list__3')" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import fastStartImageRU from '../../../img/front/front-page__fast-start-video-screen_ru.png';
import fastStartImageEN from '../../../img/front/front-page__fast-start-video-screen_en.png';
import fastStartImageCH from '../../../img/front/front-page__fast-start-video-screen_ch.png';

export default {
    data() {
        return {
            bgImage: {
                ru: fastStartImageRU,
                en: fastStartImageEN,
                ch: fastStartImageCH,
            }
        }
    },
    methods: {
        getImage() {
            let locale = window.location.pathname.replace(/^\/([^\/]+).*/i, '$1');
            return this.bgImage[locale]
        },
    }
}
</script>