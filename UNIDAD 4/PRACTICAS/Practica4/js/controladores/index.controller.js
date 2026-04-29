angular.module('app').controller('Index', Index);

Index.$inject = ['$scope', '$log'];

function Index($scope, $log) {

    $scope.formConsultaRuta = {
        fechaInicio: '',
        fechaFin: '',
        idProveedor: '',
        idAutomovil: '',
        idDriver: '',
        idRuta: '',
    }

    $scope.imprimirMensaje = () => {
        console.log($scope.formConsultaRuta);
    }
    $scope.optionEjemplo={
        etiqueta:"Chevy",
        valor:69
    }
$scope.optiondriver =[
    {
        etiqueta:"10",
        valor:1
    },
    {
        etiqueta:"9",
        valor:2
    },
    {
        etiqueta:"8",
        valor:3
    },
    {
        etiqueta:"7",
        valor:4
    },
    {
        etiqueta:"6",
        valor:5
    },
];
}

