var myapp = angular.module('myApp', []);
myapp
.controller('formCtrl', function($scope){
	$scope.queryType = 'dijkstra';
	$scope.animationSpeed = '1';
	$scope.weighBar = '0';
	$scope.nodeBar = config.nodeBar;
	$scope.scale = 50;
	$scope.changeQuery = function(queryType){
		config.queryType = queryType;
	};
	$scope.changeSpeed = function(animationSpeed){
		config.animationSpeed = animationSpeed;
	};
	$scope.changeScale = function(scale){
		radius = 3 + scale * 0.08;
		cRadius = radius;
		markerWidth = 6 + 0.12 * scale;
		markerHeight = 6 + 0.12 * scale;
		refX = markerHeight / 2 + radius;
		refY = markerWidth / 2;
		force
		.charge(-(50 + scale * 9))
		.linkDistance(20 + scale * 2);
		update();
	}
	$scope.changeWeigh = function(weighBar){
		config.weighBar = weighBar;
		map = config.change();
		update();
	}
	$scope.changeNode = function(nodeBar){
		config.nodeBar = nodeBar;
		map = config.change();
		update();
	}
	$scope.draw = function(){
		config.run();
	}
	$scope.goto = function(){
		if (config.chosen != null){
			config.state = {
				name: 'preGoto',
				S: config.chosen.index,
			};
			document.getElementById('goto').className = "btn btn-default";
		}
	}
	$scope.help = function(){
		window.open('help.html', '_blank');
	}
})
.controller('searchCtrl', function($scope){
	$scope.movieName = "godfather";
	$scope.searchMovie = function(movieName){
		for (var i = 0; i < vis.selectAll("circle.node")[0].length; i++){
			console.log(vis.selectAll("circle.node")[0][i].__data__);
			if (vis.selectAll("circle.node")[0][i].__data__.movie.title.toLowerCase().includes(movieName)){
				vis.selectAll("circle.node")[0][i].__onclick();
				return;
			}
		}
		clear(node);
	}
});

