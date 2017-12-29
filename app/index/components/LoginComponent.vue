<template>
	<div>
	<div id="login-wrap">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm">
		  <el-form-item prop="username">
		    <el-input type="text"  v-model="ruleForm.username" placeholder="请输入用户名" prefix-icon="el-icon-tickets" class="form-input" clearable></el-input>
		  </el-form-item>
		  <el-form-item prop="password">
		    <el-input type="password"  v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-edit" class="form-input" clearable></el-input>
		  </el-form-item>
		  <el-form-item>
		    <el-button type="success" plain class="form-button" @click="loginSubmit">登录账号</el-button>
		  </el-form-item>
		</el-form>
	</div>
	</div>
</template>

<script>
	import Vue from 'Vue';
	import { Button, Input, Form, FormItem } from 'element-ui';
	Vue.use(Button);
	Vue.use(Input);
	Vue.use(Form);
	Vue.use(FormItem);

	const LoginComponent = {
		created(){
			
		},
		data(){
			return {
				ruleForm: {
		          username: '',
		          password: ''
		        },
		        rules: {
		          username: [
		            { required: true, message: '请输入用户名', trigger: 'blur' }
		          ],
		          password: [
		            { required: true, message: '请输入密码', trigger: 'blur' }
		          ],
		      	},
			}
		},
		methods:{
			initData(){
				
			},
			loginSubmit(){
				var name = this.ruleForm.username;
				var passwd = this.ruleForm.password;
				var submitData = {
					account: name,
					passwd: passwd
				};
				if(name && passwd){
					this.$ajax({
						method:'post',
						url:'https://www.nwsuaforchestra.cn/myLogin',
						data:submitData
					}).then((res) => {
						// console.log(res);
						if(res.status === 200 && res.data.success){
							sessionStorage.userAuth = res.data.sessionid;
							this.$message({
								type: 'success',
								message: '登录成功',
								duration: '1500',
								center: true
							});
							this.$router.push({path:'/'});
						}else{
							this.$message({
								type: 'error',
								message: '登录失败',
								duration: '1500',
								center: true
							});
							sessionStorage.clear();
						}
					}).catch((e) => {
						this.$message({
							type: 'error',
							message: '登录失败',
							duration: '1500',
							center: true
						});
						sessionStorage.clear();
					})
				}
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
	#login-wrap{
		width: 500px;
		margin: 100px auto;
	}
	.form-input{
		margin: 10px auto;
	}
	.form-button{
		margin-top: 10px;
	}
</style>