//steal/js sib/scripts/compress.js

load("steal/rhino/steal.js");
steal.plugins('steal/build','steal/build/scripts','steal/build/styles',function(){
	steal.build('sib/scripts/build.html',{to: 'sib'});
});
