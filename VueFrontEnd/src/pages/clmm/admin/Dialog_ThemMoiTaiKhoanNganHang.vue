<template>
    <v-dialog
      v-model="this.$props.setDialog"
      max-width="600"
    >
      <v-card
      title="Thêm mới tài khoản ngân hàng"
      >
        <v-col>
          <v-text-field label="Số tài khoản" variant="outlined" ></v-text-field>
          <v-text-field label="Số tài khoản" variant="outlined" ></v-text-field>
        </v-col>
        <v-divider></v-divider>
        <v-row>
          <v-col cols="4">
            <v-btn>SAVE</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
</template>
<script>
  export default {
    props:{
      setDialog:{
        type: Boolean,
      }
    },
    data () {
      return {
        dialog: false
      }
    },
    methods:{
      setValueDialog(){
        this.$emit("setDialogs", false)
      }
    },
    watch:{
      // setDialog(dialogs){
      //    this.dialog = dialogs
      //   // tuong trung cho useEffect trong Reactjs
      // }
    },
    components:{
      
    }
  }
</script>
<style scope>

</style>