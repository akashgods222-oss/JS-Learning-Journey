const studentsList =[
{name:"Akash",score:86,status:"learning"},
{name:"Rahul",score:36,status:"learning"},
{name:"Amit",score:92,status:"learning"}
];
// map ek naya array return karta hai
const updatedScore= studentsList.map(function (student) {
    return{
        name:student.name,
        score:student.score+5,
        status:student.status
    };
});
console.log("--- bonus ke baad ki list ---");
console.log(JSON.stringify(updatedScore));

const toppers=studentsList.filter(function(student) {
    return student.score>80;
});

console.log("---toppers list---");
console.log(JSON.stringify(toppers));

console.log("--- all students list---")
studentsList.forEach(function(student) {
    console.log("Student Name:" + student.name)
});

