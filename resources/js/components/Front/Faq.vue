<template>
    <div class="container">
        <div class="faq-panel">
            <h2 class="h1 faq-panel__heading">{{ $t('Still have questions') }}</h2>
            <p class="faq-panel__text">{{ $t('Most popular questions') }}</p>
            <div class="faq-panel__buttons">
<!--                <a href="#" class="faq-panel__button">{{ $t('Contact us') }}</a>-->
                <a href="https://t.me/maranbet_support" class="faq-panel__button" style="max-width: 50%">{{ $t('Join us in Telegram') }}</a>
            </div>
        </div>
    </div>
    <div class="faq" v-if="display">
        <div class="container faq__container">
            <h2 class="h1 faq__heading">FAQ</h2>

            <div class="faq__grid">
                <div class="faq__picture-box">
                    <img src="../../../img/faq-coin.png" class="faq__coin" alt="BTC"/>
                    <img src="../../../img/egg.png" class="faq__picture" alt="Maran"/>
                </div>
                <div class="faq__content-box" v-if="questions.length">
                    <div v-for="item in questions" class="faq__question-box" @click="openQuestion(item.id)">
                        <div class="faq__question-row">
                            <div class="h3_medium faq__question-title">
                                {{ $t(item.title) }}
                            </div>
                            <div class="faq__question-icon" :class="{'faq__question-icon--active': item.open}"></div>
                        </div>
                        <div class="t1_regular faq__question-request" :class="{'faq__question-request--active': item.open}">
                            {{ $t(item.content) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    id: 1,
                    title: 'faq__title__1',
                    content: 'faq__content__1'
                },
                {
                    id: 2,
                    title: 'faq__title__2',
                    content: 'faq__content__2'
                },
                {
                    id: 3,
                    title: 'faq__title__3',
                    content: 'faq__content__3'
                },
                {
                    id: 4,
                    title: 'faq__title__4',
                    content: 'faq__content__4',
                },
                {
                    id: 5,
                    title: 'faq__title__5',
                    content: 'faq__content__5'
                },
                {
                    id: 6,
                    title: 'faq__title__6',
                    content: 'faq__content__6'
                }
            ],
            display: true
        }
    },
    methods: {
        setQuestionsList() {
            this.questions.filter((item, count) => {
                if (count === 0) {
                    item.open = true
                } else {
                    item.open = false
                }
            })
        },
        openQuestion(id) {
            this.questions.forEach((item) => {
                item.open = item.id === id;
            })
        }
    },
    mounted() {
        // axios
        //     .get(`/api/actual/category/list/?language=${this.$route.params.lang}&category=faq`)
        //     .then((res) => {
        //         this.questions = res.data
        //         this.setQuestionsList()
        //     })
        //     .catch((err) => {
        //         this.display = false
        //     })
    }
}
</script>