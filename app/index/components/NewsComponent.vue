<template>
	<transition name="slide-fade">
		<div>{{content}}</div>
	</transition>
</template>

<script>
	const NewsComponent = {
		created(){
			console.log('News created......');
			// this.initData();
		},
		data(){
			return {
				content:'newsnewsnews'
			}
		},
		methods:{
			initData(){
				alert('Get News Data!');
			}
		}
	};

	module.exports = NewsComponent;
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