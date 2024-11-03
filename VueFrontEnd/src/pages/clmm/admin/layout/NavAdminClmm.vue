<template>
    <v-app>
        <v-sheet>
            <v-app-bar :elevation="2" style="background-color: aquamarine;">
                <template v-slot:prepend>
                    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                </template>

                <v-app-bar-title>
                    <router-link to="/admin" style="text-decoration: none;">
                        CLMM
                    </router-link>
                </v-app-bar-title>
                <template v-slot:append>
                    <v-btn icon="mdi-heart"></v-btn>

                    <v-btn icon="mdi-magnify"></v-btn>

                    <v-btn icon="mdi-dots-vertical"></v-btn>
                </template>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" expand-on-hover rail>
                <v-divider></v-divider>

                <v-list density="compact" nav>
                    <router-link to="/admin">
                        <v-list-item  prepend-icon="mdi mdi-monitor-dashboard" title="Trang chủ" value="TrangChu"></v-list-item>
                    </router-link>

                    <router-link to="/admin/nguoi-choi-trong-ngay">
                        <v-list-item prepend-icon="mdi mdi-account-check" title="Người chơi trong ngày"
                            value="ThongKeTrongNgay"></v-list-item>
                    </router-link>

                    <router-link to="/admin/doanh-thu-trong-ngay">
                        <v-list-item prepend-icon="mdi mdi-currency-usd" title="Doanh thu trong ngày"
                            value="DoanhThuTrongNgay"></v-list-item>
                    </router-link>

                    <router-link to="/admin/tai-khoan-ngan-hang">
                        <v-list-item  prepend-icon="mdi mdi-bank" title="Tài khoản ngân hàng" value="TaiKhoanNganHang"></v-list-item>
                    </router-link>
                </v-list>
            </v-navigation-drawer>
        </v-sheet>
        <slot></slot>
    </v-app>
</template>
<script>
export default {
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'About', icon: 'mdi-forum' },
            ],
        }
    },
    components: {

    }

}
</script>
<style scope>
a {
    text-decoration: none;
}
</style>