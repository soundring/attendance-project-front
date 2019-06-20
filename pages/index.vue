<template>
<div class="contents">
  <displayTime />
  <attendanceButton />
</div>
</template>

<script>
import displayTime from '~/components/DisplayTime.vue'
import attendanceButton from '~/components/AttendanceButton'
export default {
  components: {
    displayTime,
    attendanceButton,
  }
}
</script>

<style>
.contents {
  display: flex;
}
</style>
