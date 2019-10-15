import Vue from 'vue';
const $ =new Object();
$.post=(url,data)=>{
	return uni.request({
			url:url, //仅为示例，并非真实接口地址。
			data:data,
			method:'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded',	
				// //#ifdef MP-WEIXIN
				// 	'app': 'xiaochengxu',
				// //#endif	
				// 'kouling':$z.Qu('kouling'),				
			}
	});
}
$.toast=(title,time,icon)=>{
	if(icon==1){
		icon='success'
	}else if(icon==2){
		icon='loading'
	}else{
		icon='none'
	}
	if(title){
		return uni.showToast({
			title:title,
			icon:icon,
			mask:true,
			duration: time||2000
		});
	}
	
}
$.backward=(data)=>{
	return uni.navigateBack({
	    delta: data
	});
}
$.upload=(url,data)=>{
	return uni.chooseImage({
	    success: function (chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				name: 'file',
				formData:data
			});
	    }
	});
}
$.download=(url,data)=>{
	return uni.downloadFile({
		url: url //仅为示例，并非真实的资源
	});
}
$.post=(url,data)=>{
	return uni.request({
			url:url, //仅为示例，并非真实接口地址。
			data:data,
			method:'POST',
			header: {
				'content-type': 'application/x-www-form-urlencoded',	
				// //#ifdef MP-WEIXIN
				// 	'app': 'xiaochengxu',
				// //#endif	
				// 'kouling':$z.Qu('kouling'),				
			}
	});
}
export default $;
