# Delikassii 🍽️

Delikassii is a recipe web application built with **Next.js** and **Tailwind CSS**. It allows users to search for recipes, view detailed information about each recipe, and explore a variety of culinary ideas. The app leverages **unstable caching** from Next.js to cache API data efficiently, reducing the number of API calls and speeding up the app's performance.

The recipe data is sourced from the **Tasty API** (via RapidAPI), offering rich recipe information like ingredients, instructions, nutrition, user ratings, and more.

## Features

- 🔍 **Recipe Search**: Find recipes based on a search query.
- 🥘 **Detailed Recipe View**: See recipe details including ingredients, instructions, nutritional info, and ratings.
- ⚡ **Unstable Cache**: Uses Next.js unstable cache to store API results, improving performance.
- 🎨 **Responsive Design**: Built with Tailwind CSS to ensure a sleek and responsive user interface.

## Technologies Used

- **Next.js**: A React framework for building fast, server-side rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for designing the user interface.
- **Tasty API**: A recipe API from RapidAPI to fetch recipe data.

## Installation and Setup

To get a local copy of this project up and running, follow these steps:

### Prerequisites

- Node.js (version 16.x or later)

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/anselumjuju/delikassii.git
   cd delikassii
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Create a `.env.local` file in the root of your project and add the following environment variables:

   ```bash
   RAPID_API_KEY=your_rapidapi_key
   ```

   Replace `your_rapidapi_key` with the API key from RapidAPI.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   This will start the app locally at `http://localhost:3000`.

### Building for Production

To build the app for production, run:

```bash
npm build
```

This will create an optimized build in the `.next` directory. You can then start the app in production mode:

```bash
npm start
```

### Deployment

Delikassii can be deployed to platforms like **Vercel** or **Netlify**. Here's how you can deploy to Vercel:

1. Push your project to a GitHub repository.
2. Go to [Vercel](https://vercel.com/), import your repository, and follow the deployment instructions.
3. Set the required environment variables on Vercel as well.

## Usage

1. **Search Recipes**: Use the search bar to enter a query (e.g., "chicken", "vegan").
2. **View Recipe Details**: Click on any recipe card to view detailed information, including ingredients, instructions, and nutritional info.
3. **Browse by Tags**: Filter recipes by tags like "breakfast", "desserts", etc.

## API

- **Tasty API**: This app uses the Tasty API from RapidAPI to fetch recipe data. For more information about the API, visit [RapidAPI - Tasty API](https://rapidapi.com/apidojo/api/tasty).

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and create a pull request.

## License

This project is licensed under the MIT License.
