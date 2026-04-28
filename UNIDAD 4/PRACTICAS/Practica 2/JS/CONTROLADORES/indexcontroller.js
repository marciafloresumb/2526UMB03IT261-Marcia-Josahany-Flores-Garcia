angular.module("app").controller("index",index);
index.$inject=["$scope", "$log"];
function index($scope, $log){
    console.log("controlador");
    alert("hola");
    $scope.mensaje1="hola soy una variable desde controlador";
}