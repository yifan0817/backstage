<script>
	const TopicsComponent = {
		template: '<div>{{content}}</div>',
		created(){
			console.log('Topics created......');
			// this.initData();
		},
		data(){
			return {
				content:'还没做啊'
			}
		},
		methods:{
			initData(){
				alert('Get Topics Data!');
			}
		}

	};

	export default TopicsComponent;
</script>