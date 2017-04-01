var mymodal = angular.module('mymodal');

mymodal.controller('mainCtrl', function ($scope) {
  $scope.position={};
  $scope.userInfo={};
 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      $scope.$apply(function(){
        $scope.position = {latitude: position.coords.latitude,
          longitude: position.coords.longitude
        
      };
      });
    });
  }
    $scope.showSignUpModal = false;
    $scope.showSignInModal =false;
    $scope.buttonClicked = "";
    $scope.toggleModal = function(btnClicked){
        $scope.buttonClicked = btnClicked;
        switch(btnClicked){
        case 'signup':  $scope.showSignUpModal = !$scope.showSignUpModal;
        break;
         case 'signin':  $scope.showSignInModal = !$scope.showSignInModal;
        break;

        }
    };

        $scope.submit = function(valueType){
      console.dir($scope.userInfo);    
    };

  });

mymodal.directive('modal', function () {
    return {
    
      template:`<div class="modal fade"> 
          <div class="modal-dialog">  
            <div class="modal-content"> 
              <div class="modal-header"> 
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title"> Sign Up</h4>
              </div>
              <div class="modal-body" ng-transclude>
                </div> 
            </div>
          </div>
        </div>` ,
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
           // popup close
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });


  mymodal.service('myService', function() {
});