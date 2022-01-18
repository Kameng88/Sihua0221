// 点击同意选框 事件
function agree(){
	submitCheck();
}

// 判断是否选择了 试用功能
function checkSelFn(){
	dLabelVal=$("#dLabel").html();
	var fnStr="Express VM,Megabric,XOS,";
	if(dLabelVal==null || dLabelVal=="" || fnStr.indexOf(dLabelVal+",")<0){
		$("#submitApply").attr("disabled",true);
		return false;
	} else {
		$("#submitApply").attr("disabled",false);
		return true;
	}
}

// 判断是否可以提交
function submitCheck(){
	if($("#squaredOne").is(':checked')){
		if(checkSelFn()){
			usernameVal=$("#username").val();
			if(!(usernameVal==null || usernameVal=="")){
				emailAddressVal=$("#emailAddress").val();
				if(!(emailAddressVal==null || emailAddressVal=="")){
					$("#submitApply").attr("disabled",false);
					return true;
				}
			}
		}
	}
	$("#submitApply").attr("disabled",true);
	return false;
}

// 点击申请试用的提交按钮，发送邮件
function applyForTry () {
	if(!submitCheck()){
		return;
	}
	username="用户：" + $("#username").val();
	emailAddress="<br>   邮箱：" + $("#emailAddress").val();
	dLabel="<br>     申请试用功能： " + $("#dLabel").html();
	subject="申请试用";
	var tipStr="请不要修改下列邮件内容，否则将以垃圾邮件处理!";
	mailto.href="mailto:linlin.dong@kaixiangtech.com?subject=" + subject +"&body=" + tipStr + "<br>" + username  + emailAddress +  dLabel;
	mailto.click();
}

// 点击选择试用功能
function selFn(applyFor){
	$("#dLabel").html(applyFor);
	submitCheck();
}
