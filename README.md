# HTML to PDF Microservice

 This is a simple Node.js microservice that converts HTML content into a PDF using Puppeteer and Express.

## Features

Exposes a REST API to convert HTML to PDF

Uses Puppeteer for rendering HTML into PDF

Lightweight and easy to deploy

## Technologies Used

Node.js

Express.js

Puppeteer

## Installation

Prerequisites

Node.js installed on your system

npm or yarn package manager

## API Usage

Endpoint: Convert HTML to PDF

POST /conversion

Request Body:
{
  "html": "<h1>Hello, PDF!</h1>"
}

