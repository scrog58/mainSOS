var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var AnswerController = (function () {
            function AnswerController(questionService, AnswerService, commentService, $stateParams) {
                var _this = this;
                this.questionService = questionService;
                this.AnswerService = AnswerService;
                this.commentService = commentService;
                this.$stateParams = $stateParams;
                this.newAnswer = {
                    aDate: Date.now(),
                    questionId: this.question._id,
                    aContent: "",
                    userId: "",
                    usefulCount: 0,
                    bestAnswer: false
                };
                this.newComment = {
                    cDate: Date.now(),
                    answerId: "",
                    aContent: "",
                    userId: "",
                    likeCount: 0
                };
                questionService.getOne($stateParams.id).then(function (data) {
                    _this.question = data;
                    _this.listAnswers();
                });
            }
            AnswerController.prototype.listAnswers = function () {
                this.answers = this.AnswerService.getAllbyQuestion(this.question._id);
            };
            AnswerController.prototype.listComments = function (id) {
                this.comments = this.commentService.getAllbyAnswer(id);
            };
            AnswerController.prototype.addAnswer = function () {
                this.newAnswer.aDate = Date.now();
                this.AnswerService.add(this.newAnswer);
                this.listAnswers();
            };
            AnswerController.prototype.addComment = function (answerID) {
                this.newComment.cDate = Date.now();
                this.newComment.answerId = answerID;
                this.commentService.add(this.newComment);
            };
            AnswerController.prototype.usefulAnswer = function (answerId) {
                var tempAnswer = this.AnswerService.getOne(answerId);
                tempAnswer.usefulCount++;
                this.updateAnswer(tempAnswer);
                this.listAnswers();
            };
            AnswerController.prototype.setBestAnswer = function (answerID) {
                var tempAnswer = this.AnswerService.getOne(answerID);
                tempAnswer.bestAnswer = true;
                this.updateAnswer(tempAnswer);
                this.listAnswers();
            };
            AnswerController.prototype.likeComment = function (commentID) {
                var tempComment = this.commentService.getOne(commentID);
                tempComment.likeCount++;
                this.updateComment(tempComment);
            };
            AnswerController.prototype.updateAnswer = function (answer) {
                this.AnswerService.update(answer);
            };
            AnswerController.prototype.updateComment = function (comment) {
                this.commentService.update(comment);
            };
            return AnswerController;
        }());
        Controllers.AnswerController = AnswerController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
