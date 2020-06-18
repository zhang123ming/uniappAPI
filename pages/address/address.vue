<template>
	<view>
		<button type="default" @click="getLocation">获取当前定位</button>
		<button type="default" @click="testLocation">检测定位是否开启</button>
		<button type="default" @click="openSetting">开启定位</button>
		<view class="box">当前位置经度是：{{ longitude }}=== 当前位置纬度是：{{ latitude }}==={{ address }}</view>
		<button type="default" @click="chooseLocation">chooseLocation</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			longitude: 0,
			latitude: 0,
			address: ''
		};
	},
	methods: {
		chooseLocation() {
			const self = this;
			uni.chooseLocation({
				type: 'gcj02',
				success: function(res) {
					self.longitude = res.longitude;
					self.latitude = res.latitude;
					self.address = res.address;
				}
			});
		},
		getLocation() {
			uni.getLocation({
				type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				success: function(res) {
					uni.showToast({
						title: res.longitude,
						duration: 3000
					});
					const latitude = res.latitude;
					const longitude = res.longitude;
					uni.openLocation({
						latitude: latitude,
						longitude: longitude,
						success: function() {
							uni.showToast({
								title: '位置打开成功',
								duration: 1000
							});
						}
					});
				}
			});
		},
		testLocation() {
			const self = this;
			// 先判断定位权限是否开启
			uni.getLocation({
				success() {
					uni.showToast({
						title: '授权成功'
					});
					//定位权限开启，打开地图
					// uni.chooseLocation({});
				},
				fail(e) {
					// 定位权限未开启，引导设置
					uni.showModal({
						title: '温馨提示',
						content: '您已拒绝定位,请开启',
						confirmText: '去设置',
						success(res) {
							if (res.confirm) {
								//打开授权设置
								self.openSetting();
							} else {
								self.openSetting();
							}
						}
					});
				}
			});
		},
		openSetting() {
			// 打开小程序的设置
			// #ifdef MP-WEIXIN
			uni.openSetting();
			// #endif

			// App跳转系统的设置界面
			// #ifdef APP-PLUS
			uni.getSystemInfo({
				success(res) {
					if (res.platform == 'ios') {
						//IOS
						plus.runtime.openURL('app-settings://');
					} else if (res.platform == 'android') {
						//安卓
						let main = plus.android.runtimeMainActivity();
						let Intent = plus.android.importClass('android.content.Intent');
						let mIntent = new Intent('android.settings.ACTION_SETTINGS');
						main.startActivity(mIntent);
					}
				}
			});
			// #endif
		}
	}
};
</script>

<style>
.box {
	font-size: 12px;
}
</style>
