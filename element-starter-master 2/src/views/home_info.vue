<template>
  <div class="home-info">
	<el-menu  mode="horizontal" background-color="#e0e0e0" text-color="#424242" active-text-color="#009688" @select="handleSelect">
	  <el-menu-item index="1" >实验室简介</el-menu-item>
	  <el-menu-item index="2">教师介绍</el-menu-item>
	  <el-menu-item index="3">方向详情</el-menu-item>
	  <el-menu-item index="4">实验室纪律</el-menu-item>
	</el-menu>
	
	<div v-if="key==1">
	  数据库简介
	</div>
	<div v-else-if="key==2">
	  教师介绍
	</div>
	<div v-else-if="key==3">
	  方向详情
	</div>
	<div v-else-if="key==4">
	  实验室纪律
	</div>
  </div>
</template>

<script>
  export default {
	data(){
	  return{
	  	key:'1'
	  }
	},
	methods:{
	  handleSelect(key) {
	  	this.key = key;
	  }
	},
  }
</script>

<style lang="scss" scoped>
  .home-info{
	.el-menu-item{
	  margin-left: 50px;
	}
  }
</style>