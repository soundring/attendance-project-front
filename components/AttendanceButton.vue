<template>
    <div>
        <input type="button" value="出勤" @click="notification">
        <input type="button" value="退勤" @click="leaveNotification">
    </div>    
</template>

<script>
export default {
    methods: {
        notification() {
            this.$toast.info('出勤しました')
        },
        leaveNotification() {
            this.$toast.error('退社しました')
        }
    }
}
</script>

<style>
</style>
