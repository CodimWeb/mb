<template>
    <div class="disciplines">
        <div class="container disciplines__container">
            <div class="disciplines__content">
                <h2 class="h1 disciplines__heading" v-text="$t('disciplines__heading')"/>
                <span class="h4_regular disciplines__description" v-text="$t('disciplines__description')"/>
                <div class="disciplines__links">
                    <div class="fui-button__container disciplines__button">
                        <router-link
                            :to="{name: 'betting'}"
                            v-text="$t('Place a bet')"
                            class="fui-button fui-button--sm"/>
                    </div>
                    <div class="fui-button__container disciplines__button">
                        <router-link
                            :to="{name: 'betting'}"
                            v-text="$t('Suggest a bet')"
                            class="fui-button fui-button--sm"/>
                    </div>
                </div>
            </div>
            <div class="disciplines__gallery__wrap">
                <div class="disciplines__gallery">
                    <div class="disciplines__image disciplines__image-01">
                        <img src="../../../img/disciplines/discipline-01-new.png" alt=""/>
                    </div>
                    <div class="disciplines__image disciplines__image-02">
                        <img src="../../../img/disciplines/discipline-02-new.png" alt=""/>
                    </div>
                    <div class="disciplines__image disciplines__image-03">
                        <img src="../../../img/disciplines/discipline-03-new.png" alt=""/>
                    </div>
                    <div class="disciplines__image disciplines__image-04">
                        <img src="../../../img/disciplines/discipline-04-new.png" alt=""/>
                    </div>
                    <div class="disciplines__image disciplines__image-05">
                        <img src="../../../img/disciplines/discipline-05-new.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        user() {
            return this.$store.getters.user;
        },
    },
    methods: {

    }
}
</script>