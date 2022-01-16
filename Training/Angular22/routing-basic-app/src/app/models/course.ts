export class Course {
    constructor(
        public courseId:number,
        public courseName:string,
        public cost:number,
        public type:string,
        public medium:string,
        public trainer?:string
    ){}
    
}
