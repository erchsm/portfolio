(function () {
  'use strict';

  /* Directives */


  angular.module('myApp.directives', [])
  .directive('codepenEmbed', function() {
    var injectScript = function(element) {
      var scriptTag = angular.element(document.createElement('script'));
      scriptTag.attr('charset', 'utf-8');
      scriptTag.attr('src', '//codepen.io/eijs.js');
      element.append(scriptTag);
    };

    return {
      link: function(scope, element) {
        injectScript(element);
      }
    };
  })
  .directive('includeReplace', function () {
    return {
      require: 'ngInclude',
      restrict: 'A', /* optional */
      link: function (scope, el, attrs) {
        el.replaceWith(el.children());
      }
    };
  })
  // .directive('progressBar', function () {
  //   return {
  //     link: function(scope, element, attrs) {
  //       scope.$on('duScrollspy:becameActive', function($event, $element, $target){
  //         if ($element.attr('id') == element.attr('id')) {
            
  //         } 
  //       });
  //     }
  //   };
  // })
  .directive('videoPlayer', function($templateRequest, $compile) {
    return {
      link: function(scope, element) {
        function addVideoOverlay() {
          $templateRequest("partials/video-overlay.html").then(function(html) {
            var template = angular.element(html);
            element.parent().append(template);
            $compile(template)(scope);
            player.addEventListener('play', hideVideoOverlay, false);
          });
        }


        function hideVideoOverlay() {
          console.log(element.parent().find('video-overlay'));
          // element.parent().find('video-overlay').remove();
        }

        var player = angular.element(element)[0];
        player.addEventListener('ended', addVideoOverlay, false);
      }
    };
  });
})();
