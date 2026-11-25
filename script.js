/* ============================================================================
   PORTFOLIO CONFIGURATION (EDIT YOUR DETAILS HERE)
   ----------------------------------------------------------------------------
   To update your website later, you only need to edit the values inside
   PORTFOLIO_CONFIG below. Save the file and refresh your browser to see changes.
   ============================================================================ */

const PORTFOLIO_CONFIG = {
  // 1. Personal Information
  personal: {
    fullName: "Nur A Rabbi Sami",
    brandName: "Sami.",
    title: "Computer Science and Engineering Student",
    university: "Daffodil International University (DIU)",
    department: "Computer Science and Engineering",
    country: "Bangladesh",
    // Replace with your own photo path (e.g., "assets/my-photo.jpg")
    profilePhoto: "assets/my-photo.jpeg.jpeg",
    profilePhotoAlt: "Profile photo of Nur A Rabbi Sami",
  },

  // 2. Hero Section (First Screen)
  hero: {
    eyebrow: "Daffodil International University • Bangladesh",
    greeting: "Hi, I'm Sami.",
    role: "Computer Science & Engineering Student",
    intro:
      "Currently studying Computer Science and Engineering in Bangladesh, building a solid foundation in programming, problem-solving, and software fundamentals.",
    primaryButtonText: "Explore My Work",
    secondaryButtonText: "Contact Me",
  },

  // 3. About Me Paragraphs
  about: {
    paragraphs: [
      "I am a Computer Science and Engineering student at Daffodil International University. I am interested in technology, programming, problem-solving, and exploring new areas of computer science.",
      "I am currently developing my programming and technical skills while exploring different opportunities in the technology field.",
    ],
  },

  // 4. Technical Skills (Add, remove, or update levels honestly)
  skills: [
    {
      name: "C Programming",
      level: "Foundational",
      description: "Practicing core syntax, loops, functions, arrays, pointers, and basic problem-solving.",
    },
    {
      name: "Java",
      level: "Beginner",
      description: "Learning language basics, control structures, and simple console applications.",
    },
    {
      name: "Object-Oriented Programming (OOP)",
      level: "Foundational",
      description: "Understanding classes, objects, encapsulation, inheritance, and polymorphism.",
    },
    {
      name: "Basic Data Structures & Algorithms",
      level: "Learning",
      description: "Studying arrays, strings, searching, sorting, and logical problem decomposition.",
    },
    {
      name: "Git and GitHub",
      level: "Beginner",
      description: "Using basic repositories, commits, and version control workflows.",
    },
    {
      name: "HTML and CSS",
      level: "Learning",
      description: "Building clean semantic web layouts and responsive styles.",
    },
  ],

  // 5. Education (Chronological Order)
  education: [
    {
      level: "SSC",
      institution: "Faridpur Zilla School",
      degree: "Secondary School Certificate (SSC)",
      status: "",
    },
    {
      level: "HSC",
      institution: "Govt. Rajendra College",
      degree: "Higher Secondary Certificate (HSC)",
      status: "",
    },
    {
      level: "Undergraduate",
      institution: "Daffodil International University",
      degree: "Bachelor of Science (B.Sc.) in Computer Science and Engineering",
      status: "Currently Studying",
    },
  ],

  // 6. Projects
  projectsNotice: "",
  projects: [
    {
      title: "Campus Navigation System",
      label: "Collaborative Team Project",
      description: "",
      technologies: [],
      githubUrl: "https://github.com/Anuvab-001/diu-campus-navigation",
      image: "",
    },
    {
      title: "Result Management System",
      label: "Collaborative Team Project",
      description: "",
      technologies: [],
      githubUrl: "https://github.com/Anuvab-001/student-result-management-system",
      image: "",
    },
  ],

  
  // 7. Personal Interests
  interests: {
    technology: {
      title: "Technology & Programming",
      icon: "code",
      items: ["C", "C++", "Java", "CSS"],
    },
    learning: {
      title: "Learning New Skills",
      icon: "book",
      items: [
        "Cloud Computing",
        "Networking",
        "Problem Solving",
        "Cybersecurity",
      ],
    },
    travel: {
      title: "Traveling & Exploring",
      icon: "compass",
      photos: [
        { src: "assets/travel-5.jpeg.jpeg", alt: "Travel photograph 1" },
        { src: "assets/travel-3.jpeg.jpeg", alt: "Travel photograph 2" },
        { src: "assets/travel-2.jpeg.jpeg", alt: "Travel photograph 3" },
        { src: "assets/travel-4.jpeg.jpeg", alt: "Travel photograph 4" },
        { src: "assets/travel-1.jpeg.jpeg", alt: "Travel photograph 5" },
      ],
    },
    guitar: {
      title: "Playing Guitar",
      icon: "guitar",
      videos: [
        { src: "assets/guiter-1.mp4.mp4", title: "Guitar performance 1" },
        { src: "assets/guiter-2.mp4.mp4", title: "Guitar performance 2" },
      ],
    },
  },


  // 8. Contact & Social Links
  // Any platform left empty ("") will stay hidden until you add its link.
  contact: {
    subtext:
      "Feel free to connect with me or reach out as I continue learning and growing in computer science.",
    email: "nurarabbisami@gmail.com",
    github: "https://github.com/nurarabbisami",
    linkedin: "", // Add your LinkedIn URL here later to display it automatically
    facebook: "https://www.facebook.com/share/1JBdRVe81D/",
  },
};

