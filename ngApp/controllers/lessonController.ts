namespace SOS.Controllers{

  export class LessonsController {
    public lesson;
    public lessons;
    public course;

    constructor (private courseService, private  lessonServices, private $state){
      courseService.getOne($state.params.id).then((data) => {
        this.course = data;
      })
      this.listLessons();
    }

    public listLessons(){
      this.lessons = this.lessonServices.getAllCourseLessons(this.course._id);
    }

    public delete(lesson){
      this.lessonServices.delete(lesson)
      .then((data)=> {
        this.lessons = this.lessonServices.listLessons();
      });
    }

    public edit(lesson){
      this.lessonServices.edit(lesson);
    }

    public add(lesson){
      let newLesson = {courseId:'', title:''};
      newLesson.courseId= this.lesson.courseId;
      newLesson.title= this.lesson.title;
      this.lesson.unshift(newLesson);
      this.lesson.courseId='';
      this.lesson.title='';
      }
  }
}
