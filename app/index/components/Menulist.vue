<template id="template-home">
	<div id="menu-list">
		<router-link v-for="item in menuList" :key="item" :to="'/'+item">
			<div>{{item}}</div>
		</router-link>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				menuList:['news','topics','messages','chat','system'],//菜单项
			}
		}
	}
</script>

<style>
	body{
		color:red;
	}
	a{
		color: green;
		text-decoration: none;
	}
</style>