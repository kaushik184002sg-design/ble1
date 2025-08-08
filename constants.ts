export const heroBackgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.8) 90%),
    radial-gradient(circle at 50% 50%, rgba(90, 45, 130, 0.3) 0%, transparent 70%), 
    linear-gradient(to bottom, rgba(20, 10, 30, 0.9) 0%, rgba(20, 10, 30, 1) 100%)
  `
};

export const missionBackgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.8) 90%),
    radial-gradient(circle at 50% 50%, rgba(90, 45, 130, 0.3) 0%, transparent 70%), 
    linear-gradient(to bottom, rgba(20, 10, 30, 0.9) 0%, rgba(20, 10, 30, 1) 100%)
  `
};

export const envisionBackgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.8) 90%),
    radial-gradient(circle at 50% 50%, rgba(90, 45, 130, 0.3) 0%, transparent 70%), 
    linear-gradient(to bottom, rgba(20, 10, 30, 0.9) 0%, rgba(20, 10, 30, 1) 100%)
  `
};
export const whyWorkBackgroundStyle = {
    backgroundImage: `
      radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.8) 90%),
      radial-gradient(circle at 50% 50%, rgba(90, 45, 130, 0.3) 0%, transparent 70%), 
      linear-gradient(to bottom, rgba(20, 10, 30, 0.9) 0%, rgba(20, 10, 30, 1) 100%)
    `
};

export const footerBackgroundStyle = {
  backgroundImage: `
    radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.8) 90%),
    linear-gradient(to top, rgba(20, 10, 30, 1) 20%, rgba(20, 10, 30, 0) 100%),
    repeating-linear-gradient(0deg, #5A2D8233 0, #5A2D8233 1px, transparent 1px, transparent 50px),
    repeating-linear-gradient(90deg, #5A2D8233 0, #5A2D8233 1px, transparent 1px, transparent 50px)
  `
};

export const coreValues = [
    {
      icon: "Innovation",
      title: "Innovation",
      description: "We embrace technology to enhance learning outcomes."
    },
    {
      icon: "Equity",
      title: "Equity",
      description: "Quality education should be accessible to all students."
    },
    {
      icon: "Collaboration",
      title: "Collaboration",
      description: "A thriving educational environment is built on teamwork."
    },
    {
      icon: "LifelongLearning",
      title: "Lifelong Learning",
      description: "Education is not just about academics; it's about cultivating a growth mindset."
    },
    {
      icon: "StudentCentred",
      title: "Student-Centred Approach",
      description: "Every decision we make is driven by what benefits students the most."
    }
];

export const whyWorkPoints = [
    { title: "Innovative Work Environment", description: "Work with cutting-edge educational technology and methodologies."},
    { title: "Professional Growth", description: "Access to ongoing training, workshops, and industry-leading certifications."},
    { title: "Meaningful Impact", description: "Shape the future of education and make a real difference in students' lives."},
    { title: "Competitive Compensation", description: "We value our educators and professionals, offering competitive salaries and benefits."}
];

export const missionPlanets: {label: string, orbitRadius: number, angle: number, size: number, anim: string, reverseAnim: string}[] = [
    { label: "Kh", orbitRadius: 44, angle: 0, size: 10, anim: 'animate-spin-fast', reverseAnim: 'animate-spin-fast-reverse' },
    { label: "Ph", orbitRadius: 44, angle: 180, size: 10, anim: 'animate-spin-fast', reverseAnim: 'animate-spin-fast-reverse' },
];