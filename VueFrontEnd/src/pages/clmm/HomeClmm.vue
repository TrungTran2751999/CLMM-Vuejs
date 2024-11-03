<template>
    <v-card>
        <v-card-actions style="background-color: #6b3e9e; height: 200px;">
           
        </v-card-actions>
    </v-card>
    <v-container
        style="width: 1200px;"
        fluid
    >
        <header-home-clmm cols="12" sm="12" style="margin-top: -100px;"></header-home-clmm>
        <v-row style="margin-top: 11px;">
            <v-col cols="12" sm="12">
                <h-d-s-d-clmm></h-d-s-d-clmm>
            </v-col>
        </v-row>
        <v-row style="margin-top: 11px;">
            <v-col cols="12" sm="12">
                <lich-su-thang-clmm></lich-su-thang-clmm>
            </v-col>
        </v-row>
        <kiem-tra-ma-g-d-clmm style="margin-top: 20px;"></kiem-tra-ma-g-d-clmm>
    </v-container>
</template>
<script>
    import HeaderHomeClmm from './HeaderHomeClmm.vue'
    import HDSDClmm from './HDSDClmm.vue';
    import LichSuThangClmm from './LichSuThangClmm.vue';
    import KiemTraMaGDClmm from './KiemTraMaGDClmm.vue';
    export default {
        data(){
            return{

            }
        },
        components:{
            HeaderHomeClmm:HeaderHomeClmm,
            HDSDClmm:HDSDClmm,
            LichSuThangClmm: LichSuThangClmm,
            KiemTraMaGDClmm:KiemTraMaGDClmm,
        }
    }
</script>
<style scope>
    body {
        background-color: #f2f2f2;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
</style>