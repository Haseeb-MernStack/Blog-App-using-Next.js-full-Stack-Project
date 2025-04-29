# Full-Stack Blog App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It is a full-stack blog application that allows users to view, create, and manage blogs.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Features

- **Home Page**: Displays a list of blogs with categories like Technology, Startup, and Lifestyle. Users can filter blogs by category.
- **Blog Details Page**: Accessible via `/blogs/[id]`, shows detailed information about a specific blog, including the title, author, description, and image.
- **Admin Panel**: Accessible via `/admin`, includes:
  - **Add Blog**: Allows admins to create new blogs with a title, description, category, author, and image.
  - **Blog List**: Displays all blogs with options to delete them.
  - **Subscriptions**: Shows a list of email subscriptions.
- **Email Subscription**: Users can subscribe to updates by entering their email on the home page.
- **Responsive Design**: The app is fully responsive and works seamlessly on all devices.

## Backend Functionality

- **API Endpoints**:
  - `/api/blog`:
    - `GET`: Fetches all blogs or a specific blog by ID.
    - `POST`: Creates a new blog.
    - `DELETE`: Deletes a blog by ID.
  - `/api/email`:
    - `GET`: Fetches all email subscriptions.
    - `POST`: Adds a new email subscription.
    - `DELETE`: Deletes an email subscription by ID.
- **Database**: Uses MongoDB for storing blogs and email subscriptions.
- **File Uploads**: Blog images are uploaded and stored in the `public` directory.

## Technologies Used

- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Node.js, Next.js API Routes
- **Database**: MongoDB
- **Other Libraries**: Axios, React Toastify, Mongoose

## Folder Structure

- `app/`: Contains all Next.js pages and layouts.
  - `page.js`: Home page.
  - `admin/`: Admin panel pages.
  - `blogs/[id]/`: Blog details page.
- `Components/`: Reusable React components like `Header`, `Footer`, `BlogList`, etc.
- `Assets/`: Static assets like images and icons.
- `lib/models/`: Mongoose models for MongoDB.
- `app/api/`: API routes for blogs and email subscriptions.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.