document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generateResume").addEventListener("click", function() {
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const skills = document.getElementById('skills').value.split(','); 
        const experience = document.getElementById('experience').value;
        const education = document.getElementById('education').value;
        const address = document.getElementById('address').value;
        const courses = document.getElementById('courses').value;
        const summary = document.getElementById('summary').value;

        document.getElementById('displayName').innerText = firstName + ' ' + lastName;
        document.getElementById('displayEmail').innerText = email;
        document.getElementById('displayPhone').innerText = phone;
        document.getElementById('displaySkills').innerText = skills;
        document.getElementById('displayExperience').innerText = experience;
        document.getElementById('displayEducation').innerText = education;
        document.getElementById('displayAddress').innerText = address;
        document.getElementById('displayCourses').innerText = courses;
        document.getElementById('displaySummary').innerText = summary;


        const skillsList = document.getElementById('displaySkills');
        skillsList.innerHTML = ''; // Clear any previous entries
        skills.forEach(skill => {
            const li = document.createElement('li'); // Create a new list item
            li.innerText = skill.trim(); // Trim spaces and add skill
            skillsList.appendChild(li); // Append the list item to the skills list
    });
});

})