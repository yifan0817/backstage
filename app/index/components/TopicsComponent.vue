<script>
	const TopicsComponent = {
		template: '<div>{{content}}</div>',
		created(){
			console.log('Topics created......');
			// this.initData();
		},
		data(){
			return {
				content:'topicstopicstopics'
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