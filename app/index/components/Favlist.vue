<template id="template-home">
	<div>
		<div v-for="i in num">{{i}}</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				num:20
			}
		}
	}
</script>

<style>
	body{
		color:green;
	}
</style>