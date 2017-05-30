var SOS;
(function (SOS) {
    var Services;
    (function (Services) {
        var AnswerService = (function () {
            function AnswerService($resource) {
                this.$resource = $resource;
                this.ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:id');
                this.QUESTION_ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/question/:id/answers');
                this.SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/answers/search/:search');
                this.CRUD_ANSWER_SERVICE = this.$resource('http://localhost:3003/api/v1/answers/:id');
            }
            AnswerService.prototype.getAll = function () {
                return this.ANSWER_RESOURCE.query();
            };
            AnswerService.prototype.getOne = function (Id) {
                return this.ANSWER_RESOURCE.get({ id: Id });
            };
            AnswerService.prototype.getAllbyQuestion = function (QuestionID) {
                return this.QUESTION_ANSWER_RESOURCE.query({ id: QuestionID });
            };
            AnswerService.prototype.searchAnswerContent = function (keywords) {
                return this.SEARCH_RESOURCE.query({ search: keywords });
            };
            AnswerService.prototype.add = function (answer) {
                return this.CRUD_ANSWER_SERVICE.save(answer).$promise;
            };
            AnswerService.prototype.update = function (answer) {
                return this.CRUD_ANSWER_SERVICE.save({ id: answer._id }, answer).$promise;
            };
            AnswerService.prototype.delete = function (Id) {
                return this.CRUD_ANSWER_SERVICE.delete({ id: Id }).$promise;
            };
            return AnswerService;
        }());
        Services.AnswerService = AnswerService;
        angular.module('mainsos').service('answerService', AnswerService);
    })(Services = SOS.Services || (SOS.Services = {}));
})(SOS || (SOS = {}));
