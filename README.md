# GitHub Stats API

This is a simple API that generates dynamic statistics for GitHub users, which you can use in your GitHub profile or README. It fetches data from GitHub and generates SVG images that show a user’s GitHub stats (e.g., number of repositories, followers, and following).

## How It Works

- **No API Key Required**: This API does **not** require an API key from GitHub. It directly fetches public user data via GitHub's public REST API.
- **Limited by GitHub's Rate Limits**: Since no API key is used, the API is subject to GitHub’s rate limits, which are **60 requests per hour** per IP address (for unauthenticated requests). If the rate limit is exceeded, you will need to wait until the limit is reset.

## Features

- Fetch basic statistics such as:
  - Public repositories
  - Followers
  - Following
- Dynamic SVG image generation for easy embedding in GitHub README files.

## Example Usage

To generate a stats image for any GitHub user, simply use the following URL:


### Example

If you want to generate the stats for the GitHub user `IsNotTheReal`, you would use:


This will return an SVG image with stats for the `IsNotTheReal` user.

### Example of Generated SVG

Here’s an example of what the generated SVG might look like for a user:

![Stats](https://stats-red-two.vercel.app/card/IsNotTheReal)

The image will display something like this:

- GitHub username at the top.
- Number of public repositories.
- Number of followers and following.

## How to Embed the Image

To embed the generated image in your GitHub profile or README, use the following Markdown syntax:

```markdown
![GitHub Stats](https://stats-red-two.vercel.app/card/<username>)