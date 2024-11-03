<template>
    <v-card class="pa-3">
        
        <v-card-actions>
            <div style="size: 10px;">Với mã trò chơi : C hoặc L (nếu đuôi mã giao dịch có các số sau)</div>
        </v-card-actions>
        <v-card-actions class="justify-center">
            <v-table style="width: 700px;" class="table-hdsd table-responsive">
                <thead>
                    <tr>
                        <th class="text-center">NỘI DUNG</th>
                        <th class="text-center">KẾT QUẢ</th>
                        <th class="text-center">TỶ LỆ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas" :key="data.nd">
                        <td class="text-center">{{data.nd}}</td>
                        <td class="text-center">{{ data.kq }}</td>
                        <td class="text-center">{{ data.tl }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-actions>
        <v-card-actions class="justify-center">
            <div style="display: flex;">
                <v-btn style="background-color: #62fb62">Tiền thưởng</v-btn>
                <v-btn>=</v-btn>
                <v-btn style="background-color: orange">Tiền đặt</v-btn>
                <v-btn>x</v-btn>
                <v-btn style="background-color: orange">Tỷ lệ</v-btn>
            </div>
        </v-card-actions>
        <v-card style="background-color: #daebc7;">
            <v-card-actions class="justify-center">
                <div class="pa-3" style="color: black;">Chỉ chuyển vào các mã QR đang hiện trên web và có tình trạng là Hoạt động. Không chuyển vào số dùng để trả thưởng.</div>
            </v-card-actions>
        </v-card>
        <v-card-actions class="justify-center">
            <v-btn style="background-color: cyan;">
                <v-icon>mdi-account-group-outline</v-icon>
                 Admin Hỗ trợ lỗi
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <div style="size: 10px;">Chuyển tiền vào 1 trong các mã QR sau:</div>
        </v-card-actions>
        <v-card-actions class="justify-center">
            <v-table style="width: 900px;" class="table-hdsd table-responsive">
                <thead>
                    <tr>
                        <th class="text-center">QR</th>
                        <th class="text-center">TÊN TÀI KHOẢN</th>
                        <th class="text-center">HẠN MỨC</th>
                        <th class="text-center">SỐ LẦN</th>
                        <th class="text-center">TỐI THIỂU</th>
                        <th class="text-center">TỐI ĐA</th>
                        <th class="text-center">TRẠNG THÁI</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datass" :key="data.qr">
                        <td class="text-center">{{data.qr}}</td>
                        <td class="text-center">{{ data.ttk }}</td>
                        <td class="text-center">{{ data.hm }}</td>
                        <td class="text-center">{{ data.sl }}</td>
                        <td class="text-center">{{ data.tt }}</td>
                        <td class="text-center">{{ data.td }}</td>
                        <td class="text-center">{{ data.tt }}</td>
                    </tr>
                </tbody>
            </v-table>
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            datas:[
                {
                    nd: "ahihi",
                    kq: 1,
                    tl: "22"
                }
            ],
            datass:[
                {
                    qr: "ahihi",
                    ttk: "tsdsdcccccccccccccccccccccccc",
                    hm: "22",
                    sl: "34",
                    tts: "bb",
                    td:"nn",
                    tt:"ahii"
                }
            ]
        }
    }

}
</script>
<style scope>
    .table-hdsd th, 
    .table-hdsd td{
        border: 1px solid grey;
    }
    .table-hdsd th{
        background-color: #653a95;
        color: white;
    }
    .v-data-table { 
        overflow-x: auto;
    }
</style>