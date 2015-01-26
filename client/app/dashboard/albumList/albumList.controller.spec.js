'use strict';

describe('Controller: AlbumListCtrl', function () {

  // load the controller's module
  beforeEach(module('krishnatvApp'));
  beforeEach(module('socketMock'));

  var AlbumListCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/albums')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    AlbumListCtrl = $controller('AlbumListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of albums to the scope', function () {
    $httpBackend.flush();
    expect(scope.allAlbums.length).toBe(4);
  });
});
