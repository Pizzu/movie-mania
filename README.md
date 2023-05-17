# MovieMania Summary

The web app is a movie ticket booking system that allows users to browse and book movie tickets for different movies and showtimes. Users can view available movies, select a movie and showtime, choose their seats, and make a ticket purchase. The app provides a seamless user experience for booking movie tickets online.

## Tech Stack

**Front-end:**

- Next.js: A popular React framework for building server-rendered React applications.
- React: A JavaScript library for building user interfaces.
- Contentful: A headless content management system (CMS) for managing movie data, including movies, showtimes, and theaters.
- Contentful Webhook: A webhook to trigger events in the app when content is updated in Contentful.
- Tailwind CSS: A utility-first CSS framework that provides a set of pre-designed CSS classes to rapidly build user interfaces.

**Back-end:**

- Prisma: A modern ORM (Object-Relational Mapping) for interfacing with databases, specifically MySQL in this case.
- MySQL: A popular relational database management system for storing data related to movies, theaters, tickets, and user information.

**Deployment:**

- Vercel: A serverless hosting platform that provides seamless deployment and scaling of Next.js applications.

The web app follows a serverless architecture, where Next.js handles server-side rendering, and Contentful and Prisma are used for managing and querying movie and ticket data. The app provides a user-friendly interface for browsing, selecting, and booking movie tickets, and ensures data consistency and integrity with the use of a relational database.
