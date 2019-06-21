<template>
<div>
  <navbar />
  <div class="contents">
    <displayTime />
    <attendanceButton />
  </div>
</div>
</template>

<script>
import displayTime from '~/components/DisplayTime'
import attendanceButton from '~/components/AttendanceButton'
import navbar from '~/components/NavBar'
export default {
  components: {
    displayTime,
    attendanceButton,
    navbar,
  }
}
</script>

<style>
.contents {
  display: flex;
}
</style>
