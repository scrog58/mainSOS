var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var IndexController = (function () {
            function IndexController(courseServices) {
                this.courses = courseServices.getAll();
            }
            return IndexController;
        }());
        Controllers.IndexController = IndexController;
        angular.module('mainsos').controller('indexController', IndexController);
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
