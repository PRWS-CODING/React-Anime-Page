# React Anime Discovery Page

This is a school project built with React that allows users to discover, search, and learn more about anime. It demonstrates how to build a dynamic, multi-page application that interacts with multiple external APIs to provide a rich user experience.

## Features

- **Browse Top Anime:** View a list of the current top-rated anime on a dedicated page.
- **Search:** Find any anime by title from the home page.
- **Sort Results:** Sort the anime list by score (high to low, low to high) or by title (A-Z, Z-A).
- **Detailed Information:** Click on any anime to see a detailed view with:
  - Synopsis, score, rank, and episode count.
  - A high-quality banner image.
  - Popularity and trending stats.
- **Where to Watch:** Find official streaming links for each anime on its detail page.

## APIs Used

This project integrates two powerful APIs to gather comprehensive anime data:

1.  [**Jikan API**](https://jikan.moe/): Used as the primary source for anime information, search results, and streaming links.
2.  [**AniList API**](https://anilist.co/): Used to supplement the detail page with high-quality banner images and additional stats like popularity and trending scores via GraphQL.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast and modern build tool for web development.
- **React Router:** For handling client-side routing between pages.
- **Axios:** For making HTTP requests to the APIs.
- **CSS Modules:** For component-scoped styling to prevent class name conflicts.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Create a `.env` file in the root of the project and add the following variables:

  ```
  VITE_JIKAN_API_URL=https://api.jikan.moe/v4
  VITE_ANILIST_API_URL=https://graphql.anilist.co
  ```

- Node.js (v18 or later recommended)
- An npm package manager

### Installation & Running

1.  Clone the repo and navigate into the directory.
2.  Install NPM packages: `npm install`
3.  Run the development server: `npm run dev`

The application will be available at `http://localhost:5173` (or the next available port).
