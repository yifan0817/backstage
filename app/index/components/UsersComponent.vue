<template>
	<transition name="slide-fade">
		<div>
			<el-table :data="usersData" height="250" border style="width: 100%">
				<el-table-column prop="avatarUrl" label="头像" width="120">
					<img :src="avatarUrl">
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
	import { Table, TableColumn } from 'element-ui';
	Vue.use(Table);
	Vue.use(TableColumn);

	const UsersComponent = {
		created(){
			console.log('Users created......');
			this.initData();
		},
		data(){
			return {
				usersData:[]
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