var _a, _b, _c;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Display resume details
    document.getElementById('output-name').textContent = name;
    document.getElementById('output-email').textContent = email;
    document.getElementById('output-education').textContent = education;
    document.getElementById('output-experience').textContent = experience;
    document.getElementById('output-skills').textContent = skills;
    // Show resume output section
    document.getElementById('resume-output').style.display = 'block';
    // Generate a unique URL for the user
    var username = name.toLowerCase().replace(/\s+/g, ''); // Simplified username generation
    var shareLink = "".concat(username, ".vercel.app/resume");
    var shareButton = document.getElementById('share-link-btn');
    shareButton.setAttribute('data-link', shareLink);
});
(_b = document.getElementById('share-link-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var shareLink = this.getAttribute('data-link');
    if (shareLink) {
        alert("Share this resume link: ".concat(shareLink));
    }
    else {
        alert('No resume generated yet!');
    }
});
(_c = document.getElementById('download-pdf-btn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var name = document.getElementById('output-name').textContent;
    var email = document.getElementById('output-email').textContent;
    var education = document.getElementById('output-education').textContent;
    var experience = document.getElementById('output-experience').textContent;
    var skills = document.getElementById('output-skills').textContent;
    var resumeContent = "\n      Name: ".concat(name, "\n\n      Email: ").concat(email, "\n\n      Education: ").concat(education, "\n\n      Experience: ").concat(experience, "\n\n      Skills: ").concat(skills, "\n\n    ");
    var blob = new Blob([resumeContent], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
});
