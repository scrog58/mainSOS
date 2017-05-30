var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var LessonServices = (function () {
            function LessonServices($resource) {
                this.$resource = $resource;
                this.LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/:id');
                this.COURSE_LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/course/:id/lessons');
            }
            LessonServices.prototype.getAll = function () {
                return this.LESSON_RESOURCE.query();
            };
            LessonServices.prototype.get = function (id) {
                return this.LESSON_RESOURCE.get({ id: id });
            };
            LessonServices.prototype.getAllCourseLessons = function (courseId) {
                return this.COURSE_LESSON_RESOURCE.query({ id: courseId });
            };
            LessonServices.prototype.add = function (course) {
                return this.LESSON_RESOURCE.save(course).$promise;
            };
            LessonServices.prototype.edit = function (id) {
                return this.LESSON_RESOURCE.post({ id: id }).$promise;
            };
            LessonServices.prototype.delete = function (id) {
                return this.LESSON_RESOURCE.delete({ id: id }).$promise;
            };
            return LessonServices;
        }());
        Services.LessonServices = LessonServices;
        angular.module('mainsos').service('lessonServices', LessonServices);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
