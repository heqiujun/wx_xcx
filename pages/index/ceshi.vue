<template>
	<view class="content">
		<input type="text" v-model="val"  placeholder="请输入商品ID"/>
		<image :src="img" mode=""></image>
		<button type="primary" @click="creats(val)">生成二维码</button>
	</view>
	
</template>
<script>
import QR from "../../static/js/wxqrcode.js"
export default {
	data() {
		return {
			img:'',
			val:''
		}
	},  
	methods: {
		creats:function(e){
			this.img = QR.createQrCodeImg("http://w.tcloudme.com/#/?e="+e, {
			     size: parseInt(100)//二维码大小  
			})
		}
	}
}
</script>

<style>
button{
	width: 80%;
}
input{
	height: 80upx;
	line-height: 80upx;
	width: 80%;
	margin: 20upx auto;
	background: #eee;
	color: #000;
	border-radius: 20upx;
	text-align: center;
}
image{
	display: block;
	margin: 50upx auto;
	width: 200upx;
	height: 200upx;
}
</style>
