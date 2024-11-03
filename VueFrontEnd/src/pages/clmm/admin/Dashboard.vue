<template>
  <NavAdminClmm>
    <v-container style="margin-top: 100px;">
      <v-row justify="center">
        
        <v-col cols="12" sm="4" md="4">
          <RouterLink to="/admin/nguoi-choi-trong-ngay" class="card-link" style="text-decoration: none;">
            <v-card style="background-color: orange;">
              <v-row>

                <v-col cols="12" sm="4">
                  <v-card-actions class="justify-center">
                    <v-icon style="font-size: 70px;">mdi mdi-account-check</v-icon>
                  </v-card-actions>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-card-actions class="justify-center" style="font-size: 30px; font-weight: bolder;">
                      12.000
                  </v-card-actions>
                  <v-card-actions class="justify-center">
                    03-11-2024
                  </v-card-actions>
                </v-col>

              </v-row>
            </v-card>
          </RouterLink>

          <v-card>
            <v-card-actions class="justify-center">
              Số người chơi trong ngày
            </v-card-actions>
          </v-card>
        </v-col>  

        <v-col cols="12" sm="4" md="4">
          <RouterLink to="/admin/doanh-thu-trong-ngay" style="text-decoration: none;">
            <v-card style="background-color: green;">
              <v-row>
                <v-col cols="12" sm="4">
                  <v-card-actions class="justify-center">
                    <v-icon style="font-size: 70px;">mdi mdi-currency-usd</v-icon>
                  </v-card-actions>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-card-actions class="justify-center" style="font-size: 30px; font-weight: bolder;">
                      12.000 VNĐ
                  </v-card-actions>
                  <v-card-actions class="justify-center">
                    03-11-2024
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </RouterLink>

          <v-card>
            <v-card-actions class="justify-center">
              Doanh thu trong ngày
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4" md="4">
          <RouterLink to="/admin/doanh-thu-trong-ngay" style="text-decoration: none;">
            <v-card style="background-color: gray;">
              <v-row>
                <v-col cols="12" sm="4">
                  <v-card-actions class="justify-center">
                    <v-icon style="font-size: 70px;">mdi mdi-bank</v-icon>
                  </v-card-actions>
                </v-col>

                <v-col cols="12" sm="8">
                  <v-card-actions class="justify-center" style="font-size: 30px; font-weight: bolder;">
                      5 TK
                  </v-card-actions>
                  <v-card-actions class="justify-center">
                    03-11-2024
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-card>
          </RouterLink>

          <v-card>
            <v-card-actions class="justify-center">
              Tài khoản ngân hàng
            </v-card-actions>
          </v-card>
        </v-col>

      </v-row>

    </v-container>
  </NavAdminClmm>
</template>
<script>
import NavAdminClmm from './layout/NavAdminClmm.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    NavAdminClmm: NavAdminClmm
  }
}
</script>
<style scope>
.flex-table {
  display: flex;
  flex-grow: 1;
  width: 100%;
}
</style>