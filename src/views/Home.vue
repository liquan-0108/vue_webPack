<template>
  <div class="home">
    <p class="my_lala">啦啦啦啦啦啦</p>
    <p class="my_lala">测试一下CI/CD,咔咔咔</p>
    <p class="my_lala">代理路径返回403，jenkins hooks未触发，jenkins启用代理兼容性再测试一下CI/CD,咔咔咔</p>
    <p class="my_lala">github webhooks 配置Secret，看看能不能解决403</p>
    <p class="my_lala">github webhooks 配置Secret，看看能不能解决403</p>
    <p class="my_lala">github webhooks 配置Secret，看看能不能解决403</p>
    <p class="my_lala">github webhooks 配置Secret，看看能不能解决403</p>
    <p class="my_lala">github webhooks 配置Secret，看看能不能解决403</p>
    <img alt="Vue logo" src="../assets/logo.png" class="my_img"/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { Button } from 'vant';

export default {
  name: "Home",
  components: {
    HelloWorld,
    [Button.name]: Button
  }
};
</script>
<style lang='less' scoped>
.my_lala{
  color: @primary-color;
}
  .my_img{
    width: 30px;
  }
</style>