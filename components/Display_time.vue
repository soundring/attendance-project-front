<template>
  <div>
    <div class="now" >
        <div >現在の時刻 </div>
        <p>{{ now }}
        <span class="now__time">{{time}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data()  {
      return {
        now: null,
        time: null
      }

  },
  methods: {
    updateTime() {
        this.now = this.$dayjs().format('YYYY年MM月DD日')
        this.time = this.$dayjs().format('HH:mm:ss')
    }
  },
  mounted() {
    this.updateTime = setInterval(this.updateTime, 1000)
  },
  destroyed() {
      clearInterval(this.updateTime)
  }

}
</script>

<style>
.now  {
    font-size: 28px;
    text-align: center;
}

.now__time {
    font-size: 36px;
}
</style>
