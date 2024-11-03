<template>
  <v-card>
        <v-card-actions style="background-color: #6b3e9e; height: 200px;" class="justify-center">
          
        </v-card-actions>
  </v-card>
  <v-card class="mx-auto pa-8 pb-8" 
          elevation="8" 
          max-width="448" 
          rounded="lg"
          style="margin-top:-80px;" 
          >
    <v-card
      class="mx-auto pa-2" 
      elevation="2" 
      max-width="448" 
      rounded="lg"
      style="margin-bottom: 20px;"
      >
      <v-card-actions class="justify-center">
        <h2>ĐĂNG KÝ</h2>
      </v-card-actions>
    </v-card>

    <div class="text-subtitle-1 text-medium-emphasis">Số điện thoại <span style="color: red;">*</span></div>

    <v-form 
      v-model="form" @submit.prevent="onSubmit"
      >
      <v-text-field 
        density="compact" 
        placeholder="Tài khoản" 
        prepend-inner-icon="mdi-email-outline" 
        variant="outlined"
        v-model="info.Username" 
        :rules="[required]" 
        :readonly="loading" 
        clearable>
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">
        Mật khẩu <span style="color: red;"> *</span>
      </div>

      <v-text-field 
        :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
        density="compact" 
        placeholder="Mật khẩu" 
        prepend-inner-icon="mdi-lock-outline" 
        variant="outlined"
        :rules="[required]" 
        :readonly="loading" 
        @click:append-inner="visible = !visible" 
        v-model="info.Password"
        clearable>
      </v-text-field>

      <div class="text-subtitle-1 text-medium-emphasis">
        Tài khoản ngân hàng <span style="color: red;"> *</span>
      </div>

      <v-text-field 
        density="compact" 
        placeholder="Tài khoản ngân hàng" 
        prepend-inner-icon="mdi-bank" 
        variant="outlined"
        :rules="[required]" 
        :readonly="loading" 
        @click:append-inner="visible = !visible" 
        v-model="info.TaiKhoanNganHang"
        clearable>
      </v-text-field>
      

      <div v-if="!isSuccess" style="color: red; font-size: small;">Tên đăng nhập hoặc mật khẩu không chính xác</div>
      
      <v-btn 
        class="mb-8" 
        color="blue" 
        size="large" 
        variant="tonal" 
        type="submit" 
        block 
        :readonly="loading"
        :disabled="!form" @click.once="onSubmit">
        <div v-if="loading">
          <v-progress-circular indeterminate></v-progress-circular>
        </div>
        <div v-else> Đăng ký</div>
      </v-btn>

    </v-form>
  </v-card>
</template>
<script>
import Cookies from 'js-cookie';
import accountController from '@/services/AccountController';
import { util } from '@/services/Util';
export default {
  data: () => ({
    visible: false,
    form: false,
    info: {
      Username: "",
      Password: "",
      TaiKhoanNganHang:""
    },
    loading: false,
    isSuccess: true,
  }),
  methods: {
    onSubmit() {
      // if (!this.form) return
      // this.loading = true
      // let body = this.info
      // this.isLogin = true
      // setTimeout(() => {
      //   accountController.login(body)
      //     .then(res => {
      //       this.loading = false
      //       if (Array.isArray(res)) {
      //         this.isSuccess = false
      //       } else {
      //         Cookies.set('tokenJWT', res, {
      //           secure: true,
      //           sameSite: 'strict'
      //         })
      //         window.location.href = "/"
      //       }
      //     })
      // })
    },
    required(v) {
      this.isSuccess = true;
      return !!v || 'Không được bỏ trống'
    }
  },
  created: () => {
    let checkJWT = util.checkJWTToken();
    if (checkJWT) {
      window.location.href = "/"
    }
  },
}
</script>