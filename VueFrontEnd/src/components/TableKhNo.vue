<template>
  <!-- <v-text-field 
  v-model="searchTool" 
  density="compact" 
  label="Search" 
  prepend-inner-icon="mdi-magnify" 
  variant="solo-filled"
  flat hide-details single-line></v-text-field> -->

  <filter-app
    @filter = filter
    :is-disabled="loading"
  ></filter-app>

  <v-data-table-server height="60vh" 
    fixed-header 
    :items-per-page="itemsPerPage" 
    :headers="headers" 
    :items="serverItems"
    :items-length="totalItems" 
    :loading="loading" 
    :items-per-page-options="itemsPerPageOption" 
    :search="searchTool"
    return-object 
    show-select 
    v-model="selected" 
    @update:options="loadItems">
    <template v-slot:[`headers.Idkh`]>
      <tr>
        <th>Idkh</th>
        <th>Tên khách hàng</th>
        <th>Tổng tiền</th>
        <th>M3</th>
        <th>Tháng</th>
        <th>Năm</th>
        <th>Địa chỉ</th>
      </tr>
    </template>
    <template v-slot:[`item.Idkh`]="{item}">
      <tr>
        <td style="font-weight: bold;">{{ item.Idkh }}</td>
      </tr>
    </template>

    <template v-slot:[`item.TenKh`]="{item}">
      <tr>
        <td>{{ item.TenKh }}</td>
      </tr>
    </template>

    <template v-slot:[`item.TongTien`]="{item}">
      <tr>
        <td style="font-weight: bold;">{{ new Intl.NumberFormat("de-DE").format(item.TongTien) }}</td>
      </tr>
    </template>

    <template v-slot:[`item.M3TinhTien`]="{item}">
      <tr>
        <td>{{ new Intl.NumberFormat("de-DE").format(item.M3TinhTien) }}</td>
      </tr>
    </template>


    <template v-slot:loading>
      <v-skeleton-loader type="table-row@10"></v-skeleton-loader>
    </template>
  </v-data-table-server>

</template>
<script>
import { homeController } from '@/services/HomeController'
import Filter from './Filter.vue';
import _ from 'lodash'
export default {
  data: () => ({
    selected: [],
    itemsPerPage: 10,
    page: 0,
    itemsPerPageOption: [
      { "value": 5, "title": '5' },
      { "value": 10, "title": '10' },
      { "value": 50, "title": '50' },
      { "value": 100, "title": '100' },
    ],
    headers: [
      { title: 'Idkh', key: 'Idkh', align: 'start', sortable:false},
      { title: 'Tên khách hàng', key: 'TenKh', align: 'start' ,sortable:false},
      { title: 'Tổng tiền', key: 'TongTien', align: 'start' ,sortable:false},
      { title: 'M3', key: 'M3TinhTien', align: 'start' ,sortable:false},
      { title: 'Tháng', key: 'Thang', align: 'start' ,sortable:false},
      { title: 'Năm', key: 'Nam', align: 'start' ,sortable:false},
      { title: 'Địa chỉ', key: 'DiaChi', align: 'start' ,sortable:false},
    ],
    search: "",
    serverItems: [],
    loading: true,
    totalItems: 0,
    filters: {
        Idkh:"",
        Ky: new Date().getMonth(),
        Nam: new Date().getFullYear(),
        DuongPho:{
            TenDP:"",
            MaDP:""
        },
        KhuVuc:{
            TenKV:"",
            MaKV:""
        }
    }
  }),
  components:{
    FilterApp: Filter
  },
  methods: {
    loadItems({ page, itemsPerPage }) {
      this.loading = true
      const body = {
        Idkh: this.filters.Idkh,
        Start: page,
        Limit: itemsPerPage,
        Ky: this.filters.Ky,
        Nam: this.filters.Nam,
        DuongPho: this.filters.DuongPho.TenDP,
        KhuVuc: this.filters.KhuVuc.TenKV
      }
      homeController.getKhConNo(body)
        .then((res) => {
          this.serverItems = res.ListKhChuaTT
          this.totalItems = res.Count
          this.loading = false
          this.page = page
          this.itemsPerPage = itemsPerPage
      })
    },
    filter(param){
      this.loading = true
      this.filters = param
      const body = {
        Idkh: this.filters.Idkh,
        Start: 0,
        Limit: this.itemsPerPage,
        Ky: this.filters.Ky,
        Nam: this.filters.Nam,
        DuongPho: this.filters.DuongPho.TenDP,
        KhuVuc: this.filters.KhuVuc.TenKV
      }
      homeController.getKhConNo(body)
        .then((res) => {
          this.serverItems = res.ListKhChuaTT
          this.totalItems = res.Count
          this.loading = false
      })
    },
    
  },
  computed:{
    searchTool:{
      get () { return this.search },
      set: _.debounce(function (value) {
        this.search = value 
      }, 300)
    }
  }
}
</script>
<style>
  .v-data-table__td{
    border: 1px solid grey;
    border-left: none;
  }
  .v-data-table__th{
    background-color:rgb(208, 213, 253) !important;
  }
</style>