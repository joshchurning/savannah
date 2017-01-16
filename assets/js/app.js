angular.module('app', ['ui.bootstrap', 'formly', 'formlyBootstrap'])
.controller('main', ['$scope', '$uibModal' , function($scope, $uibModal) {
  $scope.text = "Hello, Savannah";

  $scope.close = function() {
			$uibModalInstance.dismiss('dismiss');
	  }

  $scope.openContactModal = function() {
  	var modalInstance = $uibModal.open({
		templateUrl: 'modalTemplate.html',
		controller: 'contactEmailController',
		size: 'lg',
		resolve: { }
	});
  }

  $scope.openLoginModal = function() {
  	var modalInstance = $uibModal.open({
		templateUrl: 'login.html',
		controller: 'contactEmailController',
		size: 'lg',
		resolve: { }
	});
  }

  $scope.openSignupModal = function() {
  	var modalInstance = $uibModal.open({
		templateUrl: 'signup.html',
		controller: 'contactEmailController',
		size: 'lg',
		resolve: { }
	});
  }

  $scope.opeFileUploadModal = function() {
  	var modalInstance = $uibModal.open({
		templateUrl: 'file-upload.html',
		controller: 'contactEmailController',
		size: 'lg',
		resolve: { }
	});
  }

  $scope.opeFileDownloadModal = function() {
  	var modalInstance = $uibModal.open({
		templateUrl: 'file-download.html',
		controller: 'contactEmailController',
		size: 'lg',
		resolve: { }
	});
  }

  $scope.download = function(_filename) {
  	var payload = {
  		filename: _filename
  	}
  	io.socket.post('/file/download', payload, function (error) {
	  	
	  });
  }

}])
.controller('contactEmailController', ['$scope', '$uibModalInstance' , function($scope, $uibModalInstance) {
	$scope.isError = false;

	$scope.fields = [ 
		{
			key: 'address',
			type: 'input',
			templateOptions: {
				type: 'email',
				label: 'Email:',
				placeholder: 'Enter your email address',
				required: true
			}
		},
		{
			key: 'message',
			type: 'textarea',
			templateOptions: {
				type: 'text',
				label: 'Message:',
				placeholder: 'Enter your message',
				required: true
			}
		}
    ]

	$scope.sendContactEmail = function() {
	  	payload = {
	  		message: $scope.data.message,
	  		address: $scope.data.address
	  	}
	  	io.socket.post('/Email/sendContactEmail', payload, function (error) {
	  		console.log(error.payload);
	  	});
	  	
	  	$scope.close();
	  }

	  $scope.close = function() {
			$uibModalInstance.dismiss('dismiss');
	  }
}]);