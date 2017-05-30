var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var CourseServices = (function () {
            function CourseServices($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.COURSE_RESOURCE = this.$resource('http://localhost:3004/api/v1/courses');
            }
            CourseServices.prototype.getAll = function () {
                return this.COURSE_RESOURCE.query();
            };
            CourseServices.prototype.getOne = function (id) {
                return this.COURSE_RESOURCE.get({ id: id });
            };
            CourseServices.prototype.add = function (course) {
                return this.COURSE_RESOURCE.save(course).$promise;
            };
            CourseServices.prototype.edit = function (id) {
                return this.COURSE_RESOURCE.post({ id: id }).$promise;
            };
            CourseServices.prototype.delete = function (id) {
                return this.COURSE_RESOURCE.delete({ id: id }).$promise;
            };
            CourseServices.prototype.reShow = function () {
                return this.$window.location.reload();
            };
            return CourseServices;
        }());
        angular.module('mainsos').service('courseServices', CourseServices);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
