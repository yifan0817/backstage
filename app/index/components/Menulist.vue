<template id="template-home">
	<div id="menu-list">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
		  <el-menu-item v-for="(item,index) in menuList" :index="''+index" :key="index">
			<router-link :key="item" :to="'/'+item">
				<div>{{item}}</div>
			</router-link>
		  </el-menu-item>
		</el-menu>
	</div>
</template>

<script>
	import Vue from 'Vue';
	import { Menu, MenuItem } from 'element-ui';
	Vue.use(Menu);
	Vue.use(MenuItem);

	export default {
		data() {
			return {
				activeIndex:'0',
				menuList:['users','news','topics','messages','chat','system'],//菜单项
			}
		}
	}
</script>

<style>
	a{
		color: #67c23a;
		text-decoration: none;
	}
</style>