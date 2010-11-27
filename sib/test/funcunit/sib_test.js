module("sib test", { 
	setup: function(){
		S.open("//sib/sib.html");
	}
});

test("Copy Test", function(){
	equals(S("h1").text(), "Welcome to JavaScriptMVC 3.0!","welcome text");
});