<template>
  <nav-admin-clmm>
    <v-container style="margin-top: 50px;">
      <v-breadcrumbs :items="itemBreadCrumbs">
        <template v-slot:title="{ item }">
          <div style="font-size: small;">{{ item.title }}</div>
        </template>
      </v-breadcrumbs>

      <v-btn 
        style="background-color: green; 
        color: white; 
        margin-bottom: 15px;"
        @click="dialog = true"
        >Thêm mới</v-btn>

      <v-card
        style="padding: 10px"
      >
        <v-data-table
            fixed-header
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
          ></v-data-table>
      </v-card>

    </v-container>
    <Dialog_ThemMoiTaiKhoanNganHang :set-dialog="dialog" @setDialogs = "setDialog"></Dialog_ThemMoiTaiKhoanNganHang>
  </nav-admin-clmm>
</template>
<script>
import Dialog_ThemMoiTaiKhoanNganHang from './Dialog_ThemMoiTaiKhoanNganHang.vue';
import NavAdminClmm from './layout/NavAdminClmm.vue';

export default {
  data () {
    return {
      dialog: false,
      search: '',
      headers: [
        {
          title: 'Dessert (100g serving)',
          align: 'start',
          sortable: true,
          value: 'name',
        },
        { title: 'Calories', value: 'calories', sortable: true, },
        { title: 'Fat (g)', value: 'fat', sortable: true, },
        { title: 'Carbs (g)', value: 'carbs', sortable: true, },
        { title: 'Protein (g)', value: 'protein', sortable: true, },
        { title: 'Iron (%)', value: 'iron', sortable: true, },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: 1,
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: 1,
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: 7,
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: 8,
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: 16,
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: 0,
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: 2,
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: 45,
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: 22,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: 6,
        },
      ],
      itemBreadCrumbs: [
        {
          title: 'Trang chính',
          disabled: false,
          href: '/admin',
        },
        {
          title: 'Thống kê người chơi',
          disabled: false,
          href: '/admin/nguoi-choi-trong-ngay',
        }
      ],
    }
  },
  components:{
    NavAdminClmm: NavAdminClmm,
    Dialog_ThemMoiTaiKhoanNganHang: Dialog_ThemMoiTaiKhoanNganHang
  },
  methods:{
    setDialog(value){
      this.dialog = value
      console.log("huhuh")
    }
  }
}
</script>
<style scope>
.flex-table {
  display: flex;
  flex-grow: 1;
  width: 100%;
}</style>