/* ============================================================================
   SVG ICONS (Clean inline icons — no external icon library required)
   ============================================================================ */
const ICONS = {
  code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  book: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`,
  music: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>`,
  guitar: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 9.5 21 3"></path><path d="m18 2 4 4"></path><path d="M11.5 12.5 9 10a4.5 4.5 0 0 0-6.4 6.4l2.1 2.1a4.5 4.5 0 0 0 6.4-6.4Z"></path><circle cx="7.5" cy="16.5" r="1"></circle></svg>`,
  compass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
  folder: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path></svg>`,
  external: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`,
  github: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>`,
  linkedin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`,
  facebook: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>`,camera: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>`,
  video: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m22 8-6 4 6 4V8Z"></path><rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect></svg>`,
};

/* ============================================================================
   RENDER FUNCTIONS (Populates HTML safely from PORTFOLIO_CONFIG)
   ============================================================================ */
function renderPortfolio() {
  const { personal, hero, about, skills, education, projectsNotice, projects, interests, contact } =
    PORTFOLIO_CONFIG;

  // Document Title & Brand
  document.title = `${personal.fullName} | Portfolio`;
  setText("nav-brand", personal.brandName);

  // Hero Section
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-title", hero.greeting);
  setText("hero-subtitle", hero.role);
  setText("hero-intro", hero.intro);
  setText("hero-primary-btn", hero.primaryButtonText);
  setText("hero-secondary-btn", hero.secondaryButtonText);

  const profileImg = document.getElementById("profile-image");
  if (profileImg) {
    profileImg.src = personal.profilePhoto;
    profileImg.alt = personal.profilePhotoAlt;
  }

  // About Section
  const aboutContainer = document.getElementById("about-paragraphs");
  if (aboutContainer) {
    aboutContainer.innerHTML = "";
    about.paragraphs.forEach((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      aboutContainer.appendChild(p);
    });
  }

  const infoList = document.getElementById("about-info-list");
  if (infoList) {
    infoList.innerHTML = "";
    const overviewItems = [
      { label: "Name", value: personal.fullName },
      { label: "Status", value: personal.title },
      { label: "University", value: personal.university },
      { label: "Department", value: personal.department },
      { label: "Country", value: personal.country },
    ];

    overviewItems.forEach((item) => {
      const wrapper = document.createElement("div");
      wrapper.className = "info-item";

      const dt = document.createElement("dt");
      dt.className = "info-label";
      dt.textContent = item.label;

      const dd = document.createElement("dd");
      dd.className = "info-value";
      dd.textContent = item.value;

      wrapper.appendChild(dt);
      wrapper.appendChild(dd);
      infoList.appendChild(wrapper);
    });
  }

  // Skills Section
  const skillsGrid = document.getElementById("skills-grid");
  if (skillsGrid) {
    skillsGrid.innerHTML = "";
    skills.forEach((skill) => {
      const card = document.createElement("article");
      card.className = "card skill-card reveal";

      const top = document.createElement("div");
      top.className = "skill-top";

      const name = document.createElement("h3");
      name.className = "skill-name";
      name.textContent = skill.name;

      const level = document.createElement("span");
      level.className = "skill-level";
      level.textContent = skill.level;

      top.appendChild(name);
      top.appendChild(level);

      const desc = document.createElement("p");
      desc.className = "skill-desc";
      desc.textContent = skill.description;

      card.appendChild(top);
      card.appendChild(desc);
      skillsGrid.appendChild(card);
    });
  }

  // Education Section
  const educationList = document.getElementById("education-list");
  if (educationList) {
    educationList.innerHTML = "";
    education.forEach((edu) => {
      const card = document.createElement("article");
      card.className = "card education-card reveal";

      const left = document.createElement("div");

      const inst = document.createElement("h3");
      inst.className = "education-institution";
      inst.textContent = edu.institution;

      const degree = document.createElement("p");
      degree.className = "education-degree";
      degree.textContent = edu.degree;

      const dept = document.createElement("p");
      dept.className = "education-department";
      dept.textContent = edu.department;

      left.appendChild(inst);
      left.appendChild(degree);
      left.appendChild(dept);

      const right = document.createElement("div");
      right.className = "education-meta";

      const badge = document.createElement("span");
      badge.className = "status-badge";
      badge.innerHTML = `<span class="status-dot" aria-hidden="true"></span>`;
      badge.appendChild(document.createTextNode(edu.status));

      const loc = document.createElement("span");
      loc.className = "education-location";
      loc.textContent = edu.location;

      right.appendChild(badge);
      right.appendChild(loc);

      card.appendChild(left);
      card.appendChild(right);
      educationList.appendChild(card);
    });
  }

  // Projects Section
  const projectsNoticeEl = document.getElementById("projects-notice");
  if (projectsNoticeEl) {
    if (projectsNotice && projectsNotice.trim() !== "") {
      projectsNoticeEl.textContent = projectsNotice;
      projectsNoticeEl.hidden = false;
    } else {
      projectsNoticeEl.textContent = "";
      projectsNoticeEl.hidden = true;
    }
  }

  const projectsGrid = document.getElementById("projects-grid");
  if (projectsGrid) {
    projectsGrid.innerHTML = "";
    projects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "card project-card reveal";

      // Optional image preview (only shown if an image path is provided)
      if (project.image && project.image.trim() !== "") {
        const thumb = document.createElement("div");
        thumb.className = "project-thumb";
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = `${project.title} preview`;
        thumb.appendChild(img);
        card.appendChild(thumb);
      }

      const body = document.createElement("div");
      body.className = "project-body";

      const topRow = document.createElement("div");
      topRow.className = "project-top";

      const badgeText = project.label || project.status;
      if (badgeText) {
        const label = document.createElement("span");
        label.className = "project-label";
        label.textContent = badgeText;
        topRow.appendChild(label);
      }

      const iconWrap = document.createElement("span");
      iconWrap.className = "project-icon";
      iconWrap.innerHTML = ICONS.folder;
      topRow.appendChild(iconWrap);

      const title = document.createElement("h3");
      title.className = "project-title";
      title.textContent = project.title;

      body.appendChild(topRow);
      body.appendChild(title);

      // Optional description (only shown if provided)
      if (project.description && project.description.trim() !== "") {
        const desc = document.createElement("p");
        desc.className = "project-desc";
        desc.textContent = project.description;
        body.appendChild(desc);
      }

      // Optional technologies (only shown if provided)
      if (Array.isArray(project.technologies) && project.technologies.length > 0) {
        const techList = document.createElement("div");
        techList.className = "project-tech";
        project.technologies.forEach((tech) => {
          const tag = document.createElement("span");
          tag.className = "tech-tag";
          tag.textContent = tech;
          techList.appendChild(tag);
        });
        body.appendChild(techList);
      }

      const footer = document.createElement("div");
      footer.className = "project-footer";

      if (project.githubUrl && project.githubUrl.trim() !== "") {
        const link = document.createElement("a");
        link.className = "project-link";
        link.href = project.githubUrl.trim();
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.innerHTML = `${ICONS.github}<span>View on GitHub</span>${ICONS.external}`;
        footer.appendChild(link);
      }

      body.appendChild(footer);
      card.appendChild(body);
      projectsGrid.appendChild(card);
    });
  }

  
  // Interests Section
  const interestsGrid = document.getElementById("interests-grid");
  if (interestsGrid) {
    interestsGrid.innerHTML = "";

    const createHeader = (titleText, iconName) => {
      const header = document.createElement("div");
      header.className = "interest-card-header";

      const iconWrap = document.createElement("span");
      iconWrap.className = "interest-icon";
      iconWrap.innerHTML = ICONS[iconName] || ICONS.compass;

      const title = document.createElement("h3");
      title.className = "interest-card-title";
      title.textContent = titleText;

      header.appendChild(iconWrap);
      header.appendChild(title);
      return header;
    };

    const createTagCard = (group) => {
      const li = document.createElement("li");
      li.className = "card interest-card reveal";
      li.appendChild(createHeader(group.title, group.icon));

      const tagList = document.createElement("div");
      tagList.className = "interest-tags";
      group.items.forEach((item) => {
        const tag = document.createElement("span");
        tag.className = "interest-tag";
        tag.textContent = item;
        tagList.appendChild(tag);
      });

      li.appendChild(tagList);
      return li;
    };

    // 1. Technology & Programming
    interestsGrid.appendChild(createTagCard(interests.technology));

    // 2. Learning New Skills
    interestsGrid.appendChild(createTagCard(interests.learning));

    // 3. Traveling & Exploring (5-Photo Gallery)
    const travelCard = document.createElement("li");
    travelCard.className = "card interest-card interest-card-wide reveal";
    travelCard.appendChild(
      createHeader(interests.travel.title, interests.travel.icon)
    );

    const gallery = document.createElement("div");
    gallery.className = "travel-gallery";

    interests.travel.photos.forEach((photo, index) => {
      const frame = document.createElement("figure");
      frame.className = "travel-photo-item";

      if (photo.src && photo.src.trim() !== "") {
        const img = document.createElement("img");
        img.src = photo.src.trim();
        img.alt = photo.alt || `Travel photograph ${index + 1}`;
        img.loading = "lazy";
        frame.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "media-placeholder";
        placeholder.innerHTML = `${ICONS.camera}<span>Travel Photo ${index + 1}</span>`;
        frame.appendChild(placeholder);
      }

      gallery.appendChild(frame);
    });

    travelCard.appendChild(gallery);
    interestsGrid.appendChild(travelCard);

    // 4. Playing Guitar (2 Video Players)
    const guitarCard = document.createElement("li");
    guitarCard.className = "card interest-card interest-card-wide reveal";
    guitarCard.appendChild(
      createHeader(interests.guitar.title, interests.guitar.icon)
    );

    const videoGrid = document.createElement("div");
    videoGrid.className = "guitar-videos";

    interests.guitar.videos.forEach((videoItem, index) => {
      const wrapper = document.createElement("div");
      wrapper.className = "guitar-video-item";

      if (videoItem.src && videoItem.src.trim() !== "") {
        const video = document.createElement("video");
        video.className = "guitar-video";
        video.src = videoItem.src.trim();
        video.controls = true;
        video.preload = "metadata";
        video.playsInline = true;
        video.setAttribute(
          "aria-label",
          videoItem.title || `Guitar performance ${index + 1}`
        );
        wrapper.appendChild(video);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "media-placeholder";
        placeholder.innerHTML = `${ICONS.video}<span>Guitar Video ${index + 1}</span>`;
        wrapper.appendChild(placeholder);
      }

      videoGrid.appendChild(wrapper);
    });

    guitarCard.appendChild(videoGrid);
    interestsGrid.appendChild(guitarCard);
  }


