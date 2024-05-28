# NestJS GitHub API Integration

This project is a simple NestJS application that integrates with the GitHub API to fetch and list repositories.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Tests](#tests)

## Introduction

This NestJS application integrates with the GitHub API to fetch and list repositories for a specified user or organization.

## Features

- Fetch and list repositories from GitHub.

## Requirements

- Node.js (>= 14.x)
- npm

## Installation
1.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
    ```plaintext
    GITHUB_API_URL=https://api.github.com
    ```

## Usage

1. Start the application:
    ```bash
    npm run start

2. The application will be running at `http://localhost:3000`.

## Endpoints

### GET /github

Fetch and list repositories from GitHub.

- **URL**: `/github`
- **Method**: `GET`
- **Description**: Lists the repositories for the specified GitHub user.
## Tests

1. Start tests:
    ```bash
    npm run test

