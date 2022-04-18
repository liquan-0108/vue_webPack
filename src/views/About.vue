<template>
  <div>
    <input type="text" name="" id="" :value="value">
  </div>
</template>
<script>

export default {
  data() {
    return {
      value:''
    }
  },
   created() {
  },
  activated(){
    console.log('active');
  },
  mounted(){},
  computed:{},
  methods:{
    },
}
</script>
<style lang='less' scoped>
  
</style>