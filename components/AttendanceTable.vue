<template>
    <div class="attendance_table">
        <table class="table is-bordered">
            <thead>
                <tr>
                <th>日付</th>
                <th>名前</th>
                <th>始業時間</th>
                <th>終業時間</th>
                <th>実働時間</th>
                <th>残業</th>
                </tr>
            </thead>
            <tbody>
                    <tr v-for="n in 10" :key="n">
                        <td>6/21</td>
                        <td>音成優樹</td>
                        <td>9:00</td>
                        <td>18:00</td>
                        <td>8</td>
                        <td>{{n}}</td>
                    </tr>
            </tbody>
          
        </table>
    </div>    
</template>

<script>
export default {
    data() {
        return {
            n: 0,
        }
    }
}
</script>

<style>
.attendance_table {
    text-align: -webkit-center;
}
</style>
