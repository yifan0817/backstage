<template>
	<transition name="slide-fade">
		<div>
			<el-table :data="messagesData" height="300" border style="width: 90%;margin: 5% auto;" v-loading="loading">
				<el-table-column prop="messageID" label="id" width="180"></el-table-column>
			    <el-table-column prop="name" label="用户名" width="120"></el-table-column>
			    <el-table-column prop="time" label="时间" width="120"></el-table-column>
			    <el-table-column prop="good.length" label="点赞数" width="120"></el-table-column>
			    <el-table-column prop="reply.length" label="回复数" width="120"></el-table-column>
			    <el-table-column prop="content" label="内容"></el-table-column>
			    <el-table-column label="操作" width="180">
			    	<template slot-scope="scope">
	                    <el-button type="primary" @click="reviseNews(scope.$index)">修改</el-button>
	                    <el-button type="danger" @click="deleteNews(scope.$index)">删除</el-button>
	                </template>
			    </el-table-column>
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

	const MessagesComponent = {
		created(){
			this.initData();
		},
		data(){
			return {
				loading:true,
				messagesData:[],
			}
		},
		methods:{
			initData(){
				this.$ajax({
					method: 'get',
					url: 'https://www.nwsuaforchestra.cn/getMessages',
				}).then((res) => {
					// console.log(res);
					if(res.status === 200 && res.statusText === 'OK'){
						this.messagesData = res.data;
					}
					this.loading = false;
				}).catch((e) => {
					this.loading = false;
				});
			},
			reviseNews(index){
				console.log(index);
			},
			deleteNews(index){
				console.log(index);
			}
		}
	};

	export default MessagesComponent;
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