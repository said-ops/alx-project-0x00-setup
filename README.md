# ALX Project - Setup and Components

This project is a basic setup for a Nest/js application that demonstrates the use of reusable components, prop typing with TypeScript, and dynamic styling for UI elements. It includes a `Card` component, a `Pill` component, and a custom `Button` component with dynamic sizes and shapes.

## Project Structure

- **Pages**: Contains the main page where components are used.
  - `pages/landing.tsx`: The landing page that renders the `Card` component and uses `Pill` and `Button` components.
  
- **Components**: Contains reusable UI components.
  - `components/Card.tsx`: The card component that displays content and uses `Pill` components.
  - `components/Pill.tsx`: A pill-shaped UI element that displays a title.
  - `components/Button.tsx`: A button component that accepts dynamic size and shape as props.

- **Interfaces**: Contains TypeScript interfaces for defining the types of props passed to components.
  - `interfaces/index.ts`: Defines `PillProps` and `ButtonProps` interfaces for type safety.

## Features

- **Card Component**: Displays content and can include multiple `Pill` components.
- **Pill Component**: A simple pill-like UI element that accepts a `title` prop and displays it.
- **Button Component**: A button with dynamic size and shape. It accepts `title`, `size`, and `shape` props to adjust its appearance.

## Getting Started

Follow the instructions below to get a local copy of the project up and running:

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/alx-project-0x00-setup.git
   cd alx-project-0x00
   npm install
   npm run dev