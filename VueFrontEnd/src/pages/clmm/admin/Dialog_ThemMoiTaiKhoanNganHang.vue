<template>
    <v-dialog
      v-model="dialog"
    >
    <v-btn @click="setValueDialog">ahihi</v-btn>
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
        dialog: this.setDialog
      }
    },
    methods:{
      setValueDialog(){
        this.dialog = false
        this.$emit("setDialogs", this.dialog)
      }
    },
    watch:{
      setDialog(dialogs){
         this.dialog = dialogs
        // tuong trung cho useEffect trong Reactjs
      }
    },
    components:{
      
    }
  }
</script>
<style scope>

</style>