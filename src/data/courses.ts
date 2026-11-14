export const COURSES = [
  {
    title: 'Foundation Course',
    level: 'Class 5th to 10th',
    text: 'Coaching in all subjects for CBSE and State Board students, with clear concepts, regular tests and doubt-solving sessions.',
    points: ['CBSE | State Board', 'All subjects available', 'Regular tests', 'Doubt-solving sessions'],
  },
  {
    title: 'Commerce',
    level: 'Class 11th & 12th',
    text: 'Complete board-exam coaching for commerce students of CBSE and State Board, with chapter-wise revision and practice papers.',
    points: ['Accountancy', 'Business Studies', 'Economics', 'English'],
  },
  {
    title: 'Entrance Exam Preparation',
    level: 'Navodaya · Sainik · RMS · Railway',
    text: 'Focused preparation for school entrance and scholarship exams, covering every section of the paper with practice tests.',
    points: [
      'Navodaya (JNVST)',
      'Sainik School Entrance Exam',
      'Kendriya Vidyalaya admission guidance',
      'RMS CET (Rashtriya Military Schools)',
      'Railway exams',
      'Other scholarship & competitive exams',
    ],
  },
  {
    title: 'Diploma Engineering',
    level: 'Diploma students',
    text: 'Subject coaching for diploma engineering students, with clear explanations, regular practice and exam-focused revision.',
    points: ['Subject-wise coaching', 'Exam-focused revision', 'Regular tests', 'Doubt-solving sessions'],
  },
]

export const COURSE_ICONS = [
  // Foundation: open book
  'M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5Zm0 0v13',
  // Commerce: rising chart
  'M4 20h16M7 16v-4M11 16V9M15 16v-6M19 16V6',
  // Entrance exams: target
  'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
  // Diploma engineering: gear
  'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-1.6.1-1.4-.1-1.4 2-1.6-2-3.4-2.4 1a7 7 0 0 0-2.4-1.4L14.2 2h-4.4l-.4 2.6A7 7 0 0 0 7 6L4.6 5l-2 3.4 2 1.6-.1 1.4.1 1.4-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2.4 1.4l.4 2.6h4.4l.4-2.6a7 7 0 0 0 2.4-1.4l2.4 1 2-3.4-2-1.6Z',
]

export function courseId(title: string) {
  return 'course-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}
