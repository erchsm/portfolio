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
  })
.directive('processDiagram', ['$timeout', function ($timeout, $window) {
  return {
    link: function(scope, element, attrs) {

      var STEP__RADIUS = 40,
      COLORS = [
      '#FF6701',
      '#EA610C',
      '#D45B17',
      '#BF5522',
      '#A94F2E',
      '#944939',
      '#7E4344',
      '#693D4F'
      ];

      function isIOSSafari() {
        var userAgent;
        userAgent = window.navigator.userAgent;
        return userAgent.match(/iPad/i) || userAgent.match(/iPhone/i);
      }

      function isTouch() {
        var isIETouch;
        isIETouch = navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        return [].indexOf.call(window, 'ontouchstart') >= 0 || isIETouch;
      }

      var isIOS = isIOSSafari(),
      clickHandler = isIOS || isTouch() ? 'touchstart' : 'click';

      function extend( a, b ) {
        for( var key in b ) {
          if( b.hasOwnProperty( key ) ) {
            a[key] = b[key];
          }
        }
        return a;
      }

      function Animocon(el, options) {
        this.el = el;
        this.options = extend( {}, this.options );
        extend( this.options, options );

        this.checked = false;

        this.timeline = new mojs.Timeline();

        for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
          this.timeline.add(this.options.tweens[i]);
        }

        var self = this;
        this.el.addEventListener(clickHandler, function() {
          if( self.checked ) {
            self.options.onUnCheck();
          }
          else {
            self.options.onCheck();
            self.timeline.start();
            self.checked = true;
          }
        });
      }

      Animocon.prototype.start = function() {
        this.timeline.start();
        self.checked = true;
      };

      Animocon.prototype.options = {
        tweens : [
        new mojs.Burst({
          shape : 'circle',
          isRunLess: true
        })
        ],
        onCheck : function() { return false; },
        onUnCheck : function() { return false; }
      };

      var circleArcs = [
      {
        centerX: 50,
        centerY: 50,
        startAngle: -112.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: -67.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: -22.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 22.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 67.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 112.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 157.5,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 202.5,
        arcAngle: 45,
        radius: 49
      }
      ];
      var arcs = [
      {
        centerX: 50,
        centerY: 50,
        startAngle: -90,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: -45,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 0,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 45,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 90,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 135,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 180,
        arcAngle: 45,
        radius: 49
      },
      {
        centerX: 50,
        centerY: 50,
        startAngle: 225,
        arcAngle: 45,
        radius: 49
      }
      ];

      function arcPath(arc, prog) {
        var progress = prog || 1,
        arcStartX = arc.centerX + Math.cos(arc.startAngle * Math.PI / 180)*arc.radius,
        arcStartY = arc.centerY + Math.sin(arc.startAngle * Math.PI / 180)*arc.radius,
        arcEndX = arc.centerX + Math.cos((arc.startAngle + arc.arcAngle * progress) * Math.PI / 180)*arc.radius,
        arcEndY = arc.centerY + Math.sin((arc.startAngle + arc.arcAngle * progress) * Math.PI / 180)*arc.radius;

        return 'M ' + arcStartX.toString() + ' ' + arcStartY.toString() + ' A ' + arc.radius.toString() + ' ' + arc.radius.toString() + ' 0 0 1 ' + arcEndX.toString() + ' ' + arcEndY.toString();
      }

      function arcPathMiddle(arc, prog) {
        var progress = prog || 1,
        medianAngle = arc.startAngle + 0.5 * arc.arcAngle,
        arcStartX = arc.centerX + Math.cos((medianAngle - arc.arcAngle * 0.5 * progress) * Math.PI / 180)*arc.radius,
        arcStartY = arc.centerY + Math.sin((medianAngle - arc.arcAngle * 0.5 * progress) * Math.PI / 180)*arc.radius,
        arcEndX = arc.centerX + Math.cos((medianAngle + arc.arcAngle * 0.5 * progress) * Math.PI / 180)*arc.radius,
        arcEndY = arc.centerY + Math.sin((medianAngle + arc.arcAngle * 0.5 * progress) * Math.PI / 180)*arc.radius;

        return 'M ' + arcStartX.toString() + ' ' + arcStartY.toString() + ' A ' + arc.radius.toString() + ' ' + arc.radius.toString() + ' 0 0 1 ' + arcEndX.toString() + ' ' + arcEndY.toString();
      }

      function hideWithQ(el) {
        var q1 = document.createElement('div'),
        q2 = document.createElement('div'),
        q3 = document.createElement('div'),
        q4 = document.createElement('div');

        q1.classList.add('q', 'q1');
        q2.classList.add('q', 'q2');
        q3.classList.add('q', 'q3');
        q4.classList.add('q', 'q4');

        q1.dataset.type = Math.round(Math.random()*3);
        q2.dataset.type = Math.round(Math.random()*3);
        q3.dataset.type = Math.round(Math.random()*3);
        q4.dataset.type = Math.round(Math.random()*3);

        el.appendChild(q1);
        el.appendChild(q2);
        el.appendChild(q3);
        el.appendChild(q4);

        return el;
      }

      function initQ(className) {
        var elements = document.getElementsByClassName(className);
        for (var i=0; i < elements.length; i++) {
          hideWithQ(elements[i]);
        }
      }

      function initQString(queryString) {
        [].slice.call(document.querySelectorAll(queryString)).map(function(el, index) {
          var elString = el.innerHTML;
          el.innerHTML = '';
          for (var i = 0; i < elString.length; i++) {
            var char = elString[i],
            charEl = document.createElement('span');
            charEl.innerHTML = char;
            charEl.classList.add('super-q');
            el.appendChild(charEl);
            hideWithQ(charEl);
          }
        });
      }

      initQString('.step__title');
      initQString('.title');


      var el1 = document.getElementById('process'),
      arc1 = document.getElementById('step__arc-1');

      var startCircle = new Step(el1, {
        tweens : [
        new mojs.Burst({
          parent: el1,
          duration: 1700,
          shape : 'circle',
          fill: '#C0C1C3',
          x: '50%',
          y: '50%',
          opacity: 0.6,
          childOptions: { radius: {15:0} },
          radius: {30:210},
          count: 8,
          isRunLess: true,
          easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
        }),
        new mojs.Tween({
          duration : 800,
          delay: 700,
          onUpdate: function(progress) {
            var easing = mojs.easing.ease.out(progress),
            steps = document.getElementsByClassName('step__spot-circle');

            for (var i = 0, step; i < steps.length; i++) {
              step = steps[i];
              step.setAttribute('r', STEP__RADIUS * easing);
            }
          }
        }),

        new mojs.Tween({
          duration : 800,
          delay: 750,
          onUpdate: function(progress) {
            var easing = mojs.easing.ease.in(progress);
            circleArcs.forEach(function(arc, index) {
              var id = 'circle__arc-' + Math.round(index + 1).toString(),
              arcEl = document.getElementById(id);
              if (arcEl) {
                arcEl.setAttribute('d', arcPathMiddle(arc, easing));
              }
            });
          }
        }),

        new mojs.Tween({
          duration : 700,
          delay: 1300,
          onUpdate: function(progress) {
            var easingFunction = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0'),
            easing = mojs.easing.ease.out(progress),
            stepNumbers = document.getElementsByClassName('step__number');

            for (var i=0; i < stepNumbers.length; i++) {
              stepNumbers[i].style.opacity = easing;
            }
          }
        }),

        new mojs.Tween({
          duration : 1000,
          delay: 600,
          onUpdate: function(progress) {
            var easingFunction = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0'),
            easing = mojs.easing.ease.in(progress),
            title = document.querySelector('.title');

            function setQStyle(q) {
              switch (q.dataset.type) {
                case '0':
                q.style.top = Math.round(q.classList.contains('q2', 'q4') ? 50 : 0 + 50*easing).toString() + '%';
                q.style.height = Math.round(55*(1-easing)).toString() + '%';
                break;

                case '1':
                q.style.left = Math.round(q.classList.contains('q3', 'q4') ? 50 : 0 + 50*easing).toString() + '%';
                q.style.width = Math.round(55*(1-easing)).toString() + '%';
                break;

                case '2':
                q.style.height = Math.round(55*(1-easing)).toString() + '%';
                break;

                case '3':
                q.style.width = Math.round(55*(1-easing)).toString() + '%';
                break;
              }
            }

            [].slice.call(title.querySelectorAll('.q')).forEach(setQStyle);
            title.style.opacity = 1.5*easing;
          }
        })
        ],
        onCheck : function() {
        },
        onUnCheck : function() {
        }
      });


      function Step(el, options, target) {
        this.el = el;
        this.target = target;
        this.options = extend( {}, this.options );
        extend( this.options, options );

        this.checked = false;

        this.timeline = new mojs.Timeline();

        for(var i = 0, len = this.options.tweens.length; i < len; ++i) {
          this.timeline.add(this.options.tweens[i]);
        }

        var self = this;

        var timer = $timeout(function() {
          self.checked = true;
          self.options.onCheck();
          self.timeline.start();
        }, parseInt(this.el.id.split('-').pop()) * 5000);

        function onClick() {
          $timeout.cancel(timer);
          if( self.checked ) {
            self.options.onUnCheck();
          }
          else {
            self.checked = true;
            self.options.onCheck();
            self.timeline.start();
          }
        }
        if (this.target) {
          this.target.addEventListener(clickHandler, onClick);
        } else if (this.el) {
          this.el.addEventListener(clickHandler, onClick);
        }
      }

      Step.prototype.start = function() {
        if (!this.checked) {
          this.timeline.start();
          this.checked = true;
        }
      };

      Step.prototype.options = {
        tweens : [
        new mojs.Burst({
          shape : 'circle',
          isRunLess: true
        })
        ],
        onCheck : function() { return false; },
        onUnCheck : function() { return false; }
      };

      function initSteps() {
        return [].slice.call(document.querySelectorAll('.step')).map(function(stepEl, index) {
          return new Step(stepEl, {
            tweens : [
            new mojs.Tween({
              duration : 900,
              onUpdate: function(progress) {
                var easingFunction = mojs.easing.bezier(0.075, 0.82, 0.165, 1),
                easing = mojs.easing.circ.in(progress),
                arcEl = document.getElementById('step__arc-' + index);

                if (arcEl) {arcEl.setAttribute('d', arcPath(arcs[index - 1], easing));}
              }
            }),

            new mojs.Tween({
              duration : 1200,
              delay: 2300,
              onUpdate: function(progress) {
                if (index === 7) {
                  var easing = mojs.easing.ease.in(progress),
                  arcEl = document.getElementById('step__arc-' + Math.round(index + 1).toString());

                  if (arcEl) {arcEl.setAttribute('d', arcPath(arcs[index], easing));}
                }

              }
            }),

            new mojs.Burst({
              parent: stepEl,
              duration: 2000,
              delay: index === 0 ? 0 : 900,
              shape : 'circle',
              fill: COLORS[index],
              x: '50%',
              y: '50%',
              opacity: 0.6,
              childOptions: { radius: {15:0} },
              radius: {10:30},
              count: 10,
              isRunLess: true,
              easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
            }),

            new mojs.Tween({
              duration : 1200,
              delay: index === 0 ? 0 : 900,
              onUpdate: function(progress) {
                var circle = stepEl.querySelector('.step__spot-circle');
                var elasticOutProgress = mojs.easing.elastic.out(progress);
                circle.style.opacity = elasticOutProgress;
              },
              onFirstUpdate: function() {
                stepEl.querySelector('.step__spot-circle').style.stroke = COLORS[index];
                stepEl.querySelector('.step__spot-circle').style.fill = COLORS[index];
                stepEl.querySelector('.step__number').style.color = '#ffffff';
              }
            }),

            new mojs.Tween({
              duration : 700,
              delay: index === 0 ? 200 : 1100,
              onUpdate: function(progress) {
                var easingFunction = mojs.easing.path('M0,100 C50,100 50,100 50,50 C50,0 50,0 100,0'),
                easing = mojs.easing.circ.in(progress),
                title = stepEl.querySelector('.step__title');

                function setQStyle(q) {
                  switch (q.dataset.type) {
                    case '0':
                    q.style.top = Math.round(q.classList.contains('q2', 'q4') ? 50 : 0 + 50*easing).toString() + '%';
                    q.style.height = Math.round(55*(1-easing)).toString() + '%';
                    break;

                    case '1':
                    q.style.left = Math.round(q.classList.contains('q3', 'q4') ? 50 : 0 + 50*easing).toString() + '%';
                    q.style.width = Math.round(55*(1-easing)).toString() + '%';
                    break;

                    case '2':
                    q.style.height = Math.round(55*(1-easing)).toString() + '%';
                    break;

                    case '3':
                    q.style.width = Math.round(55*(1-easing)).toString() + '%';
                    break;
                  }
                }

                [].slice.call(title.querySelectorAll('.q')).forEach(setQStyle);
                title.style.opacity = 1.5*easing;
              }
            }),

            new mojs.Tween({
              duration : 1000,
              delay: index === 0 ? 400 : 1200,
              onUpdate: function(progress) {
                var easing = mojs.easing.circ.in(progress),
                stepIcon = stepEl.querySelector('.step__icon');
                stepIcon.style.opacity = easing;
              }
            }),

            new mojs.Tween({
              duration : 1400,
              delay: index === 0 ? 400 : 1200,
              onUpdate: function(progress) {
                var easing = mojs.easing.circ.in(progress),
                stepInfo = stepEl.querySelector('.step__text'),
                stepDiv = stepEl.querySelector('.step__info'),
                stepRole = stepEl.querySelector('.step__role');
                stepInfo.style.opacity = easing;
              }
            }),
            ],
            onCheck: function() {

            }
          });
});
}

var steps = initSteps();
startCircle.start();



}
};
}]);
})();
