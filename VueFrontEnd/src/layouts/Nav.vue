<template>
    <v-app-bar color="teal-darken-4" image="https://picsum.photos/1920/1080?random">
        <template v-slot:image>
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template>

        <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Đóng mở nước online</v-app-bar-title>

        <v-spacer></v-spacer>

        <!-- <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn> -->

        <!-- <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn> -->
        <v-menu>
            <template v-slot:activator="{ props, }">
                <v-btn 
                    icon
                    v-bind="props"
                >
                <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <template>

            </template>
            <v-list >
                <v-list-item 
                    v-for="(item, index) in items"
                    :key="index"
                    :value="index"
                    @click="menuActionClick"
                    >
                    <v-list-item-title data-id="log-out">{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
<script>
import accountController from '@/services/AccountController';
import Cookies from 'js-cookie';
export default {
    data: () => ({
      items: [
        { title: 'Đăng xuất'}
      ],
    }),
    methods:{
        onLogout(){
            
        },
        menuActionClick(action){
            console.log(action.target.dataset.id)
            switch(action.target.dataset.id){
                case "log-out":
                    accountController.logout()
                    window.location.href = "/login"
                    break;
            }
        }
    },
    // name: "App",
    // data() {
    //     return {
    //         appTitle: 'Đóng mở nước online',
    //         sidebar: false,
    //         menuItems: [
    //             { title: 'Home', path: '/home', icon: 'home' },
    //             { title: 'Sign Up', path: '/signup', icon: 'face' },
    //             { title: 'Sign In', path: '/signin', icon: 'lock_open' }
    //         ]
    //     }
    // },

};
</script>
