<template>
    <v-dialog
      v-model="dialog"
    >
    <v-btn>ahihi</v-btn>
    </v-dialog>
</template>
<script>
  export default {
    data () {
      return {
        dialog: this.setDialog
      }
    },
    props:{
      setDialog:{
        type: Boolean,
      }
    },
    methods:{
      setValueDialog(){
        
      }
    },
    watch:{
      setDialog(){
         // tuong trung cho useEffect trong Reactjs
      }
    },
    components:{
      
    }
  }
</script>
<style scope>

</style>