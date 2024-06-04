document
  .getElementById("linkForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const x = document.getElementById("integerInput").value;
    const link = `https://usis.bracu.ac.bd/academia/docuJasper/index?studentId=${x}&reportFormat=PDF&old_id_no=${x}&strMessage=&scholarProgramMsg=&companyLogo=%2Fvar%2Facademia%2Fimage%2FuniversityLogo%2F1571986355.jpg&companyName=BRAC+University&headerTitle=GRADE+SHEET&companyAddress=66%2C+MOHAKHALI+C%2FA%2C+DHAKA+-+1212.&academicStanding=Satisfactory&gradeSheetBackground=%2Fbits%2Fusis%2Ftomcat%2Fwebapps%2Facademia%2Fimages%2FgradeSheetBackground.jpg&_format=PDF&_name=GRADE_SHEET_${x}_NILOY_AHSAN&_file=student%2FrptStudentGradeSheetForStudent.jasper`;
    document.getElementById("linkContainer").innerHTML = `
      <p></p>
      <a href="${link}" target="_blank"> --> Let's Peep 😛 <-- </a>
    `;
  });
