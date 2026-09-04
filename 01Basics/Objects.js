const course = {
    "name" : "JS Course",
    "price" : "999",
    "Instructor" : "Hitesh"
}

console.log(course.Instructor)

// destructuring in objects -->>>
const {Instructor} = course
console.log(Instructor)
