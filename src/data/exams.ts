/* Text content for the Entrance Exams page — edit these to update it */

export const AISSEE_URL = 'https://exams.nta.nic.in/sainik-school-society/'

// Class 6th – competitive entrance exams
export const CLASS_6_EXAMS = [
  {
    short: 'JNVST',
    name: 'Navodaya Vidyalaya',
    text: 'Jawahar Navodaya Vidyalaya Selection Test, for admission to Class 6 in Navodaya Vidyalayas.',
  },
  {
    short: 'AISSEE',
    name: 'Sainik School',
    text: 'All India Sainik Schools Entrance Examination, for admission to Sainik Schools across India.',
  },
  {
    short: 'RMS CET',
    name: 'Military School',
    text: 'Rashtriya Military Schools Common Entrance Test, for admission to the Rashtriya Military Schools.',
  },
  {
    short: 'EMRS',
    name: 'Eklavya Model School',
    text: 'Selection test for admission to Class 6 in Eklavya Model Residential Schools.',
  },
  {
    short: 'State exams',
    name: 'State Residential School Entrance Exams',
    text: 'Entrance exams held by state governments for admission to their residential schools.',
  },
]

export const AISSEE_DATES = [
  { label: 'Application start date', value: '3 November 2026' },
  { label: 'Last date to apply', value: '2 December 2026', note: 'up to 11:50 PM' },
  { label: 'Exam date', value: '31 January 2027' },
]

export const AISSEE_STEPS = [
  'Visit the NTA AISSEE official portal.',
  'Click on the registration / application link for AISSEE 2027-28.',
  'Fill out the application form for Class 6 or Class 9, upload the required documents, and pay the fee before 2 December 2026.',
]

export const AGNIVEER_SUBJECTS = [
  { name: 'General Knowledge (GK)', tone: 'blue' },
  { name: 'General Science', tone: 'green' },
  { name: 'Mathematics', tone: 'red' },
  { name: 'General Reasoning', tone: 'plum' },
  { name: 'Current Affairs', tone: 'orange' },
  { name: 'English', tone: 'blue' },
]
