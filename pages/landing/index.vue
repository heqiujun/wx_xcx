<template>
	<view class="index">
		<view class='logo'>
			<image src='https://js.zhiwi.cn/tu/shouquan.jpg'></image>
			<view class='z2'>该小程序授权，向其提供以下权限即可继续操作</view>
		</view>
		<view class='z1'> 获得你的公开信息（昵称、头像）</view>
		<view class='hezi'>
			<button open-type="getUserInfo" lang="zh_CN" class='denglu' @getuserinfo="bindGetUserInfo" >授权登录</button>
		</view>
		<view class="sh">
			<image src="../../static/logo.jpg" mode=""></image>
			<image src="../../static/logo.jpg" mode=""></image>
			<image src="../../static/logo.jpg" mode=""></image>
		</view>
	</view>
</template>
<script>
	import {post} from '@/common/index';
	import $ from '@/common/common';
	export default {
		data() {
			return {
				canIUse: 1,
				zhen:"改了"
			}
		},
		created: function() {
			uni.checkSession({
				success(e) {
					console.log(e)
				}
			})
		},
		onShow() {
			uni.authorize({
			    scope: 'scope.userLocation',
			    success() {
			        uni.getLocation().then(res=>{
						console.log(111)
					})
			    }
			})
		},
		methods: {
			hui:()=>{
				console.log(1111)
			},
			bindGetUserInfo: (e) => {
				if (e.detail.userInfo){
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							//发送code的请求把获取的登陆凭证存储到本地
							console.log(loginRes)
							uni.getUserInfo({
								provider: 'weixin',
								success: (res) => {
									console.log(res)
									uni.setStorage({
										key: 'kouling',
										data: loginRes.code,
										success: function() {
											console.log('存储成功');
											//发送请求把用户信息储存起来
										}
									});
								},
								fail: (res) => {
									getUserInfo()
								}
							});
						}
					});
				} else {
					 console.log("用户按了拒绝授权按钮") 
				}
			}
		}
	}
</script>

<style lang="scss">
	.sh{
		image{
			width: 80upx;
			height: 80upx;
			float: left;
		}
	}
	.logo {
		width: 100%;
		position: relative;
	}

	.logo image {
		width: 100%;
		margin: 0px auto;
		display: block;
		height: 400rpx
	}

	.z2 {
		position: absolute;
		bottom: 60rpx;
		color: #FFF;
		text-align: center;
		width: 100%;
		font-weight: bold
	}

	.z1 {
		padding: 40rpx;
		color: #222;
		display: block;
		width: 100%;
	}

	.hezi {
		width: 100%;
		display: block;
	}

	.hezi button {
		width: 90%;
		margin: 0px auto;
		background: #04be01;
		color: #FFF
	}
</style>