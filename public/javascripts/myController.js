/**
 * Created by root on 1/8/17.
 */
angular.module("myportfolio", ['ngRoute','ngResource','firebase'])
    .controller('testController',['$scope',function($scope){
        $scope.jsVariable = 'Controller is working';
    }])
    .factory('portfolio', ['$firebaseArray', function ($firebaseArray) {

        var FIREBASE_URL = "https://blistering-fire-5210.firebaseio.com/";

        return {
            all: function(key) {
                var ref = new Firebase(FIREBASE_URL + '/' +key);
                return $firebaseArray(ref);
            }
        }
    }])
    .controller('portfolioCtrl', function($scope, portfolio) {
        $scope.education = portfolio.all('education');
        $scope.work = portfolio.all('work');
        $scope.skills = portfolio.all('skills');
        $scope.links = portfolio.all('links');
    })
