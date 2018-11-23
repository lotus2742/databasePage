<template>
  <div id="app">
	<div class="header">
	  <div class="header-font">数据库理论应用研究室</div>
	</div>
	<div class="main">
	  <el-container>
		<el-aside width="200px">
		 <el-menu router>
		   <el-menu-item index="/home" >
		   <i class="el-icon-third-shouye"></i>
		   <span slot="title" > 首 页 </span>
		 </el-menu-item>
		   <el-menu-item index="/information" >
			 <i class="el-icon-third-ceshishenqing"></i>
			 <span slot="title">编辑信息</span>
		   </el-menu-item>
		 </el-menu>
		</el-aside>
		<el-container>
		  <el-main>
			<router-view></router-view>
		  </el-main>
		  <el-footer style="height: 40px">2017-2018 © 数据库实验室</el-footer>
		</el-container>
	  </el-container>
	</div>
  </div>
</template>

<script>
export default {
  methods: {
  
  }
}
</script>

<style lang="scss" scoped>
  #app{
	min-width: 1300px;
  }
 .header{
   width: 100%;
   background-color: #009688;
   height:150px;
   margin-bottom: 5px;
 }
 .el-container{
   min-height: 660px;
 }
  .header-font{
	color: #fff;
	font-family: Hiragino Sans GB;
	font-size: 40px;
	padding: 45px 30px;
  }
  .el-footer {
   background-color: #fafafa;
   color: #333;
   text-align: center;
   line-height: 40px;
 }

 .el-aside {
   background-color: #F1F1F1;
   color: #333;
   line-height: 200px;
 }

 .el-main {
   background-color: #fafafa;
   color: #333;
   text-align: center;
   line-height: 160px;
   padding: 0 3px;
 }

 body > .el-container {
   margin-bottom: 40px;
 }
 
 
 .el-menu{
   background-color:  #F1F1F1;
 }
  
  .el-menu-item{
	height: 60px;
  }
</style>
