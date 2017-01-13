(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		//$scope.name = "";


		$scope.stateOfBeing = "";


		$scope.ConHambre = function (stringToSplit, separator) {

			if (stringToSplit == null) {
				$scope.stateOfBeing = "You have to enter your food's lists separated by comma";
			}

			else{
				var arrayOfStrings = stringToSplit.split(separator);


			if (arrayOfStrings.length <=3) {
				$scope.stateOfBeing = "Enjoy!";
				$scope.name=null;//HERE I'M DEFINING THE TEXTBOX PROPERTY WITH NULL

				//AQUI ESTOU SOMENTE DEFININDO UM CSS PARA MEUS STATUS
				$scope.myObj = {
					"color" : "red",
					"font-size" : "20px",
					"padding" : "10px",
					"margin-top" : "10px",
					"width" : "150px",
				}

			}
			else{
				$scope.stateOfBeing = "It's too much";
				$scope.name=null;//HERE I'M DEFINING THE TEXTBOX PROPERTY WITH NULL


				//AQUI ESTOU SOMENTE DEFININDO UM CSS PARA MEUS STATUS
				$scope.myObj = {
					"color" : "green",
					"font-size" : "20px",
					"padding" : "10px",
					"margin-top" : "10px",
					"width" : "150px",
				}
			}
		}
	}

		// var tempestString = 'Oh brave new world that has such people in it.';
		// var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

		// var comma = ',';


		//splitString(name, comma);

	}

})();



// function splitString(stringToSplit, separator) {
// 	var arrayOfStrings = stringToSplit.split(separator);

// 	console.log('The original string is: "' + stringToSplit + '"');
// 	console.log('The separator is: "' + separator + '"');
// 	console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
// }

// // var tempestString = 'Oh brave new world that has such people in it.';
// var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

// var space = ' ';
// var comma = ',';

// // splitString(tempestString, space);
// // splitString(tempestString);
// splitString(name, comma);
