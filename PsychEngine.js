(function ($hx_exports, $global) { "use strict"; var $hx_script = (function (exports, global) { (function ($hx_exports, $global) { "use strict";
$hx_exports["lime"] = $hx_exports["lime"] || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var Achievements = function() { };
$hxClasses["Achievements"] = Achievements;
Achievements.__name__ = "Achievements";
Achievements.unlockAchievement = function(name) {
	Achievements.achievementsMap.h[name] = true;
	flixel_FlxG.sound.play(Paths.sound("confirmMenu"),0.7);
};
Achievements.isAchievementUnlocked = function(name) {
	if(Object.prototype.hasOwnProperty.call(Achievements.achievementsMap.h,name) && Achievements.achievementsMap.h[name]) {
		return true;
	}
	return false;
};
Achievements.getAchievementIndex = function(name) {
	var _g = 0;
	var _g1 = Achievements.achievementsStuff.length;
	while(_g < _g1) {
		var i = _g++;
		if(Achievements.achievementsStuff[i][2] == name) {
			return i;
		}
	}
	return -1;
};
Achievements.loadAchievements = function() {
	if(flixel_FlxG.save.data != null) {
		if(flixel_FlxG.save.data.achievementsMap != null) {
			Achievements.achievementsMap = flixel_FlxG.save.data.achievementsMap;
		}
		if(flixel_FlxG.save.data.achievementsUnlocked != null) {
			var savedStuff = flixel_FlxG.save.data.achievementsUnlocked;
			var _g = 0;
			var _g1 = savedStuff.length;
			while(_g < _g1) {
				var i = _g++;
				Achievements.achievementsMap.h[savedStuff[i]] = true;
			}
		}
		if(Achievements.henchmenDeath == 0 && flixel_FlxG.save.data.henchmenDeath != null) {
			Achievements.henchmenDeath = flixel_FlxG.save.data.henchmenDeath;
		}
	}
};
var flixel_util_IFlxDestroyable = function() { };
$hxClasses["flixel.util.IFlxDestroyabl
