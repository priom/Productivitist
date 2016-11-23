angular.module('productivitist.controllers', [])
    .controller('mainCtrl', function ($scope, $ionicModal) {
        $scope.tasks = [];

        $ionicModal.fromTemplateUrl('templates/addTask.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.workspaceList = [
            { text: "Shopping", value: "shop" },
            { text: "Priority", value: "prior" },
            { text: "Projects", value: "proj" }
        ];

        $scope.data = {
            workspace: 'priority'
        };

        $scope.workspaceChange = function(item) {
            console.log("Selected Workspace, text:", item.text, "value:", item.value);
            if (item.value == "shop") {
                $scope.createTask = function (t) {
                    $scope.tasks.push({name: t.name});
                    $scope.modal.hide();
                };
                return item.value;
            }
        };
    })

    .controller('shoppingCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

        // Set Motion
        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionicMaterialInk.displayEffect();
    })

    .controller('priorityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

        // Set Motion
        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionicMaterialInk.displayEffect();
    })

    .controller('projectsCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

        // Set Motion
        $timeout(function() {
            ionicMaterialMotion.slideUp({
                selector: '.slide-up'
            });
        }, 300);

        $timeout(function() {
            ionicMaterialMotion.fadeSlideInRight({
                startVelocity: 3000
            });
        }, 700);

        // Set Ink
        ionicMaterialInk.displayEffect();
    })
