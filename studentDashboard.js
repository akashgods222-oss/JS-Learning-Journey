//initial data of student
const studentProfile={
  name:"Akash Yadav",
  course:"BCA (Computers Applications)",
   status:"Learning",
  skills:["HTML","CSS","Javascript",],
  score:0
};

//professional function to update profile
const updatedStudentProgress(profile,newScore) {
  profile.score = newScore;


  //Automatic status update logic 
  if(newScore>=40) {
    profile.status="Completed";
  } else{
    profile.status="Needs Improvement";
  }

  // dynamic skills addition 
  if(!profile.skills.includes("JS objects")) {
    profile.skills.push("JS objects");
  }
  return profile;
}

// Running the project
console.log("---Before update---");
console.log(JSON.stringify(studentProfile));

const updatedStudentProgress(studentProfile,85);

console.log("---After update---");
console.log(JSON.stringify(updatedProfile));
