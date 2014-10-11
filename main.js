function MyFirstCtrl($scope){
  
  $scope.sorting = {
        by: 'price',
        desc: true
    };
    
    $scope.sortBy = function(byWhat) {
        $scope.sorting.by = byWhat; 
        $scope.sorting.desc = !$scope.sorting.desc;
    }
  
  $scope.kafeleks = [
    {
      product: 'http://lorempixel.com/output/city-q-c-177-102-4.jpg',
      name: 'City',
      shortDescription: 'City description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 10
    },
    {
      product: 'http://lorempixel.com/output/food-q-c-177-102-4.jpg',
      name: 'Food',
      shortdescription: 'Food description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 50
    },
    {
      product: 'http://lorempixel.com/output/nightlife-q-c-177-102-10.jpg',
      name: 'Nightlife',
      shortDescription: 'Nightlife description',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 30
    },
    {
      product: 'http://lorempixel.com/output/transport-q-c-177-102-8.jpg',
      name: 'Transport',
      shortDescription: 'Transport description',
      description: ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software..',
      price: 200
    }]
}