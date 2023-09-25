<template>
  <div class="panelka-replenishment">
    <div class="panelka-table" v-if="data.length">
      <div class="panelka__table-row t2_medium">
        <div class="flex-row">Дата</div>
        <div class="flex-row">Валюта пополнения</div>
        <div class="flex-row">Сумма</div>
        <div class="flex-row">Hash</div>
        <div class="flex-row">Действия</div>
      </div>

      <div class="panelka__table-row t2_regular" v-for="item in data">
        <div class="flex-row" v-text="moment(item.created_at).format('DD.MM.YYYY HH:mm')"/>
        <div class="flex-row" v-text="item.transaction.currency_from.code"/>
        <div class="flex-row" v-text="item.transaction.sum_from"/>
        <div class="flex-row" v-text="item.tx_hash"/>
        <div class="flex-row" v-text="showStatus(item.success)"/>
        <div class="flex-row">
          <button
              class="betting-button"
              @click="submitTx(item.id)"
              v-text="'Подтвердить'"
              v-if="!item.success"/>
        </div>
      </div>
    </div>
    <div v-else>
      Нет заявок на пополнение
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  data() {
    return {
      data: []
    }
  },
  methods: {
    async getData() {
      await axios
          .get('/api/actual/panel/replenishment/list')
          .then((res) => {
            console.log(res.data)
            this.data = res.data
          })
          .catch((err) => {
            console.log(err)
          })
    },
    async submitTx(id) {
      await axios
          .post(`/api/actual/panel/replenishment/accept/${id}`)
          .then((res) => {
            console.log(res.data)
            this.data = res.data
          })
          .catch((err) => {
            console.log(err)
          })
    },
    showStatus(status) {
      let response;

      if(status === 1) {
        response = 'Подтверждена'
      }else {
        response = 'Не подтверждена'
      }

      return response
    }
  },
  created: function () {
    this.moment = moment;
  },
  mounted() {
    this.getData()
  }
}
</script>