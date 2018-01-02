<template>
	<transition name="slide-fade">
		<div>
			<el-table :data="usersData" height="250" border style="width: 90%;margin: 5% auto;" v-loading="loading">
				<el-table-column prop="avatarUrl" label="头像" width="60">
					 <template slot-scope="scope">
	                    <img :src="scope.row.avatarUrl" width="40" height="40" class="head_pic"/>
	                </template>
				</el-table-column>
			    <el-table-column prop="username" label="用户名" width="120"></el-table-column>
			    <el-table-column prop="sex" label="性别" width="120"></el-table-column>
			    <el-table-column prop="date" label="生日" width="120"></el-table-column>
			    <el-table-column prop="email" label="邮箱"></el-table-column>
		  </el-table>
		</div>
	</transition>
</template>

<script>
	import Vue from 'Vue';
	import { Table, TableColumn, Loading } from 'element-ui';
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(Loading.directive);

	const UsersComponent = {
		created(){
			this.initData();
		},
		data(){
			return {
				loading:true,
				usersData:[],
			}
		},
		methods:{
			initData(){
				this.$ajax({
					method: 'get',
					url: 'https://www.nwsuaforchestra.cn/getAllUsers',
				}).then((res) => {
					// console.log(res);
					if(res.status === 200 && res.data.success){
						this.usersData = res.data.userData;
					}
					this.loading = false;
				}).catch((e) => {
					this.loading = false;
				});
			}
		}
	};

	export default UsersComponent;
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