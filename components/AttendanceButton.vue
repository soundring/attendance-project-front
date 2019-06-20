<template>
    <div>
        <input type="button" value="出勤" @click="notification">
        <input type="button" value="退勤">
    </div>    
</template>

<script>
export default {
    methods: {
        notification() {
            this.$toast.show('出勤しました')
        }
    }
}
</script>

<style>
.toasted {
    background-color: blue;
}
</style>
