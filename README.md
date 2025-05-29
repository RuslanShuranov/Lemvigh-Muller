# Hacker News Reader

A modern, responsive Hacker News client built with React 19, TypeScript, and SWR for efficient data fetching. This project showcases a clean interface for browsing top Hacker News stories with author details.

## 🚀 Live Demo

Check out the live application: [Live Demo](https://lemvigh-muller.vercel.app/)

## ✨ Features

- **Intelligent Data Fetching**: Uses SWR for efficient API calls with built-in caching and revalidation
- **Random Story Selection**: Displays a curated selection of 10 random top stories from Hacker News
- **Author Information**: Shows detailed author profiles alongside stories
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Dark/Light Mode**: Includes theme toggle for comfortable reading in any environment
- **Modern React Patterns**: Implements React 19 with hooks and functional components
- **Performance Optimized**: Minimizes unnecessary re-renders with useMemo

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript 4.9
- **Styling**: SCSS for component-based styling
- **Data Fetching**: SWR with deduplication and caching
- **Build Tools**: Webpack 5, Babel
- **Package Management**: npm
- **Code Quality**: Prettier for consistent formatting

## 🚦 Getting Started

1. Clone the repository
2. Install dependencies:
```shell script
npm install
```

3. Start the development server:
```shell script
npm start
```

4. Build for production:
```shell script
npm run build
```

5. Serve the production build locally:
```shell script
npm run serve
```


## 📦 Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🔄 API Integration

This application uses the official Hacker News API:

- Fetches top stories from `/topstories.json`
- Retrieves item details from `/item/{id}.json`
- Gets user profiles from `/user/{username}.json`

## ⚡️ Performance Optimization

- SWR caching strategy prevents redundant API calls
- Custom hook architecture separates concerns
- Efficient memory usage with optimized React patterns
- Smart revalidation only fetches new data when necessary

## 🧩 Project Structure

- `src/components/` - React components
- `src/hooks/` - Custom React hooks
- `src/types/` - TypeScript type definitions
- `src/utils/` - Utility functions and constants
- `src/assets/` - Static assets

## 📝 License

This project is licensed under the MIT License.
