<template>
<div>
  <nav class="navbar" role="navigation" aria-label="main navigation">
   <div class="navbar-start">
            <a class="navbar-item" @click="change('1')" :class="{'active': isActive === '1'}">
                ホーム
            </a>

            <a class="navbar-item" @click="change('2')" :class="{'active': isActive === '2'}">
                申請
            </a>
    </div>
    <div class="navbar-end">
        <div class="navbar-item">
            <div class="buttons">
               
              <a class="button is-primary">
                  ログイン
              </a>
            </div>
        </div>
      </div>

  </nav>
  <div v-if="isActive === '1'">
    <div class="contents">
      <displayTime />
      <attendanceButton />
    </div>
    <attendanceTable />
  </div>
   <div class="contents"  v-if="isActive === '2'">
   aaaa
   </div>
   
</div>
</template>

<script>
import displayTime from '~/components/DisplayTime'
import attendanceButton from '~/components/AttendanceButton'
import attendanceTable from '~/components/AttendanceTable'
export default {
  components: {
    displayTime,
    attendanceButton,
    attendanceTable,
  },
  data() {
    return {
      isActive: '1',
    }
  },
  methods: {
   change(num) {
     this.isActive = num
   }
 }
}
</script>

<style>
.contents {
  display: flex;
  justify-content:center;
  margin-top: 10%;
}

.navbar {
    box-shadow:0px 0px 5px;
}
</style>
