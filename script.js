document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generateResume").addEventListener("click", function () {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      const skillsInput = document.getElementById("skills").value;
      const experience = document.getElementById("experience").value;
      const education = document.getElementById("education").value;
      const address = document.getElementById("address").value;
      const courses = document.getElementById("courses").value;
      const summary = document.getElementById("summary").value;
  
      // Display the text information
      document.getElementById("displayName").innerText = firstName + " " + lastName;
      document.getElementById("displayEmail").innerText = email;
      document.getElementById("displayPhone").innerText = phone;
      document.getElementById("displayExperience").innerText = experience;
      document.getElementById("displayEducation").innerText = education;
      document.getElementById("displayAddress").innerText = address;
      document.getElementById("displayCourses").innerText = courses;
      document.getElementById("displaySummary").innerText = summary;
  
      // Process and display skills
      const skillsList = document.getElementById("displaySkills");
      skillsList.innerHTML = ""; // Clear any previous entries
  
      // Split the skills input into an array and trim each skill
      const skillsArray = skillsInput.split(",").map(skill => skill.trim());
  
      // Process each skill and add it to the list
      skillsArray.forEach(skill => {
        if (skill) {
          // Check if the skill is not an empty string
          const li = document.createElement("li"); // Create a new list item
          li.innerText = skill; // Set the text of the list item
          skillsList.appendChild(li); // Append the list item to the skills list
        }
      });
    });
  });
  