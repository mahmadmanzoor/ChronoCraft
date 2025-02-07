# ChronoCraft - Luxury Watch Ecommerce

ChronoCraft is a **modern, full-stack e-commerce platform** designed to showcase and sell luxury watches, built with **Next.js 14**, **React 18**, **Tailwind CSS**, **ShadCn UI**, and **Stripe** for secure payments. This application is a complete, production-ready solution for creating luxury e-commerce websites. Whether you're launching a new online store or enhancing an existing one, ChronoCraft offers a seamless, highly interactive shopping experience.

Built with scalability and performance in mind, ChronoCraft integrates the latest web technologies, such as **MongoDB** for NoSQL database management, **Cloudinary** for efficient image management, and **NextAuth** for secure user authentication. The platform supports a wide range of modern e-commerce features, from **real-time product search** to **dynamic checkout systems**—all while ensuring a fully responsive and visually appealing UI.

This project is a complete, production-ready e-commerce solution, optimized for both user experience and performance. With this foundation, you can create high-end online stores that are ready to sell products to customers worldwide.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Testing](#testing)
- [License](#license)

## Features

- 🕰️ **Luxury Watch Catalog**: A beautifully curated collection of luxury watches, each with rich product details, multiple images, descriptions, and key specifications.
- 🛒 **Persistent Shopping Cart**: Easily manage cart items across sessions and streamline the shopping experience.
- 🛍️ **Advanced Checkout System**: Secure checkout process powered by **Stripe**, ensuring smooth payments with **webhook integration** for handling order status and confirmations.
- 🎨 **Tailored UI with ShadCn UI & Tailwind CSS**: A modern, responsive design with smooth animations and fluid interactions, built using **ShadCn UI** and **Tailwind CSS** to deliver an aesthetically pleasing and interactive user experience.
- 🔑 **Authentication via NextAuth**: Secure authentication with **NextAuth**, supporting multiple login methods including social login options.
- ⚡ **Optimized Performance with Next.js**: Using the latest features of **Next.js 14**, including **server-side rendering (SSR)** and **static site generation (SSG)**, ChronoCraft ensures fast page loads, better SEO, and enhanced user experience.
- 📱 **Mobile-First & Fully Responsive Design**: A fully responsive interface that guarantees optimal performance and accessibility across all devices (desktop, tablet, and mobile).
- 🔐 **Secure Payments with Stripe**: Integrated **Stripe** payment system, handling both one-time payments and subscription models securely.
- 🌐 **Cloud Storage with Cloudinary**: Fast, reliable image hosting and delivery, managed with **Cloudinary** to enhance product display.

## Technologies Used

- **Next.js 14**: The latest version of Next.js for server-side rendering, static generation, and routing.
- **React 18**: The most recent version of React for building dynamic and reusable UI components.
- **Tailwind CSS**: A utility-first CSS framework for creating responsive, customizable layouts quickly.
- **ShadCn UI**: A set of pre-built UI components built with **Tailwind CSS** for creating sleek, modern interfaces.
- **Stripe**: Industry-leading payment processing solution for handling secure transactions and subscriptions.
- **MongoDB & Mongoose**: A powerful NoSQL database solution for storing product, user, and order data.
- **NextAuth**: For implementing secure authentication with multiple login options, including social logins.
- **Cloudinary**: Cloud-based image storage and management service to optimize the display and delivery of product images.

## Getting Started

To get started with ChronoCraft locally, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- **Node.js (>= 18.0.0)**
- **MongoDB**: For data storage.
- **Stripe Account**: For handling payments.
- **Cloudinary Account**: For image hosting.
- **NextAuth Account**: For managing authentication.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmadmanzoor/ChronoCraft.git
   ```

2. Navigate to the project directory:

   ```bash
   cd ChronoCraft
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

### Configuration

In the `.env` file, provide the necessary credentials for:

- **MongoDB**: `MONGO_URI` - MongoDB database connection string.
- **NextAuth**: `NEXTAUTH_SECRET` - Secret key for **NextAuth** sessions.
- **JWT**: `JWT_SECRET` - Secret for JSON Web Tokens.
- **Stripe**: `STRIPE_SECRET_KEY` & `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Stripe API keys.
- **Cloudinary**: `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, and `CLOUDINARY_API_SECRET` - For image hosting and management.
- **NextAuth URL**: `NEXTAUTH_URL` - The base URL for **NextAuth**.

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000` in your browser.

3. Explore the luxury watch catalog, add products to your cart, and complete your purchases with **Stripe**.

### Testing

To run tests and ensure everything is working:

```bash
npm run test
```

### License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## Roadmap

- [ ] Implement user account management (profile and order history).
- [ ] Enhance search and filtering functionality.
- [ ] Add an admin dashboard for order and inventory management.
- [ ] Integrate email notifications for order status updates.
- [ ] Improve mobile performance.

Feel free to contribute, report bugs, or request features!
