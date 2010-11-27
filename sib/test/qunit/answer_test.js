module("Model: Sib.Models.Answer")

test("findAll", function(){
	stop(2000);
	Sib.Models.Answer.findAll({}, function(answers){
		start()
		ok(answers)
        ok(answers.length)
        ok(answers[0].name)
        ok(answers[0].description)
	});
	
})

test("create", function(){
	stop(2000);
	new Sib.Models.Answer({name: "dry cleaning", description: "take to street corner"}).save(function(answer){
		start();
		ok(answer);
        ok(answer.id);
        equals(answer.name,"dry cleaning")
        answer.destroy()
	})
})
test("update" , function(){
	stop();
	new Sib.Models.Answer({name: "cook dinner", description: "chicken"}).
            save(function(answer){
            	equals(answer.description,"chicken");
        		answer.update({description: "steak"},function(answer){
        			start()
        			equals(answer.description,"steak");
        			answer.destroy();
        		})
            })

});
test("destroy", function(){
	stop(2000);
	new Sib.Models.Answer({name: "mow grass", description: "use riding mower"}).
            destroy(function(answer){
            	start();
            	ok( true ,"Destroy called" )
            })
})