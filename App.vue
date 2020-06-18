<script>
export default {
	onLaunch: function() {
		uni.onNetworkStatusChange(function(res) {
			console.log(res.isConnected);
			uni.showToast({
				title: res.networkType,
				duration: 3000,
				mask: true
			});
			if (!res.isConnected) {
				uni.navigateTo({
					url: 'pages/none/none'
				});
			}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
page {
	width: 100%;
	height: 100%;
}

button {
	width: 90%;
	margin-left: 5%;
	margin-bottom: 10px;
}
button:first-child {
	margin-top: 10px;
}
button:last-child {
	margin-bottom: 60px;
}

.uni-tabbar__item:nth-child(4) .uni-tabbar__icon {
	background-color: #fff;
	margin-top: -35px;
	border-radius: 50%;
	width: 55px;
	height: 55px;
	display: flex;
align-items: center;
justify-content: center;
}
.uni-tabbar__item:nth-child(4) .uni-tabbar__icon img {
	width: 45px;
	height: 45px;
	border-radius: 50%;
}
</style>
