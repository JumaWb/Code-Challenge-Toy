function calculateGrade (marks){
    if(marks>79){
      return "A";
    }else if(marks>=60 && marks<=79){
      return "B";
    }else if (marks>=49 && marks<=59){
      return "C";
    }else if (marks>=40 && marks<=49){
      return "D";
    }else if (marks<40){
      return "E";
    }
  }
  function testGrade(mark) {
      if (!isNaN(mark) && mark >= 0 && mark <= 100) {
          let grade = calculateGrade(mark);
          console.log("For mark", mark + ", the student's grade is:", grade);
      } else {
          console.log("Error: Marks should be between 0 and 100.");
      }
  }
  testGrade(55);