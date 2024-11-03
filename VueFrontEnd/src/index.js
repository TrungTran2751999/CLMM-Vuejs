import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import HomeClmm from "./pages/clmm/HomeClmm.vue";
import Login from "./pages/Login.vue";
import NotFound from "./pages/NotFound.vue";
import { util } from "./services/Util";
import Register from "./pages/Register.vue";
import Nav from "./layouts/Nav.vue";
import Dashboard from "./pages/clmm/admin/Dashboard.vue";
import NguoiChoiTrongNgay from "./pages/clmm/admin/NguoiChoiTrongNgay.vue";
import DoanhThuTrongNgay from "./pages/clmm/admin/DoanhThuTrongNgay.vue";
import TaiKhoanNganHang from "./pages/clmm/admin/TaiKhoanNganHang.vue";
const checkBefore = (to, from ,next)=>{
    let result = util.checkJWTToken();
    if(result){
        next()
    }else{
        next("/login")
    }
}
const routes = [
    {
        path: "/",
        name: "home-route",
        component: HomeClmm,
        //beforeEnter: checkBefore
    },
    {
        path: "/admin",
        name: "dashboard-admin",
        component: Dashboard,
        //beforeEnter: checkBefore
    },
    {
        path: "/admin/nguoi-choi-trong-ngay",
        name: "nguoi-choi-trong-ngay",
        component: NguoiChoiTrongNgay,
        //beforeEnter: checkBefore
    },
    {
        path: "/admin/doanh-thu-trong-ngay",
        name: "doanh-thu-trong-ngay",
        component: DoanhThuTrongNgay,
        //beforeEnter: checkBefore
    },
    {
        path: "/admin/tai-khoan-ngan-hang",
        name: "tai-khoan-ngan-hang",
        component: TaiKhoanNganHang,
        //beforeEnter: checkBefore
    },
    {
        path: "/login",
        name: "login-route",
        component: Login
    },
    {
        path: "/clmm",
        name: "home-clmm-route",
        component: HomeClmm
    },
    {
        path: "/register",
        name: "home-clmm-register-route",
        component: Register
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router