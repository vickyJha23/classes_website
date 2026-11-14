import anshika from '../assets/people/anshika-tiwari.jpg'
import aditya from '../assets/people/aditya-jaiswar.jpg'
import ruchika from '../assets/people/ruchika-chaudhari.jpg'
import sanskruti from '../assets/people/sanskruti-urkude.jpg'
import nitesh from '../assets/people/nitesh-upadhyay.jpg'
import shivangi from '../assets/people/shivangi-jaiswar.jpg'
import amit from '../assets/people/amit-prajapati.jpg'
import rishit from '../assets/people/rishit-paswan.jpg'
import singhKaran from '../assets/people/singh-karan.jpg'
import ashutosh from '../assets/people/ashutosh-yadav.jpg'
import aryan from '../assets/people/aryan-raj.jpg'
import kartik from '../assets/people/kartik-dubey.jpg'
import krishna from '../assets/people/krishna-jadhav.jpg'

export type Topper = {
  name: string
  photo?: string
  score: string
  scoreNote: string
  maths?: number
  science?: number
}

// Class 10th toppers, 2025
export const TOPPERS_2025: Topper[] = [
  { name: 'Anshika Tiwari', photo: anshika, score: '98.22', scoreNote: 'percentile', maths: 95, science: 97 },
  { name: 'Aditya Jaiswar', photo: aditya, score: '97.14', scoreNote: 'percentile', maths: 100, science: 99 },
  { name: 'Ruchika Chaudhari', photo: ruchika, score: '95.79', scoreNote: 'percentile' },
  { name: 'Sanskruti Urkude', photo: sanskruti, score: '95.49', scoreNote: 'percentile', maths: 92, science: 97 },
  { name: 'Nitesh Upadhyay', photo: nitesh, score: '95%', scoreNote: 'CBSE', maths: 98, science: 95 },
  { name: 'Shivangi Jaiswar', photo: shivangi, score: '88.44', scoreNote: 'percentile' },
]

// Class 10th toppers, 2024
export const TOPPERS_2024: Topper[] = [
  { name: 'Amit Prajapati', photo: amit, score: '92.22', scoreNote: 'percentile', maths: 95 },
  { name: 'Rishit Paswan', photo: rishit, score: '90.40%', scoreNote: 'overall', maths: 92 },
  { name: 'Singh Karan', photo: singhKaran, score: '88.66%', scoreNote: 'overall', maths: 96 },
  { name: 'Priyanshu Singh', score: '81.35', scoreNote: 'percentile' },
  { name: 'Suraj Prasad', score: '80.30', scoreNote: 'percentile' },
  { name: 'Annu Singh', score: '78.97', scoreNote: 'percentile' },
  { name: 'Pratik Mahajan', score: '78.69', scoreNote: 'percentile' },
  { name: 'Chaitanya Sonavane', score: '77.29', scoreNote: 'percentile' },
]

// Students selected in Jawahar Navodaya Vidyalaya & Sainik School
export const SELECTIONS = [
  { name: 'Ashutosh Yadav', photo: ashutosh },
  { name: 'Aryan Raj', photo: aryan },
  { name: 'Kartik Dubey', photo: kartik },
  { name: 'Krishna Jadhav', photo: krishna },
]
