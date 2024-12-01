document.addEventListener("DOMContentLoaded", fetchStudent);

async function fetchStudent() {
  try {
    const response = await fetch("http://localhost:8080/student/getAll");
    if (response.ok) {
      const students = await response.json();
      const tbody = document.getElementById("tbody");
      tbody.innerHTML = ''; //Clear Existing Table content

      students.forEach((student) => {
        const row = document.createElement("tr");
        row.classList.add("align-middle"); // Add vertical alignment for the row
        row.innerHTML = `
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.course}</td>
                    <td>${student.branch}</td>
                    <td>
                    <button class="btn btn-primary" onclick="updateStudent(${student.id})">Update</button>
                    <button class = "btn btn-danger ms-2" onclick="deleteStudent(${student.id})">Delete</button>
                    </td>
                    `;
        tbody.appendChild(row);
      });
    }
  } catch (error) {
    console.error("Error fetching students:", error);
  }
}


async function deleteStudent(id){
  const baseUrl = "http://localhost:8080/student/delete/"+id;
  try{
    const response = await fetch(baseUrl, {
      method: "DELETE",
    });
   if( fetchStudent()); //Refresh the table after deletion 
    alert("Student deleted successfully");
  }
  catch(error){
    console.log("Error occurred while deleting student"+ error);
  }
}


function redirectToAddStudent(element) {
   setActiveNavLink(element);
  window.location.href = "add-student.html";
  console.log("Redirecting to Add Student...");
}
function updateStudent(id) {
  window.location.href = `update-student.html?id=${id}`; // Pass the ID as a query parameter
}

