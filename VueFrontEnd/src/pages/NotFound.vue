<template>
    <v-empty-state
    action-text="Quay lại"
    headline="Whoops, 404"
    title="Trang không tìm thấy"
    text="Không tìm thấy trang"
    @click:action="onBack"
    ></v-empty-state>
</template>
<script>
    export default{
        methods:{
            onBack(){
                this.$router.push({name:"home-route"})
            }
        }
    }
</script>