document.addEventListener("DOMContentLoaded", async () => {
    // Get the student ID from the query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id"); // e.g., update-student.html?id=1
  
    if (studentId) {
      // Fetch the student data and populate the form
      await fetchStudentData(studentId);
    }
  });
  
  // Function to fetch student data by ID and populate the form
  async function fetchStudentData(studentId) {
    try {
      const response = await fetch("http://localhost:8080/student/getAll"); // Assuming you fetch all students
      if (response.ok) {
        const students = await response.json();
        const student = students.find((stu) => stu.id === parseInt(studentId)); // Find student by ID
  
        if (student) {
          // Populate the form fields
          document.getElementById("name").value = student.name;
          document.getElementById("course").value = student.course;
          document.getElementById("branch").value = student.branch;
        } else {
          alert("Student not found!");
        }
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  }
  
  // Function to handle form submission for updating the student
  async function handleUpdate(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Get student details from the form
    const urlParams = new URLSearchParams(window.location.search);
    const studentId = urlParams.get("id");
  
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const branch = document.getElementById("branch").value;
  
    const updatedStudent = { id: parseInt(studentId), name, course, branch };
  
    try {
      // Send updated data to the server
      const response = await fetch("http://localhost:8080/student/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedStudent),
      });
  
      if (response.ok) {
        alert("Student updated successfully!");
        window.location.href = "view-student.html"; // Redirect to the student data page
      } else {
        alert("Failed to update student.");
      }
    } catch (error) {
      console.error("Error updating student:", error);
    }
  }
  
  // Attach the `handleUpdate` function to the form submission
  document.querySelector("form").addEventListener("submit", handleUpdate);
  