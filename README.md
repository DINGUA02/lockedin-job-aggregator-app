LockedIn – Job Aggregator App

LockedIn is a front-end job aggregator built using React, Tailwind CSS, and the Context API. It was created as the final capstone project for a coding bootcamp, which required building a complete front-end application using HTML, CSS, JavaScript, and real-world API integration.

Originally planned as a personal job-hunting tool, the project shifted to a demo-style job board due to the difficulty of finding stable and reliable public APIs. As of now, the app uses mock job data to simulate functionality while maintaining a clean and responsive UI.

Features

- Job Aggregator Logic  
  Simulates pulling job listings from multiple APIs and merging them into a unified job board.

- Search & Filter  
  Users can search jobs by title or keywords and filter results by location.

- Detailed Job View  
  Displays job title, employer, location, employment type, and apply links with clean formatting.

- Responsive Design  
  Built with mobile-first responsiveness in mind, supporting both desktop and mobile layouts.

- Context API Integration  
  Manages global state for job listings, search filters, and loading states across components.

Tech Stack

- React JS  
- Tailwind CSS  
- JavaScript (ES6+)  
- Context API (React)  
- Netlify (Deployment)

API Integration (Attempted)

- JSearch API (RapidAPI) – Initially planned as the main source of job data due to its clean formatting and filters. However, integration was postponed due to:
  - Limited free tier usage
  - Inconsistent reliability

- Jobicy API – Also considered, but blocked by CORS errors, making it unusable without a backend.

- Albeit API – Tested but discarded due to poor and unusable data quality.

As a result, mock data is currently used in place of live job data for demo purposes.

Live Demo  
https://lockedin01.netlify.app/

Future Improvements

- Replace mock data with stable job listings API
- Add company logos and pagination
- Implement job saving/bookmarking feature
- Improve error handling and fallback states
- Add better UX features for loading and empty results

Lessons Learned

- Managing global state using React’s Context API  
- Handling conditional rendering for inconsistent data  
- Creating responsive layouts with Tailwind  
- Understanding the challenges of working with third-party APIs (CORS, reliability, structure)

Acknowledgments

- JSearch API by LetScrape (RapidAPI) – for initially serving as the planned job data provider  
- Jobicy API – for open job listing access (CORS blocked during development)  
- Bootcamp instructors and peers who provided guidance and feedback during the project build
