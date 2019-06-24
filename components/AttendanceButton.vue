<template>
    <div class="attendance_button">
        <input type="image" src="https://conoha.mikumo.com/wp-content/themes/conohamikumo/images/guideline/fanfic/fanfic_13.png" width="100px" class="go_work_button" value="出勤" @click="notification">
        <input type="image" src="https://conoha.mikumo.com/wp-content/themes/conohamikumo/images/guideline/fanfic/fanfic_16.png" width="100px" class="leave_work_button" value="退勤" @click="leaveNotification">
    </div>    
</template>

<script>
export default {
    methods: {
        notification() {
            this.$toast.info('出社打刻をしました')
        },
        leaveNotification() {
            this.$toast.error('退社打刻をしました')
        }
    }
}
</script>

<style>
</style>
