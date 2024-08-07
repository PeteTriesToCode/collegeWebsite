function choose() {
  const courses = {
    bit: {
      title: "Bachelor of Information Technology",
      nqf: 7,
      courseCode: 94121,
      duration: "3 years",
      description: "A detailed program focusing on various aspects of information technology.",
      link: "course1_bit.html"
    },
    bcom: {
      title: "Bachelor of Computing",
      nqf: 8,
      courseCode: 62689,
      duration: "4 years",
      description: "A thorough course covering business principles and commerce.",
      link: "course2_bcom.html"
    },
    diploma: {
      title: "Diploma",
      courseCode: 120097,
      nqf: 6,
      duration: "3 years",
      description: "An intermediate course offering a comprehensive understanding of the field.",
      link: "course3_diploma.html"
    },
    highercertificate: {
      title: "Higher Certificate",
      courseCode: 71850,
      duration: "1 year",
      description: "A foundational course providing essential skills and knowledge for further study.",
      link: "course4_highercertificate.html"
    }
  };

  // Get the value from the input field and convert to lowercase
  let input = document.getElementById("course").value.trim().toLowerCase();

  // Special case for "Higher Certificate"
  if (input === "higher certificate" || input === "higher" || input === "certificate" || input === "high" || input === "cert") {
    input = "highercertificate";
  }

  if (input === "di" || input === "dp" || input === "diploema" || input === "diplom" || input === "dip") {
    input = "diploma";
  }

  if (input === "bom" || input === "bachelor of comupting" || input === "bach of compt" || input === "computing" || input === "science") {
    input = "bcom";
  }

  if (input === "bt" || input === "bachelor of it" || input === "bach of it" || input === "information" || input === "technology" || input === "technologies") {
    input = "bit";
  }

  // Find the course based on the normalized input value
  const course = courses[input];

  // Get the output divs
  const output = document.getElementById("output");
  const output2 = document.getElementById("output2");

  // Clear previous content
  output.innerHTML = "";
  output2.innerHTML = "";

  // Check if course was found and display result
  if (course) {
    output.style.display = "flex";
    // output.style.justifyContent = "center";
    // output.style.alignItems = "center";
    // output.style.marginTop = "10px";
    // output.style.textDecoration = "none";
    output.setAttribute("href", course.link);
    output.innerHTML = `
      <article class="course">
        <h3>${course.title}</h3>
        <p><strong>Course Code:</strong> ${course.courseCode || "N/A"}</p>
        <p><strong>NQF Level:</strong> ${course.nqf || "N/A"}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Description:</strong> ${course.description}</p>
      </article>
    `;
  } else {
    output.style.display = "none";
    output2.innerHTML = "<p>Course not found. Please check your input and try again.</p>";
  }
}
