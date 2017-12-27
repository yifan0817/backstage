import Vue from 'Vue';
import Favlist from './components/Favlist.vue';

var vm = new Vue({
	el:'#app',
	components:{
		'fav-list':Favlist
	}
});