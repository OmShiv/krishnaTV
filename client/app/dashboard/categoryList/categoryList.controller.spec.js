'use strict';

describe('Controller: CategoryListCtrl', function () {

  // load the controller's module
  beforeEach(module('krishnatvApp'));
  beforeEach(module('socketMock'));

  var CategoryListCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/categories')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    CategoryListCtrl = $controller('CategoryListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of categories to the scope', function () {
    $httpBackend.flush();
    expect(scope.allCategories.length).toBe(4);
  });
});
