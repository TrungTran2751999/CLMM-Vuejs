<template>
    <v-card class="pa-12">
        <v-card-actions class="justify-center">
            <h3>Kiểm Tra Mã Giao Dịch</h3> 
        </v-card-actions>
        <v-card-actions  style="display: flex;">
            <v-row class="justify-center">
                <v-col cols="12" sm="11">
                    <v-text-field density="compact" label="Kiểm tra" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="1">
                    <div id="btn-search">
                        <v-btn  variant="outlined">
                            <v-icon style="font-size: larger;">mdi mdi-magnify</v-icon>
                        </v-btn>
                    </div>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-actions class="justify-center" style="background-color: #fcf3cf;">
            Nếu bạn chuyển sai hạn mức tối thiểu và tối đa của trò chơi hoặc sai nội dung, hệ thống không hỗ trợ hoàn tiền!
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {

        }
    }

}
</script>
<style scope>
    .v-text-field{
        padding: 0;
    }
    #btn-search .v-field__input{
        cursor: pointer;
    }
</style>