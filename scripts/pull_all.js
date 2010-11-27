load('steal/rhino/utils.js')

runCommand("git pull origin master")
var submodules = ["documentjs","envjs","funcunit","jmvcdoc","jquery","mxui","mxutil","steal"];
submodules.forEach(function(submodule){ 
    runCommand("cd "+submodule+" && git pull origin master")
  
});