$(function(){
	// 문서가 로딩 된 후 실행해라
	// 메모 추가 버튼 클릭시 화면에 메모 보여주기 : createBtn
	$("#createBtn").click(function(){
		new Memo().create();		
	});
});

function Memo() {
	this.$note = null;
}

// create()
Memo.prototype.create = function() { // property 추가
	var $note = $(
		`<div class="memo-note">
	      <div class="memo-bar">
	        <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>
	        <span class="glyphicon glyphicon-pushpin" aria-hidden="true"></span>
	        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
	      </div>
	      <div class="memo-edit">
	        <textarea class="memo-edit-area"></textarea>
	      </div>
	    </div>`
	);
	
	$note.appendTo($(".memo-area"));
	this.$note = $note;
	this.drag();
	
	var that = this;
	
	$note.find(".glyphicon-chevron-up").click(function(){
		that.display(); // 여기서this쓰면 스팬태그가 됨.(이벤트 당하는 요소)
	});
	$note.find(".glyphicon-pushpin").click(function(){
		that.fix(); // 여기서this쓰면 스팬태그가 됨.(이벤트 당하는 요소)
	});
	$note.find(".glyphicon-trash").click(function(){
		that.del(); // 여기서this쓰면 스팬태그가 됨.(이벤트 당하는 요소)
	});
};

// display()
Memo.prototype.display = function() { // property 추가
	this.$note.toggleClass("fold-bar");
	
	var that = this;
	setTimeout(function() {
		that.$note
		.find(".glyphicon-chevron-up,.glyphicon-chevron-down")
		.toggleClass("glyphicon-chevron-up glyphicon-chevron-down");
		}, 400);
};

// fix()
Memo.prototype.fix = function() { // property 추가
	this.$note.find(".glyphicon-pushpin").toggleClass("choice");
	if(this.$note.find(".glyphicon-pushpin").hasClass("choice")){
		this.$note.draggable("disable");		
	}
	else{
		this.$note.draggable("enable");				
	}
};

// del()
Memo.prototype.del = function() { // property 추가
	this.$note.remove();
};

// drag()
Memo.prototype.drag = function() { // property 추가
	this.$note.draggable();
};