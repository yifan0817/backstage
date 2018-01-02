<template>
	<transition name="slide-fade">
		<div>
			<el-button type="primary" plain class="form-button"  @click="dialogFormVisible = true">新建新闻</el-button>
			<el-table :data="newsList" height="600" border style="width: 90%;margin: 5% auto;" v-loading="loading">
			    <el-table-column prop="newstype" label="类型" width="120"></el-table-column>
			    <el-table-column prop="title" label="标题" width="120"></el-table-column>
			    <el-table-column prop="info.time" label="时间" width="120"></el-table-column>
			    <el-table-column prop="reply.length" label="回复数" width="120"></el-table-column>
			    <el-table-column prop="news_content" label="内容">
			    	<template slot-scope="scope">
	                    <p v-for="item in scope.row.news_content">【{{item.type == 1?'文本':'图片'}}】{{item.letter}}{{item.picurl}}</p>
	                </template>
			    </el-table-column>
			    <el-table-column label="操作" width="180">
			    	<template slot-scope="scope">
	                    <el-button type="primary" @click="reviseNews(scope.$index)">修改</el-button>
	                    <el-button type="danger" @click="deleteNews(scope.$index)">删除</el-button>
	                </template>
			    </el-table-column>
		  	</el-table>

		  	<el-dialog title="新建新闻" :visible.sync="dialogFormVisible">
			  <el-form :model="form">
			    <el-form-item label="新闻标题">
			      <el-input v-model="form.name" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="新闻类型">
			      <el-input v-model="form.type" auto-complete="off"></el-input>
			    </el-form-item>
			    <el-form-item label="新闻内容" v-for="(item,index) in form.content">
					<el-select v-model="item.type" placeholder="请选择内容类型" style="width: 80px">
						<el-option label="文本" value="1"></el-option>
						<el-option label="图片" value="2"></el-option>
					</el-select>
					<el-input v-model="item.letter" auto-complete="off" style="width:58%;"></el-input>
					<i class="el-icon-error" @click="deleteContent(index)" style="margin-left: 7px;"></i>
			    </el-form-item>
			  </el-form>
			  <div slot="footer" class="dialog-footer">
			  	<el-button @click="addNewContent">新增内容</el-button>
			    <el-button @click="dialogFormVisible = false">取 消</el-button>
			    <el-button type="primary" @click="addNews">确 定</el-button>
			  </div>
			</el-dialog>

		</div>
	</transition>
</template>

<script>
	import Vue from 'Vue';
	import { Table, TableColumn, Loading, Button, Dialog, Select, Option } from 'element-ui';
	Vue.use(Button);
	Vue.use(Table);
	Vue.use(TableColumn);
	Vue.use(Loading.directive);
	Vue.use(Dialog);
	Vue.use(Select);
	Vue.use(Option);

	const NewsComponent = {
		created(){
			this.initData();
		},
		data(){
			return {
				loading:true,
				newsList:[],
				dialogFormVisible:false,
				form:{
					name: '标题1',
					type: '类型1',
					content: [
						{
							type:'1',
							letter:'新闻内容'
						},
						{
							type:'2',
							letter:'图片链接'
						}
					]
				}
			}
		},
		methods:{
			initData(){
				this.$ajax({
					method: 'get',
					url: 'https://www.nwsuaforchestra.cn/getNewsList?start=0&size=50',
				}).then((res) => {
					// console.log(res);
					if(res.status === 200 && res.data.success){
						this.newsList = res.data.newsList;
					}
					this.loading = false;
				}).catch((e) => {
					this.loading = false;
				});
			},
			addNews(){
				var data = this.form;
				this.dialogFormVisible = false;
				// this.form.content = [];
				var now = new Date();
				var postData = {
					title: data.name,
					newstype: data.type,
					info:{
						time:now.toLocaleDateString()+' '+now.toLocaleTimeString()
					},
					news_content:data.content,
					reply:[]
				}
				this.$ajax({
					method: 'post',
					data: postData,
					url: 'https://www.nwsuaforchestra.cn/insertNewsList',
				}).then((res) => {
					// console.log(res)
					if(res.status === 200 && res.data.success){
						this.initData();
						this.$message({
							type: 'success',
							message: '添加成功',
							duration: '1500',
							center: true
						});
					}else{
						this.$message({
							type: 'error',
							message: '添加失败',
							duration: '1500',
							center: true
						});
					};
				}).catch((e) => {
					this.$message({
						type: 'error',
						message: '添加失败',
						duration: '1500',
						center: true
					});
				});
			},
			addNewContent(){
				this.form.content.push({
					type:'文本',
					letter:'新闻内容'
				});
			},
			deleteContent(index){
				this.form.content.splice(index,1);
			},
			reviseNews(index){
				console.log(index);
			},
			deleteNews(index){
				console.log(index);
			}
		}
	};

	export default NewsComponent;
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