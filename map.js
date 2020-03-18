/**
 * MyMap 생성자로 사용될 함수를 구현
 */
var count = 0;
function MyMap() {
	var map = {};
}
MyMap.prototype.put = function(id, name) {
	this.map[id] = name;
	count++;
};
MyMap.prototype.size = function() {
	return this.count;
};
MyMap.prototype.get = function(id) {
	return this.map[id];
};
MyMap.prototype.remove = function(id) {
	this.map[id] = undefined;
	count--;
};
MyMap.prototype.clear = function() {
	count = 0;
};