document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('show');
    });
  }

  // Skill circle animation
  const circles = document.querySelectorAll('.circle');
  circles.forEach(circle => {
    const percent = parseFloat(circle.dataset.percent);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });

  // Experience section toggle
  const toggleBtn = document.getElementById("toggle-experience");
  const experienceDetails = document.getElementById("experience-details");

  if (toggleBtn && experienceDetails) {
    toggleBtn.addEventListener("click", () => {
      if (experienceDetails.classList.contains("hidden")) {
        experienceDetails.innerHTML = `
          <div class="experience-card">
            <h3>Fluxify Internship</h3>
            <p>
              My time at Fluxify was more than just a technical experience — it was a turning point in my journey as a developer. I joined with curiosity and left with clarity. Working on real-world projects taught me how to write clean, scalable code, collaborate with teams, and communicate ideas effectively.
            </p>
            <p>
              I learned how to manage tasks, meet deadlines, and adapt quickly to new tools and workflows. It helped me understand the value of feedback, the importance of version control, and the power of building with purpose. Fluxify gave me the confidence to take ownership of my growth and the courage to share it with others.
            </p>
          </div>
          <div class="experience-card">
            <h3>Education</h3>
            <p>
              As a Level Four Software Development student at APAER, I’ve built a strong foundation in both frontend and little backend technologies. My coursework has deepened my understanding of design principles, accessibility, and modular architecture — all of which I apply in my personal projects. With one certificate of completion in Frontend Development at <strong>UpskillsHub Internship</strong>, I’m equipped to tackle real-world challenges.
            </p>
          </div>
          <div class="experience-card">
            <h3>Growth Through Code</h3>
            <p>
              I believe in learning by building. I’ve faced bugs that tested my patience, deadlines that sharpened my focus, and feedback that fueled my growth. My journey is far from over — but every step so far has prepared me for what’s next. I build with intention, document with clarity, and share with the hope of inspiring others.
            </p>
          </div>
        `;
        experienceDetails.classList.remove("hidden");
        toggleBtn.textContent = "View Less";
      } else {
        experienceDetails.classList.add("hidden");
        experienceDetails.innerHTML = "";
        toggleBtn.textContent = "View Full Experience";
      }
    });
  }
});