// Contact Section
  setText("contact-subtext", contact.subtext);
  const contactGrid = document.getElementById("contact-grid");
  if (contactGrid) {
    contactGrid.innerHTML = "";

    const channels = [
      {
        platform: "Email",
        icon: ICONS.email,
        value: contact.email,
        isEmail: true,
      },
      {
        platform: "GitHub",
        icon: ICONS.github,
        value: contact.github,
      },
      {
        platform: "LinkedIn",
        icon: ICONS.linkedin,
        value: contact.linkedin,
      },
      {
        platform: "Facebook",
        icon: ICONS.facebook,
        value: contact.facebook,
      },
    ];

    // Only render platforms that have an email or URL provided
    channels
      .filter((channel) => Boolean(channel.value && channel.value.trim() !== ""))
      .forEach((channel) => {
        const cleanValue = channel.value.trim();
        const card = document.createElement("a");
        card.className = "card contact-card reveal";

        if (channel.isEmail) {
          card.href = `mailto:${cleanValue}`;
        } else {
          card.href = cleanValue;
          card.target = "_blank";
          card.rel = "noopener noreferrer";
        }

        const iconBox = document.createElement("div");
        iconBox.className = "contact-icon";
        iconBox.innerHTML = channel.icon;

        const platformName = document.createElement("h3");
        platformName.className = "contact-platform";
        platformName.textContent = channel.platform;

        const valueText = document.createElement("p");
        valueText.className = "contact-value";
        valueText.textContent = channel.isEmail
          ? cleanValue
          : formatDisplayUrl(cleanValue);

        const actionText = document.createElement("span");
        actionText.className = "contact-action";
        actionText.textContent = channel.isEmail
          ? "Send an email ->"
          : "Visit profile ->";

        card.appendChild(iconBox);
        card.appendChild(platformName);
        card.appendChild(valueText);
        card.appendChild(actionText);
        contactGrid.appendChild(card);
      });
  }

  // Footer Copyright Year
  const currentYear = new Date().getFullYear();
  setText("footer-text", `© ${currentYear} ${personal.fullName}. All rights reserved.`);
}

/* ============================================================================
   UI INTERACTIONS (Mobile Menu, Active Nav Highlight, Scroll Reveal)
   ============================================================================ */
function setupNavigation() {
  const toggleBtn = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!toggleBtn || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove("is-open");
    toggleBtn.setAttribute("aria-expanded", "false");
  };

  toggleBtn.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  // Highlight active section in navbar on scroll
  const sections = document.querySelectorAll("main section[id]");
  const updateActiveLink = () => {
    const scrollPos = window.scrollY + 140;
    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute("id");
      const matchingLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (matchingLink) {
        if (scrollPos >= top && scrollPos < top + height) {
          matchingLink.classList.add("active");
        } else {
          matchingLink.classList.remove("active");
        }
      }
    });
  };

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

function setupScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* ============================================================================
   HELPERS
   ============================================================================ */
function setText(elementId, text) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = text;
}

function formatDisplayUrl(url) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

/* ============================================================================
   INITIALIZE
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolio();
  setupNavigation();
  setupScrollReveal();
});