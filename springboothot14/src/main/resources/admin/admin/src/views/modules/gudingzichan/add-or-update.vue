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
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'" label="资产编码" prop="zichanbianma">
					<el-input v-model="ruleForm.zichanbianma" placeholder="资产编码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-else-if="ruleForm.zichanbianma" label="资产编码" prop="zichanbianma">
					<el-input v-model="ruleForm.zichanbianma" placeholder="资产编码" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="资产名称" prop="zichanmingcheng">
					<el-input v-model="ruleForm.zichanmingcheng" placeholder="资产名称" clearable  :readonly="ro.zichanmingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产名称" prop="zichanmingcheng">
					<el-input v-model="ruleForm.zichanmingcheng" placeholder="资产名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="select" v-if="type!='info'"  label="资产分类" prop="zichanfenlei">
					<el-select :disabled="ro.zichanfenlei" v-model="ruleForm.zichanfenlei" placeholder="请选择资产分类" >
						<el-option
							v-for="(item,index) in zichanfenleiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产分类" prop="zichanfenlei">
					<el-input v-model="ruleForm.zichanfenlei"
						placeholder="资产分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="upload" v-if="type!='info' && !ro.zichantupian" label="资产图片" prop="zichantupian">
					<file-upload
						tip="点击上传资产图片"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.zichantupian?ruleForm.zichantupian:''"
						@change="zichantupianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="upload" v-else-if="ruleForm.zichantupian" label="资产图片" prop="zichantupian">
					<img v-if="ruleForm.zichantupian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.zichantupian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.zichantupian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="资产单价" prop="zichandanjia">
					<el-input v-model="ruleForm.zichandanjia" placeholder="资产单价" clearable  :readonly="ro.zichandanjia"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="资产单价" prop="zichandanjia">
					<el-input v-model="ruleForm.zichandanjia" placeholder="资产单价" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" clearable  :readonly="ro.shuliang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang" placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="使用状况" prop="shiyongzhuangkuang">
					<el-input v-model="ruleForm.shiyongzhuangkuang" placeholder="使用状况" clearable  :readonly="ro.shiyongzhuangkuang"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="使用状况" prop="shiyongzhuangkuang">
					<el-input v-model="ruleForm.shiyongzhuangkuang" placeholder="使用状况" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="date" v-if="type!='info'" label="购买时间" prop="goumaishijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.goumaishijian" 
						type="date"
						:readonly="ro.goumaishijian"
						placeholder="购买时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-else-if="ruleForm.goumaishijian" label="购买时间" prop="goumaishijian">
					<el-input v-model="ruleForm.goumaishijian" placeholder="购买时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="select" v-if="type!='info'" label="员工工号" prop="yuangonggonghao">
					<el-select :disabled="ro.yuangonggonghao" @change="yuangonggonghaoChange" v-model="ruleForm.yuangonggonghao" placeholder="请选择员工工号">
						<el-option
							v-for="(item,index) in yuangonggonghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-else-if="ruleForm.yuangonggonghao" label="员工工号" prop="yuangonggonghao">
					<el-input v-model="ruleForm.yuangonggonghao" placeholder="员工工号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' class="input" v-if="type!='info'"  label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" clearable  :readonly="ro.yuangongxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else class="input" label="员工姓名" prop="yuangongxingming">
					<el-input v-model="ruleForm.yuangongxingming" placeholder="员工姓名" readonly></el-input>
				</el-form-item>
			</template>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-if="type!='info'"  label="资产详情" prop="zichanxiangqing">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.zichanxiangqing" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else-if="ruleForm.zichanxiangqing" label="资产详情" prop="zichanxiangqing">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.zichanxiangqing"></span>
                </el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-if="type!='info'"  label="归属说明" prop="guishushuoming">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.guishushuoming" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else-if="ruleForm.guishushuoming" label="归属说明" prop="guishushuoming">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.guishushuoming"></span>
                </el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-if="type!='info'"  label="使用描述" prop="shiyongmiaoshu">
					<editor 
						style="min-width: 200px; max-width: 600px;"
						v-model="ruleForm.shiyongmiaoshu" 
						class="editor" 
						action="file/upload">
					</editor>
				</el-form-item>
				<el-form-item :style='{"width":"45%","margin":"0 2% 16px 0","background":"none","display":"inline-block"}' v-else-if="ruleForm.shiyongmiaoshu" label="使用描述" prop="shiyongmiaoshu">
                    <span :style='{"fontSize":"14px","lineHeight":"40px","color":"#333","fontWeight":"500","display":"inline-block"}' v-html="ruleForm.shiyongmiaoshu"></span>
                </el-form-item>
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
				zichanbianma : false,
				zichanmingcheng : false,
				zichanfenlei : false,
				zichantupian : false,
				zichandanjia : false,
				shuliang : false,
				shiyongzhuangkuang : false,
				goumaishijian : false,
				zichanxiangqing : false,
				guishushuoming : false,
				shiyongmiaoshu : false,
				yuangonggonghao : false,
				yuangongxingming : false,
			},
			
			
			ruleForm: {
				zichanbianma: this.getUUID(),
				zichanmingcheng: '',
				zichanfenlei: '',
				zichantupian: '',
				zichandanjia: '',
				shuliang: '0',
				shiyongzhuangkuang: '',
				goumaishijian: '',
				zichanxiangqing: '',
				guishushuoming: '',
				shiyongmiaoshu: '',
				yuangonggonghao: '',
				yuangongxingming: '',
			},
		
			zichanfenleiOptions: [],
			yuangonggonghaoOptions: [],
			
			rules: {
				zichanbianma: [
				],
				zichanmingcheng: [
					{ required: true, message: '资产名称不能为空', trigger: 'blur' },
				],
				zichanfenlei: [
				],
				zichantupian: [
					{ required: true, message: '资产图片不能为空', trigger: 'blur' },
				],
				zichandanjia: [
					{ required: true, message: '资产单价不能为空', trigger: 'blur' },
				],
				shuliang: [
				],
				shiyongzhuangkuang: [
					{ required: true, message: '使用状况不能为空', trigger: 'blur' },
				],
				goumaishijian: [
				],
				zichanxiangqing: [
				],
				guishushuoming: [
				],
				shiyongmiaoshu: [
				],
				yuangonggonghao: [
				],
				yuangongxingming: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
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
						if(o=='zichanbianma'){
							this.ruleForm.zichanbianma = obj[o];
							this.ro.zichanbianma = true;
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
						if(o=='zichantupian'){
							this.ruleForm.zichantupian = obj[o];
							this.ro.zichantupian = true;
							continue;
						}
						if(o=='zichandanjia'){
							this.ruleForm.zichandanjia = obj[o];
							this.ro.zichandanjia = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='shiyongzhuangkuang'){
							this.ruleForm.shiyongzhuangkuang = obj[o];
							this.ro.shiyongzhuangkuang = true;
							continue;
						}
						if(o=='goumaishijian'){
							this.ruleForm.goumaishijian = obj[o];
							this.ro.goumaishijian = true;
							continue;
						}
						if(o=='zichanxiangqing'){
							this.ruleForm.zichanxiangqing = obj[o];
							this.ro.zichanxiangqing = true;
							continue;
						}
						if(o=='guishushuoming'){
							this.ruleForm.guishushuoming = obj[o];
							this.ro.guishushuoming = true;
							continue;
						}
						if(o=='shiyongmiaoshu'){
							this.ruleForm.shiyongmiaoshu = obj[o];
							this.ro.shiyongmiaoshu = true;
							continue;
						}
						if(o=='yuangonggonghao'){
							this.ruleForm.yuangonggonghao = obj[o];
							this.ro.yuangonggonghao = true;
							continue;
						}
						if(o=='yuangongxingming'){
							this.ruleForm.yuangongxingming = obj[o];
							this.ro.yuangongxingming = true;
							continue;
						}
				}
				






				this.ruleForm.shuliang='0'







			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/zichanfenlei/zichanfenlei`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.zichanfenleiOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
            this.$http({
				url: `option/yuangong/yuangonggonghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.yuangonggonghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			yuangonggonghaoChange () {
				this.$http({
					url: `follow/yuangong/yuangonggonghao?columnValue=`+ this.ruleForm.yuangonggonghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.yuangongxingming){
							this.ruleForm.yuangongxingming = data.data.yuangongxingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `gudingzichan/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        this.ruleForm.zichanxiangqing = this.ruleForm.zichanxiangqing.replace(reg,'../../../springboothot14/upload');
        this.ruleForm.guishushuoming = this.ruleForm.guishushuoming.replace(reg,'../../../springboothot14/upload');
        this.ruleForm.shiyongmiaoshu = this.ruleForm.shiyongmiaoshu.replace(reg,'../../../springboothot14/upload');
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {








	if(this.ruleForm.zichantupian!=null) {
		this.ruleForm.zichantupian = this.ruleForm.zichantupian.replace(new RegExp(this.$base.url,"g"),"");
	}



















var objcross = this.$storage.getObj('crossObj');

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
				url: "gudingzichan/page", 
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
					   url: `gudingzichan/${!this.ruleForm.id ? "save" : "update"}`,
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
						 this.parent.gudingzichanCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
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
			   url: `gudingzichan/${!this.ruleForm.id ? "save" : "update"}`,
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
				 this.parent.gudingzichanCrossAddOrUpdateFlag = false;
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
      this.parent.gudingzichanCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    zichantupianUploadChange(fileUrls) {
	    this.ruleForm.zichantupian = fileUrls;
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
