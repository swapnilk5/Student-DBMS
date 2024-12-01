async function handleSubmit(event) {
  //prevent default
  event.preventDefault();

  const name = document.getElementById("name").value;
  const course = document.getElementById("course").value;
  const branch = document.getElementById("branch").value;

  const student = { name, course, branch };

  console.log("Student Data:" + JSON.stringify(student));

  const baseUrl = "http://localhost:8080/student/add";

  try {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    if (response.ok) {
      alert("Student added successfully.");
    }
  } catch (error) {
    console.log("Error occured while adding student." + error);
  }
}

function redirectToViewStudent(element) {
  setActiveNavLink(element);
  window.location.href = "view-student.html";
  console.log("Redirecting to Student Data...");
}


