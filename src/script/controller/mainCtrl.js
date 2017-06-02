'use strict';

angular.module('app').controller('mainCtrl', ['$scope', function($scope){

	$scope.list = [{
		id: '1',
		name: '销售',
		companyName: '千度',
		imgSrc: 'image/company-3.png',
		city: '上海',
		industry: '互联网',
		time: '2016-06-01 11:05'
	},{
		id: '2',
		name: 'WEB前端',
		companyName: '木渴望',
		imgSrc: 'image/company-1.png',
		city: '北京',
		industry: '互联网',
		time: '2016-06-01 11:05'
	}];

}]);