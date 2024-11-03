<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="100vw" v-if="isHome">
        <v-layout>
            <nav-base></nav-base>
            <v-main>
                <list-kh-no></list-kh-no>
            </v-main>
        </v-layout>
    </v-card>
</template>
<script>
import Nav from '../layouts/Nav.vue'
import TableKhNo from '../components/TableKhNo.vue'
import { util } from '@/services/Util';
    export default{
        data(){
            return {
                isHome: true
            }
        },
        components:{
            NavBase:Nav,
            ListKhNo:TableKhNo
        },
        mounted() {
            // let preUrl = util.getCookie("PreUrl")
            // let hostName =  window.location.hostname + `${window.location.port ? `:${window.location.port}` :""}`
            // let path = preUrl.split(hostName)[1]
            // if(path=="/"){
            //     this.isHome = true
            // }else{
            //     this.$router.push(path)
            // }
        }
    }
</script>
<style scope>

</style>