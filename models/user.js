// 顶会议用户组件
var mongoose = require("mongoose");
// 创建模型
var Schema = mongoose.Schema;
// 定义了一个新的模型，但是此模式还未和users集合有关联
var userScheMa = new Schema({
	userid:String,
	password:String
});
// 与users集合关联
exports.user = mongoose.model("users",userScheMa);