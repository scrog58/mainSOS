var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var QuestionController = (function () {
            function QuestionController(questionService, lessonServices, $state, $stateParams) {
                var _this = this;
                this.questionService = questionService;
                this.lessonServices = lessonServices;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.newQuestion = {
                    qTitle: '',
                    qContent: '',
                    qDate: Date.now(),
                    lessonID: this.lesson._id,
                    userId: '',
                    clickCount: 0
                };
                this.lessonServices.getOne($state.params.id)
                    .then(function (data) {
                    _this.lesson = data;
                    _this.listQuestions();
                });
            }
            QuestionController.prototype.listQuestions = function () {
                this.questions = this.questionService.getAllByLesson(this.lesson._id);
            };
            QuestionController.prototype.getLessonName = function (lesson) {
                console.log(this.lesson._id);
                this.questions = this.lessonServices.get({ name: this.lesson.name });
            };
            QuestionController.prototype.redirectToAnswers = function (question) {
                console.log(this.question._id);
                this.$state.go('answers', { id: this.question._id });
            };
            QuestionController.prototype.add = function (question) {
                this.newQuestion.qTitle = '';
                this.newQuestion.qContent = '';
                this.newQuestion.qDate = Date.now();
                this.questionService.add(this.newQuestion);
                this.listQuestions();
            };
            QuestionController.prototype.questionClickCount = function (questionId) {
                var clickQuestion = this.questionService.getOne(questionId);
                clickQuestion.clickCount++;
                this.updateQuestion(clickQuestion);
            };
            QuestionController.prototype.updateQuestion = function (question) {
                this.questionService.update(question);
            };
            QuestionController.prototype.delete = function (Id) {
                var _this = this;
                this.questionService.delete(Id)
                    .then(function (data) {
                    _this.questions = _this.questionService.getAll();
                });
            };
            return QuestionController;
        }());
        Controllers.QuestionController = QuestionController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
