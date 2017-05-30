var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(courseServices, $window, $state) {
                this.courseServices = courseServices;
                this.$window = $window;
                this.$state = $state;
                this.newCourse = {
                    name: ''
                };
                this.courseID = '';
                this.courses = courseServices.getAll();
            }
            HomeController.prototype.delete = function (course) {
                var _this = this;
                this.course = this.courseServices.delete(course._id).then(function () { return _this.courseServices.reShow(); });
            };
            HomeController.prototype.addCourse = function () {
                var _this = this;
                this.newCourse = this.courseServices.add({
                    name: this.newCourse.name,
                }).then(function () { return _this.courseServices.reShow(); });
            };
            HomeController.prototype.redirectToLessons = function (courseID) {
                console.log(courseID);
                this.$state.go('lessons', { id: courseID });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var TestController = (function () {
            function TestController(testService) {
                this.weightclasses = testService.getAll();
            }
            return TestController;
        }());
        Controllers.TestController = TestController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
