/*global module: true, ok: true, equals: true, S: true, test: true */
module("answer", {
	setup: function () {
		// open the page
		S.open("//sib/sib.html");

		//make sure there's at least one answer on the page before running a test
		S('.answer').exists();
	},
	//a helper function that creates a answer
	create: function () {
		S("[name=name]").type("Ice");
		S("[name=description]").type("Cold Water");
		S("[type=submit]").click();
		S('.answer:nth-child(2)').exists();
	}
});

test("answers present", function () {
	ok(S('.answer').size() >= 1, "There is at least one answer");
});

test("create answers", function () {

	this.create();

	S(function () {
		ok(S('.answer:nth-child(2) td:first').text().match(/Ice/), "Typed Ice");
	});
});

test("edit answers", function () {

	this.create();

	S('.answer:nth-child(2) a.edit').click();
	S(".answer input[name=name]").type(" Water");
	S(".answer input[name=description]").type("\b\b\b\b\bTap Water");
	S(".update").click();
	S('.answer:nth-child(2) .edit').exists(function () {

		ok(S('.answer:nth-child(2) td:first').text().match(/Ice Water/), "Typed Ice Water");

		ok(S('.answer:nth-child(2) td:nth-child(2)').text().match(/Cold Tap Water/), "Typed Cold Tap Water");
	});
});

test("destroy", function () {

	this.create();

	S(".answer:nth-child(2) .destroy").click();

	//makes the next confirmation return true
	S.confirm(true);

	S('.answer:nth-child(2)').missing(function () {
		ok("destroyed");
	});

});