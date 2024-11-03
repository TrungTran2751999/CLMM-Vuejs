<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="filter-fill" sm="12" xs="12" xxl="12" lg="2">
                <v-text-field v-model="filter.Idkh" label="Idkh, Tên khách hàng" color="primary" type="text"></v-text-field>
            </v-col>
            <v-col cols="12" class="filter-fill" sm="12" xs="12" xxl="12" lg="2">
                <v-text-field v-model="filter.Ky" label="Kỳ" color="primary" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" class="filter-fill" sm="12" xs="12" xxl="12" lg="2">
                <v-text-field v-model="filter.Nam" label="Năm" color="primary" type="number"></v-text-field>
            </v-col>
            <v-col cols="12" class="filter-fill" sm="12" xs="12" xxl="12" lg="2">
                <v-autocomplete 
                    clearable
                    chips
                    multiple
                    label="Đường phố"
                    :items="filterDuongPho"
                    no-data-text="Không có dữ liệu"
                    @update:search="onChangeDuongPho"
                    v-model="filter.DuongPho.TenDP"
                    hide-no-data
                >
                </v-autocomplete>
            </v-col>
            <v-col cols="12" class="filter-fill" sm="12" xs="12" xxl="12" lg="2">
                <v-autocomplete 
                    clearable
                    chips
                    multiple
                    label="Khu vực"
                    :items="filterKhuVuc"
                    no-data-text="Không có dữ liệu"
                    @update:search="onChangeKhuVuc"
                    v-model="filter.KhuVuc.TenKV"
                    hide-no-data
                >
                </v-autocomplete>
            </v-col>
        </v-row>
        <v-row class="row-2-filter">
            <v-btn 
                :disabled="this.$props.isDisabled || loadingExportExcel" 
                @click="onTriggerFilter"
            >Lọc</v-btn>
            <v-btn 
                class="btn-excel" 
                @click="onExportExcel"
                :disabled="this.$props.isDisabled || loadingExportExcel" 
            >
              <div v-if="loadingExportExcel">
                <v-progress-circular indeterminate></v-progress-circular>
              </div>
              <div v-else>Xuất excel</div>
            </v-btn>
        </v-row>
    </v-container>
</template>
<script>
import { homeController } from '@/services/HomeController';
import { util } from '@/services/Util';
export default {
    data() {
        return {
            filter: {
                Idkh: "",
                Ky: new Date().getMonth(),
                Nam: new Date().getFullYear(),
                DuongPho:{
                    TenDP:[],
                    MaDP:""
                },
                KhuVuc:{
                    TenKV:[],
                    MaKV:""
                }
            },
            preValDuongPho:"",
            filterDuongPho:[],
            filterKhuVuc:[],
            timeDeboucing: null,
            loadingExportExcel: false
        }
    },
    props:{
        isDisabled:{
            type:String,
        }
    },
    methods: {
        onTriggerFilter() {
            this.$emit("filter", this.filter)
        },  
        onChangeDuongPho(value){
            clearTimeout(this.timeDeboucing)
            this.filterDuongPho = Array.from(new Set(this.filterDuongPho))
            this.timeDeboucing = setTimeout(()=>{
                let existData = false
                for(let data of this.filterDuongPho){
                    if(data.includes(value)){
                        existData = true
                        break
                    }
                }
                if(!existData){
                    homeController.searchDuongPho(value)
                        .then((res)=>{
                            res.map((e)=>{
                                this.filterDuongPho.push(`${e.TenDP}`)
                                this.filterDuongPho = Array.from(new Set(this.filterDuongPho))
                            })
                    })
                }
            }, 500)
        },
        onChangeKhuVuc(value){
            clearTimeout(this.timeDeboucing)
            this.filterKhuVuc = Array.from(new Set(this.filterKhuVuc))
            this.timeDeboucing = setTimeout(()=>{
                let existData = false
                for(let data of this.filterKhuVuc){
                    if(data.includes(value)){
                        existData = true
                        break
                    }
                }
                if(!existData){
                    homeController.searchKhuVuc(value)
                        .then((res)=>{
                            res.map((e)=>{
                                this.filterKhuVuc.push(`${e.TenKV}`)
                                this.filterKhuVuc = Array.from(new Set(this.filterKhuVuc))
                            })
                    })
                }
            }, 500)
        },
        onExportExcel(){
            const body = {
                Idkh: this.filter.Idkh,
                Ky: this.filter.Ky,
                Nam: this.filter.Nam,
                DuongPho: this.filter.DuongPho.TenDP,
                KhuVuc: this.filter.KhuVuc.TenKV
            }
            this.loadingExportExcel = true
            homeController.getKhConNo(body)
            .then(res=>{
                res.ListKhChuaTT.map(e=>{
                    e.TongTien = new Intl.NumberFormat("de-DE").format(e.TongTien)
                    e.M3TinhTien = new Intl.NumberFormat("de-DE").format(e.M3TinhTien)
                })
                util.exportExcel(res?.ListKhChuaTT)
                this.loadingExportExcel = false
            })
        }
    },
}
</script>
<style scoped>
.btn-filter {
    padding-top: 0 !important;
}

.filter-fill {
    margin-bottom: 0 !important;
    padding-bottom: 0 !important;
}

.row-2-filter {
    margin-top: 0 !important;
}
.btn-excel{
    background-color: green;
    margin-left: 10px;
}
</style>