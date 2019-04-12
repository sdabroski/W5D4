function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
}

Student.prototype.name = function() {
  return this.fname + " " + this.lastname;
}

Student.prototype.enroll = function(course) {
  if(!this.courses.includes(course)) this.courses.push(course);
}

