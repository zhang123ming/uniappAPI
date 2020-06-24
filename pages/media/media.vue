<template>
	<view>
		<button type="warn" @click="selectPic">选择图片</button>
		<view class="box-img" v-if="imgList.length > 0">
			<block v-for="(item, index) in imgList" :key="index"><image @click="previewImage(index)" :src="item" mode=""></image></block>
		</view>
		<button type="warn" @click="compressImage">压缩图片</button>
		<image v-if="comImg" :src="comImg"></image>
		<button type="warn">定位：{{ location }}</button>
		<navigator url="../wx/wx"><button type="warn">wx</button></navigator>
		<button type="warn" @click="postData">开始数据请求</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
		<button type="warn" @click="selectPic">选择图片</button>
	</view>
</template>

<script>
import config from './../../config/index.js';
export default {
	data() {
		return {
			imgList: [],
			comImg: null,
			location: []
		};
	},
	onLoad() {
		this.getLocal();
		// #ifdef APP-PLUS
		this.getAPPAddress();
		// #endif
	},
	methods: {
		postData() {
			// http://www.tianqiapi.com/api?version=v9&appid=23035354&appsecret=8YvlPNrz
			const self = this;
			self.$http.post('/api?version=v9&appid=23035354&appsecret=8YvlPNrz').then(res => {
				console.log(res);
			});
		},
		getAPPAddress() {
			plus.geolocation.getCurrentPosition(
				function(position) {
					console.log(position);
					plus.nativeUI.alert(position);
				},
				function(e) {
					plus.nativeUI.alert('error=>>' + err);
					console.log(e.message);
				},
				{
					geocode: true
				}
			);
		},
		getLocal() {
			uni.getLocation({
				//默认wgs84返回gps坐标
				//gcj02返回国测局坐标,可以用于uni.openLocation的坐标
				type: 'wgs84',
				//解析地址
				geocode: true, //中文
				success: data => {
					uni.showToast({
						title: data,
						duration: 2000,
						mask: true
					});
					console.log(data);

					if (data.address) {
						this.location = data;
					}
				},
				fail: err => {
					console.log(err);
					// this.$api.msg('获取位置失败!')
				}
			});
		},
		// 压缩图片
		compressImage() {
			const self = this;
			uni.showLoading({
				title: '加载中~~',
				mask: true
			});
			uni.compressImage({
				src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=724085622,106205052&fm=26&gp=0.jpg',
				quality: 80,
				success(res) {
					self.comImg = res.tempFilePath;
				},
				fail() {
					uni.showToast({
						title: '压缩失败',
						mask: true,
						duration: 3000
					});
				},
				complete() {
					uni.hideLoading();
				}
			});
		},
		// 图片预览
		previewImage(index) {
			uni.previewImage({
				urls: this.imgList,
				current: index,
				longPressActions: {
					itemList: ['发送给朋友', '保存图片', '收藏'],
					success(data) {
						uni.showToast({
							title: data.tapIndex + 1
						});
					},
					fail(err) {
						uni.showToast({
							title: '操作失败' + err,
							duration: 2000,
							mask: true
						});
					}
				}
			});
		},
		// 选择图片
		selectPic() {
			const self = this;
			uni.chooseImage({
				count: 6,
				sizeType: ['original', 'compressed'],
				sourceType: ['album', 'camera'],
				success(res) {
					self.imgList = res.tempFilePaths;
				}
			});
		}
	}
};
</script>

<style>
.box-img {
	background: #f1f1f1;
	padding: 10px;
}
image {
	width: 100px;
	height: 100px;
}
.box-img image {
	width: 33.3%;
	height: 110px;
}
</style>
