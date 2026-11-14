/* Text content for the home page — edit these to update the website */

import { ADDRESS, PHONE_DISPLAY } from './site'

export const VALUES = [
  {
    title: 'Our vision',
    text: 'To empower students to excel academically and grow personally, in a learning environment where they explore their passions, develop their talents and reach their potential.',
  },
  {
    title: 'Our mission',
    text: 'To prepare students for leadership and service, with a learning environment that is engaging, upholds high academic standards and builds a genuine passion for learning.',
  },
  {
    title: 'Our approach',
    text: 'We blend structured lessons with creative, engaging activities, so learning is both enjoyable and effective, and students grow academically, artistically and socially.',
  },
]

export const STATS = [
  { value: '2020', label: 'Founded in Silvassa' },
  { value: '98.22', unit: '%ile', label: 'Top Class 10th score, 2025' },
  { value: '100', unit: '/100', label: 'Maths score by our topper, 2025' },
  { value: 'JNV', unit: '& Sainik', label: 'Selections from our entrance batch' },
]

export const WHY_US = [
  { title: 'Experienced faculty', text: 'Learn from teachers who know the syllabus and the exam pattern.' },
  { title: 'Smart classroom', text: 'Digital learning tools alongside classroom teaching.' },
  { title: 'Personal attention', text: 'Small batches, so every student is noticed and helped.' },
  { title: 'Result-oriented teaching', text: 'Every class is planned around scoring well in the exam.' },
  { title: 'Regular tests & doubt solving', text: 'Track progress with tests, and clear every doubt in dedicated sessions.' },
  { title: 'Boards & entrance exams', text: 'CBSE, State Board, and entrance exams like Navodaya, Sainik School and RMS CET.' },
]

export const FAQS = [
  {
    q: 'Which classes do you teach?',
    a: 'We teach students from Class 5th to 12th, for both CBSE and State Board, with all subjects available. For Class 11th and 12th we run the Commerce stream (Accountancy, Business Studies, Economics and English).',
  },
  {
    q: 'Which entrance exams do you prepare for?',
    a: 'We prepare students for Navodaya (JNVST), the Sainik School Entrance Exam, RMS CET (Rashtriya Military Schools), Railway exams, and other scholarship and competitive exams.',
  },
  {
    q: 'Where is Education Point Classes located?',
    a: `Our centre is at ${ADDRESS}.`,
  },
  {
    q: 'How do I take admission?',
    a: `Call us on ${PHONE_DISPLAY}, send an enquiry through the form below, or visit the centre. Seats are limited in every batch.`,
  },
  {
    q: 'What is the RMS CET 2026 schedule?',
    a: 'Applications were open from 23 September to 20 October 2026 on the official NTA website and have now closed. The exam is on 13 December 2026.',
  },
  {
    q: 'How do I apply for the scholarship test?',
    a: `Tap "Apply now" in the Scholarship Test section or WhatsApp us on ${PHONE_DISPLAY}. We will share the test date and details with you.`,
  },
  {
    q: 'Can I attend a free demo class?',
    a: `Yes. You can attend a free demo class before taking admission. Call or WhatsApp us on ${PHONE_DISPLAY} to book one.`,
  },
  {
    q: 'Are batches small?',
    a: 'Yes. We keep batches small so every student gets personal attention and their doubts are cleared.',
  },
]

export const COMMERCE_REASONS = ['Result-oriented teaching', 'Experienced teachers', 'Regular tests', 'Personal attention']

export const RMS_SUBJECTS = [
  { name: 'Mathematics', tone: 'blue' },
  { name: 'General Knowledge', tone: 'green' },
  { name: 'English', tone: 'red' },
  { name: 'Hindi', tone: 'plum' },
  { name: 'Reasoning', tone: 'orange' },
]

export const RMS_WHY = ['Quality education', 'Discipline & leadership', 'Sainik lifestyle', 'All-India opportunities']
