<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"width":"90%","padding":"30px","margin":"15px auto","borderRadius":"6px","flexWrap":"wrap","display":"flex"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="100px"
		>
			<template >
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'" label="采购编号" prop="caigoubianhao">
					<el-input v-model="ruleForm.caigoubianhao" placeholder="采购编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-else-if="ruleForm.caigoubianhao" label="采购编号" prop="caigoubianhao">
					<el-input v-model="ruleForm.caigoubianhao" placeholder="采购编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="资产名称" prop="zichanmingcheng">
					<el-input v-model="ruleForm.zichanmingcheng" placeholder="资产名称" clearable  :readonly="ro.zichanmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产名称" prop="zichanmingcheng">
					<el-input v-model="ruleForm.zichanmingcheng" placeholder="资产名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="资产分类" prop="zichanfenlei">
					<el-input v-model="ruleForm.zichanfenlei" placeholder="资产分类" clearable  :readonly="ro.zichanfenlei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产分类" prop="zichanfenlei">
					<el-input v-model="ruleForm.zichanfenlei" placeholder="资产分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="资产型号" prop="zichanxinghao">
					<el-input v-model="ruleForm.zichanxinghao" placeholder="资产型号" clearable  :readonly="ro.zichanxinghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产型号" prop="zichanxinghao">
					<el-input v-model="ruleForm.zichanxinghao" placeholder="资产型号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="date" v-if="type!='info'" label="采购时间" prop="caigoushijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.caigoushijian" 
						type="date"
						:readonly="ro.caigoushijian"
						placeholder="采购时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-else-if="ruleForm.caigoushijian" label="采购时间" prop="caigoushijian">
					<el-input v-model="ruleForm.caigoushijian" placeholder="采购时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="采购账号" prop="caigouzhanghao">
					<el-input v-model="ruleForm.caigouzhanghao" placeholder="采购账号" clearable  :readonly="ro.caigouzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="采购账号" prop="caigouzhanghao">
					<el-input v-model="ruleForm.caigouzhanghao" placeholder="采购账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="采购姓名" prop="caigouxingming">
					<el-input v-model="ruleForm.caigouxingming" placeholder="采购姓名" clearable  :readonly="ro.caigouxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="采购姓名" prop="caigouxingming">
					<el-input v-model="ruleForm.caigouxingming" placeholder="采购姓名" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"40px","background":"rgba(255, 210, 156, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"cursor":"pointer","border":"0","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"40px","background":"rgba(255, 210, 156, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"cursor":"pointer","border":"0","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"40px","background":"rgba(255, 210, 156, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				caigoubianhao : false,
				zichanmingcheng : false,
				zichanfenlei : false,
				zichanxinghao : false,
				shuliang : false,
				caigoushijian : false,
				caigouzhanghao : false,
				caigouxingming : false,
			},
			
			
			ruleForm: {
				caigoubianhao: this.getUUID(),
				zichanmingcheng: '',
				zichanfenlei: '',
				zichanxinghao: '',
				shuliang: '',
				caigoushijian: '',
				caigouzhanghao: '',
				caigouxingming: '',
			},
		
			
			rules: {
				caigoubianhao: [
				],
				zichanmingcheng: [
				],
				zichanfenlei: [
				],
				zichanxinghao: [
				],
				shuliang: [
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				caigoushijian: [
				],
				caigouzhanghao: [
				],
				caigouxingming: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
		this.ruleForm.caigoushijian = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='caigoubianhao'){
							this.ruleForm.caigoubianhao = obj[o];
							this.ro.caigoubianhao = true;
							continue;
						}
						if(o=='zichanmingcheng'){
							this.ruleForm.zichanmingcheng = obj[o];
							this.ro.zichanmingcheng = true;
							continue;
						}
						if(o=='zichanfenlei'){
							this.ruleForm.zichanfenlei = obj[o];
							this.ro.zichanfenlei = true;
							continue;
						}
						if(o=='zichanxinghao'){
							this.ruleForm.zichanxinghao = obj[o];
							this.ro.zichanxinghao = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='caigoushijian'){
							this.ruleForm.caigoushijian = obj[o];
							this.ro.caigoushijian = true;
							continue;
						}
						if(o=='caigouzhanghao'){
							this.ruleForm.caigouzhanghao = obj[o];
							this.ro.caigouzhanghao = true;
							continue;
						}
						if(o=='caigouxingming'){
							this.ruleForm.caigouxingming = obj[o];
							this.ro.caigouxingming = true;
							continue;
						}
				}
				




				this.ruleForm.shuliang = 0
				this.ro.shuliang = false;




			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(json.caigouzhanghao!=''&&json.caigouzhanghao && this.$storage.get("role")!="管理员"){
						this.ruleForm.caigouzhanghao = json.caigouzhanghao
						this.ro.caigouzhanghao = true;
					}
					if(json.caigouxingming!=''&&json.caigouxingming && this.$storage.get("role")!="管理员"){
						this.ruleForm.caigouxingming = json.caigouxingming
						this.ro.caigouxingming = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `zichancaigou/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {

















var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.shuliang = parseFloat(objcross.shuliang) + parseFloat(this.ruleForm.shuliang)
                }

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "zichancaigou/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `zichancaigou/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.zichancaigouCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `zichancaigou/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.zichancaigouCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.zichancaigouCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 20px 0 0;
	  	  color: #333;
	  	  font-weight: 500;
	  	  width: 100px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 100px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 2px solid rgba(121, 121, 121, 1);
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 250px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 2px solid rgba(121, 121, 121, 1);
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 2px solid rgba(121, 121, 121, 1);
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 2px dashed rgba(121, 121, 121, 1);
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #666;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 2px dashed rgba(121, 121, 121, 1);
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #666;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 2px dashed rgba(121, 121, 121, 1);
	  	  cursor: pointer;
	  	  border-radius: 6px;
	  	  color: #666;
	  	  width: 150px;
	  	  font-size: 24px;
	  	  line-height: 60px;
	  	  text-align: center;
	  	  height: 60px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 2px solid rgba(121, 121, 121, 1);
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #333;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
