'use strict';

describe('Controller: SongListCtrl', function () {

  // load the controller's module
  beforeEach(module('krishnatvApp'));
  beforeEach(module('socketMock'));

  var SongListCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/songs')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    SongListCtrl = $controller('SongListCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of songs to the scope', function () {
    $httpBackend.flush();
    expect(scope.allSongs.length).toBe(4);
  });
});
