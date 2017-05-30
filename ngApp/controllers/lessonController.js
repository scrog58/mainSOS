var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var LessonsController = (function () {
            function LessonsController(courseService, lessonServices, $state) {
                var _this = this;
                this.courseService = courseService;
                this.lessonServices = lessonServices;
                this.$state = $state;
                courseService.getOne($state.params.id).then(function (data) {
                    _this.course = data;
                });
                this.listLessons();
            }
            LessonsController.prototype.listLessons = function () {
                this.lessons = this.lessonServices.getAllCourseLessons(this.course._id);
            };
            return LessonsController;
        }());
        Controllers.LessonsController = LessonsController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
