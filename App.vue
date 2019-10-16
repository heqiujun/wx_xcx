<script>
	import "@/common/index.css"
	export default {
		onLaunch: function() {
			console.log("进入的时候输入一次")
		},
		onShow: function() {
			console.log('每次打开页面显示加载')
		},
		onHide: function() {
			console.log('每次页面消失显示加载')
		}
	}
</script>
<style>/
*{
	font-size: 28upx;
}
</style>
