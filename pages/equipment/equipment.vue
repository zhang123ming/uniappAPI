<template>
	<view>
		<button type="default" @click="getSystemInfo">获取系统信息</button>
		<view>{{ info }}</view>
		<button type="default" @click="getNetworkType">获取网络状态==={{ networkType }}</button>
		<button type="default" @click="scanCode">扫码</button>
		<view>扫码结果:{{ result }}===扫码类型:{{ scanType }}==字符集:{{ charSet }}==路径:{{ path }}</view>
		<input type="text" v-model="value" />
		<button type="default" @click="setScreen">设置屏幕亮度0~1</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			info: {},
			networkType: '',
			result: '', //扫码结果
			scanType: '', //扫码类型
			charSet: '', //字符集
			path: '', //路径
			value: 0
		};
	},
	methods: {
		// 屏幕亮度
		setScreen() {
			const self = this;
			uni.setScreenBrightness({
				value: self.value,
				success: function() {
					uni.showToast({
						title: '设置成功',
						duration: 500,
						mask: true
					});
				},
				fail() {
					uni.showToast({
						title: '设置失败',
						duration: 500,
						mask: true
					});
				}
			});
		},
		// 扫描二维码
		scanCode() {
			const self = this;
			uni.scanCode({
				onlyFromCamera: false,
				scanType: ['qrCode', 'barCode'],
				success(res) {
					self.result = res.result;
					self.scanCode = res.scanType;
					self.charSet = res.charSet;
					self.path = res.path;
				},
				fail(err) {
					uni.showToast({
						title: '扫描失败'
					});
				},
				complete() {
					uni.showToast({
						title: '结束'
					});
				}
			});
		},
		// 获取网络状态
		getNetworkType() {
			const self = this;
			uni.getNetworkType({
				success(res) {
					self.networkType = res.networkType;
				}
			});
		},
		// 系统信息
		getSystemInfo() {
			const self = this;
			uni.getSystemInfo({
				success(res) {
					self.info = res;
					console.log(res.model);
					console.log(res.pixelRatio);
					console.log(res.windowWidth);
					console.log(res.windowHeight);
					console.log(res.language);
					console.log(res.version);
					console.log(res.platform);
				}
			});
		}
	}
};
</script>

<style></style>
