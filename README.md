JavascriptMVC
-------------

This was forked/assembled as per directions on the [JavascriptMVC Site](http://javascriptmvc.com/#&who=install).

A. How to get (and contribute) JMVC

  1. Start a new project in git.
  
  2. Fork modules to add them as my own submodules
           http://github.com/jupiterjs/steal 
           http://github.com/jupiterjs/jquerymx 
           http://github.com/jupiterjs/funcunit 
           http://github.com/jupiterjs/documentjs
           http://github.com/jupiterjs/env-js
           http://github.com/jupiterjs/jmvcdoc
           http://github.com/jupiterjs/mxui
           http://github.com/jupiterjs/mxutil


  3. Add steal, javascriptmvc, funcunit, and documentjs as submodules of your project...
           git submodule add git@github.com:daneroo/steal.git steal
           git submodule add git@github.com:daneroo/jquerymx.git jquery
           git submodule add git@github.com:daneroo/funcunit.git funcunit
           git submodule add git@github.com:daneroo/documentjs.git documentjs
           git submodule add git@github.com:daneroo/env-js.git envjs
           git submodule add git@github.com:daneroo/jmvcdoc.git jmvcdoc
           git submodule add git@github.com:daneroo/mxui.git mxui
           git submodule add git@github.com:daneroo/mxutil.git mxutil
           
      * Notice javascriptmvc is under the jquery folder
  
  4. Learn a little more about submodules ...
           [http://johnleach.co.uk/words/archives/2008/10/12/323/git-submodules-in-n-easy-steps]
           
  5. Cloning a tree with submodules
          git submodule init
          git submodule update

  6. Make changes in steal or jmvc, and push them back to your fork.
  
  7. updating all submodules:
          ./js scripts/pull_all.js
 
  
B. Getting Started with JMVC

  1. Generate app:
   ./js steal/generate/app cookbook

  2. Generate scaffold:
   ./js steal/generate/scaffold Cookbook.Models.Recipe

  3. Include models/controllers in cookbook/cookbook.js:
.models('recipe')
.controllers('recipe')

  4. See your recipes app:
   Open callcenter.html in a browser.

  5. Include functional tests in test/funcunit/funcunit.js:
.then("recipe_controller_test")

  6. Run functional tests in the browser:
   Open funcunit.html in a browser (turn off popup blockers).

  7. Run functional tests with selenium:
   ./funcunit/envjs cookbook/funcunit.html

  8. Include unit tests in test/qunit/qunit.js:
.then("recipe_test")

  9. Run unit tests in the browser:
   Open qunit.html in a browser.

  10. Run unit tests with Rhino:
   ./funcunit/envjs cookbook/qunit.html

  11. Compress app:
   ./steal/js cookbook/scripts/build.js

  12. Turn on production mode in callcenter.html and reload page:
src='../steal/steal.production.js?cookbook'

  13. Restore development mode by changing the script tag back, then generate docs:
   ./steal/js cookbook/scripts/doc.js

  14. View docs: 
Open cookbook/docs.html.