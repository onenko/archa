var app = angular.module('app', ['ngAnimate', 'ngTouch', 'ui.grid']);
 
app.controller('MainCtrl', ['$scope', '$http', 'uiGridConstants', function ($scope, $http, uiGridConstants) {
  $scope.gridOptions1 = {
    enableSorting: true,
    enableColumnMenus: false,

    columnDefs: [
      { field: 'thName', name: "Name", maxWidth: 200 },
      { field: 'thProp', name: "Prop", maxWidth: 50 },
      { field: 'thGrade', name: "Grade", maxWidth: 60 },
      { field: 'thVal1', name: "Val", maxWidth: 30 },
      { field: 'thLink', name: "Link", enableSorting: false }
    ],
    onRegisterApi: function( gridApi ) {
      $scope.grid1Api = gridApi;
    }
  };
 
  $scope.toggleGender = function() {
    if( $scope.gridOptions1.data[64].gender === 'male' ) {
      $scope.gridOptions1.data[64].gender = 'female';
    } else {
      $scope.gridOptions1.data[64].gender = 'male';
    };
    $scope.grid1Api.core.notifyDataChange( uiGridConstants.dataChange.EDIT );
  };
 
  /* provides dynamic growth of the table when new messages added */
  $scope.tableHeight = function() {
      var rowHeight = 30;
      var headerHeight = 60;
      return { height: ($scope.gridOptions1.data.length * rowHeight + headerHeight) + "px" };
  };

  $scope.myData = aa.items.;
 
/* $http.get('/data/101.json')
    .success(function(data) {
      $scope.gridOptions1.data = data;
    }); */

  $scope.gridOptions1.data = $scope.myData;
    
}]);
