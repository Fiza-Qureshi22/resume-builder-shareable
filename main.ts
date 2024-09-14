document.getElementById('resume-form')?.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    
    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  
    // Display resume details
    (document.getElementById('output-name') as HTMLSpanElement).textContent = name;
    (document.getElementById('output-email') as HTMLSpanElement).textContent = email;
    (document.getElementById('output-education') as HTMLSpanElement).textContent = education;
    (document.getElementById('output-experience') as HTMLSpanElement).textContent = experience;
    (document.getElementById('output-skills') as HTMLSpanElement).textContent = skills;
  
    // Show resume output section
    (document.getElementById('resume-output') as HTMLDivElement).style.display = 'block';
  
    // Generate a unique URL for the user
    const username = name.toLowerCase().replace(/\s+/g, ''); // Simplified username generation
    const shareLink = `${username}.vercel.app/resume`;
    const shareButton = document.getElementById('share-link-btn') as HTMLButtonElement;
    shareButton.setAttribute('data-link', shareLink);
  });
  
  document.getElementById('share-link-btn')?.addEventListener('click', function () {
    const shareLink = (this as HTMLButtonElement).getAttribute('data-link');
    if (shareLink) {
      alert(`Share this resume link: ${shareLink}`);
    } else {
      alert('No resume generated yet!');
    }
  });
  
  document.getElementById('download-pdf-btn')?.addEventListener('click', function () {
    const name = (document.getElementById('output-name') as HTMLSpanElement).textContent;
    const email = (document.getElementById('output-email') as HTMLSpanElement).textContent;
    const education = (document.getElementById('output-education') as HTMLSpanElement).textContent;
    const experience = (document.getElementById('output-experience') as HTMLSpanElement).textContent;
    const skills = (document.getElementById('output-skills') as HTMLSpanElement).textContent;
  
    const resumeContent = `
      Name: ${name}\n
      Email: ${email}\n
      Education: ${education}\n
      Experience: ${experience}\n
      Skills: ${skills}\n
    `;
  
    const blob = new Blob([resumeContent], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    link.click();
  });
  