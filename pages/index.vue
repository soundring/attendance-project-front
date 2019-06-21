<template>
<div>
  <navbar />
  <div class="contents">
    <displayTime />
    <attendanceButton />
  </div>
   <attendanceTable />
</div>
</template>

<script>
import displayTime from '~/components/DisplayTime'
import attendanceButton from '~/components/AttendanceButton'
import navbar from '~/components/NavBar'
import attendanceTable from '~/components/AttendanceTable'
export default {
  components: {
    displayTime,
    attendanceButton,
    navbar,
    attendanceTable,
  }
}
</script>

<style>
.contents {
  display: flex;
}
</style>
