/**
 * These words are buzzwords that should be highlighted
 */
const buzzwords = [
  "Astro",
  "AWS",
  "S3",
  "Canva",
  "CSS",
  "Docker",
  "Jira",
  "Postman",
  "Git",
  "HTML",
  "JavaScript",
  "Linux",
  "JQuery",
  "Gitlab",
  "MySQL",
  "Next.js",
  "Node.js",
  "Node",
  "PHP",
  "PostgreSQL",
  "Python",
  "React.js",
  "React",
  "Java",
  "Selenium",
  "SQL",
  "Tailwind CSS",
  "TypeScript",
  "WordPress",
  "Angular"
];

// Add tags that should be searched for buzzwords
const paragraphs = document.querySelectorAll("p");
const lis = document.querySelectorAll("li");
const tags = [...paragraphs, ...lis];

for (const word of buzzwords) {
  const regex = new RegExp(`(\\s|^)(${word})([.,/()"']?)(\\s|$)`, 'g');
  for (const element of tags) {
    element.innerHTML = element.innerHTML.replace(regex, (match, p1, p2, p3, p4) => `${p1}<span class="buzzword">${p2}</span>${p3}${p4}`);
  }
}