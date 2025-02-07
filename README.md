# ChronoCraft - Luxury Watch Ecommerce

ChronoCraft is a sophisticated full-stack e-commerce platform for buying and selling luxury watches, built using modern web technologies like Next.js, Tailwind, ShadCn, and Stripe. It provides an intuitive shopping experience with a curated product catalog, detailed product pages, and a smooth checkout process.

![Project Image](https://github.com/mahmadmanzoor/chronoCraft/blob/main/public/thumbnail.png)

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

- 🕰️ **Luxury Watch Catalog**: Browse through an extensive collection of high-end watches with rich product details, including images and specifications.
- 🛒 **Persistent Shopping Cart**: Manage cart items and continue shopping across sessions.
- 🛍️ **Smooth Checkout**: Streamlined checkout process with Stripe integration for secure payments.
- 🎨 **Tailored UI with ShadCn and Tailwind**: Elegant and modern design, optimized for a premium shopping experience.
- 🔑 **Authentication with NextAuth**: Secure and easy authentication for users.
- ⚡ **Optimized Performance**: Fast loading times powered by Next.js, leveraging both server-side rendering and static site generation.
- 📱 **Fully Responsive Design**: Accessible across devices, from desktops to mobile.
- 🔐 **Secure Payments with Stripe**: Integrating Stripe for safe and seamless transactions.

## Getting Started

To get started with this project, clone the repository and follow the steps below.

### Prerequisites

Ensure that you have the following installed:

- Node.js (>= 18.0.0)
- Stripe account for payment processing
- Cloudinary account for image management
- MongoDB for database storage

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/mahmadmanzoor/ChronoCraft.git
   ```

2. Navigate to the project folder:

   ```bash
   cd ChronoCraft
   ```

3. Install the necessary dependencies:

   ```bash
   npm install
   ```

4. Copy the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

### Configuration

In the `.env` file, fill in the required configuration values for:

- **MongoDB**: Database connection string
- **NextAuth**: Your NextAuth secrets for authentication
- **Stripe**: Your Stripe API keys for payment processing
- **Cloudinary**: Your Cloudinary credentials for image hosting

Make sure to set all environment variables to ensure the application runs correctly.

### Usage

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Navigate to `http://localhost:3000` in your browser to see the app in action.

3. Users can browse the luxury watch catalog, add items to the cart, and proceed to a smooth checkout process with Stripe.

### Testing

To ensure the application works as expected, you can run the tests:

```bash
npm run test
```

This will run all the unit and integration tests for the application.

### License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.

## Roadmap

- [ ] Implement user account management features like profile and order history.
- [ ] Add advanced search and filtering options for products.
- [ ] Implement an admin dashboard for managing products and orders.
- [ ] Integrate email notifications for order status updates.
- [ ] Enhance mobile responsiveness for better user experience.

Feel free to contribute and open issues if you find any bugs or want to suggest new features.
