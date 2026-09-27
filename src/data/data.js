// ============================================================
// এখানে তোমার সব তথ্য বসাবে। Component গুলো এই ফাইল থেকেই data নেয়়,
// তাই component এর ভেতরে গিয়ে কিছু খুঁজতে হবে না — শুধু এই ফাইলটা এডিট করলেই হবে।
// ============================================================

export const profile = {
  name: 'Imtiaz',
  role: 'Software Developer',
  tagline: 'Building at Company DETAVO',
  location: 'Dhaka, Bangladesh',
  email: 'imtiaznehal2004@gmail.com',
  resumeUrl: '/resume.pdf', // public/ ফোল্ডারে resume.pdf রাখলে এই লিংক কাজ করবে
  socials: {
    github: 'https://github.com/Imtiaz2005',
    linkedin: 'https://bd.linkedin.com/in/imtiaz-bin-hasan-50145636b',
    codeforces: 'https://codeforces.com/profile/_N-E-H-A-L_',
  },
  bio: [
    "Hey, I'm Your Name — a software developer who splits time between shipping product features and solving competitive programming problems.",
    'By day I work on full-stack web applications; the rest of the time you\u2019ll find me deep in a Codeforces round or grinding data structures and algorithms.',
  ],
}

export const stats = [
  { label: 'Years Coding', value: '3+' },
  { label: 'Problems Solved', value: '1100+' },
  { label: 'Contests Joined', value: '40+' },
  { label: 'Projects Shipped', value: '4+' },
]

export const skills = [
  { name: 'JavaScript / TypeScript', level: 90 },
  { name: 'React.js', level: 88 },
  { name: 'Node.js / Express', level: 80 },
  { name: 'C++ (DSA)', level: 92 },
  { name: 'SQL / MongoDB', level: 75 },
  { name: 'Python', level: 70 },
]

export const competitiveProfiles = [
  {
    platform: 'Codeforces',
    handle: '_N-E-H-A-L_',
    rating: 1277,
    maxRating: 1398,
    rank: 'pupil',
    solved: 600,
    url: 'https://codeforces.com/profile/_N-E-H-A-L_',
  },
  {
    platform: 'AtCoder',
    handle: 'Nehal2006',
    rating: 1000,
    maxRating: 1100,
    rank: 'Brown',
    solved: 300,
    url: 'https://atcoder.jp/users/Nehal2006',
  },
]

export const projects = [
  {
    name: 'Project One',
    description: 'Short one-line description of what this project does and who it is for.',
    tech: ['React', 'Node.js', 'MongoDB'],
    image: null, // পরে project screenshot এর path বসাবে, e.g. '/projects/project1.png'
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourhandle/project-one',
  },
  {
    name: 'Project Two',
    description: 'Short one-line description of what this project does and who it is for.',
    tech: ['Next.js', 'Tailwind', 'PostgreSQL'],
    image: null,
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourhandle/project-two',
  },
  {
    name: 'Project Three',
    description: 'Short one-line description of what this project does and who it is for.',
    tech: ['C++', 'Algorithms'],
    image: null,
    liveUrl: '',
    githubUrl: 'https://github.com/yourhandle/project-three',
  },
]
