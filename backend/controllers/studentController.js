import Student from "../models/student.js";


export function createStudent(req,res){
if(req.user == null){
    res.json({
        message: "Unauthorized. Please login to create a student."
    })
    return
}

if(!req.user.isAdmin){
    res.json({
        message: "Forbidden. Only admins can create students."
    })
    return
}

    const newStudent = new Student( {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city
    }   );

    newStudent.save().then(
        () => {
        res.json({message: "Student created successfully", });

        });
}

export async function createStudentAsync() {
    try{
        const newStudent = new Student( {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city

    });
     await newStudent.save()
        res.json({message: "Student created successfully" ,});

    }catch(error){
        console.error("Error creating student:", error);
    };

}

export function getStudents(req,res) {
    
    console.log("Get Request Recieved");
    
    Student.find().then(
        (students)=>
        { console.log("Student Retrieved Successfully");
            res.json(students)
          

        }
    )}

    
