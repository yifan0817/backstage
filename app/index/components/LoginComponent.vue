<template>
	<div>
		<el-button type="success">默认按钮</el-button>
	</div>
</template>

<script>
	import Vue from 'Vue';
	import { Button, Select } from 'element-ui';
	Vue.use(Button);

	const LoginComponent = {
		created(){
			
		},
		data(){
			return {
				content:'loginloginloginlogin'
			}
		},
		methods:{
			initData(){
				alert('Get News Data!');
			}
		}
	};

	export default LoginComponent;
</script>

<style>
	.slide-fade-enter-active {
	  transition: all .3s ease;
	}
	.slide-fade-enter {
	  transform: translateX(10px);
	  opacity: 0;
	}
</style>