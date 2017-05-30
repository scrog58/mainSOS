var SOS;
(function (SOS) {
    var Services;
    (function (Services) {
        var CommentService = (function () {
            function CommentService($resource) {
                this.$resource = $resource;
                this.COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/:id');
                this.ANSWER_COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/answers/:id/comment');
                this.CRUD_COMMENT_RESOURCE = this.$resource('http://localhost:3003/api/v1/courses/:id');
            }
            CommentService.prototype.getAll = function () {
                return this.COMMENT_RESOURCES.query();
            };
            CommentService.prototype.getOne = function (Id) {
                return this.COMMENT_RESOURCES.get({ id: Id });
            };
            CommentService.prototype.getAllbyAnswer = function (QuestionID) {
                return this.ANSWER_COMMENT_RESOURCES.query({ id: QuestionID });
            };
            CommentService.prototype.add = function (comment) {
                return this.CRUD_COMMENT_RESOURCE.save(comment).$promise;
            };
            CommentService.prototype.update = function (comment) {
                return this.CRUD_COMMENT_RESOURCE.save({ id: comment._id }, comment).$promise;
            };
            CommentService.prototype.delete = function (Id) {
                return this.CRUD_COMMENT_RESOURCE.delete({ id: Id }).$promise;
            };
            return CommentService;
        }());
        Services.CommentService = CommentService;
        angular.module('mainsos').service('commentService', CommentService);
    })(Services = SOS.Services || (SOS.Services = {}));
})(SOS || (SOS = {}));
