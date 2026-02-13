// GitHub API Helper - Fetches real GitHub data
const GITHUB_USERNAME = 'tahir1122-dev'; // Replace with your GitHub username
const GITHUB_API = 'https://api.github.com';

export interface GitHubRepo {
    name: string;
    description: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    html_url: string;
}

export interface GitHubUser {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

export interface GitHubStats {
    totalStars: number;
    totalForks: number;
    totalRepos: number;
    followers: number;
    languageStats: { [key: string]: number };
}

export interface ContributionDay {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
}

// Fetch user profile data
export async function getGitHubUser(): Promise<GitHubUser> {
    try {
        const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
            headers: {
                'Accept': 'application/vnd.github.v3+json',
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub user');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching GitHub user:', error);
        // Return fallback data
        return {
            login: GITHUB_USERNAME,
            name: 'Developer',
            avatar_url: '',
            bio: '',
            public_repos: 0,
            followers: 0,
            following: 0,
        };
    }
}

// Fetch all repositories
export async function getGitHubRepos(): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                },
                next: { revalidate: 3600 }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch repositories');
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
}

// Calculate GitHub stats from repositories
export async function getGitHubStats(): Promise<GitHubStats> {
    try {
        const [user, repos] = await Promise.all([
            getGitHubUser(),
            getGitHubRepos()
        ]);

        const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
        const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

        // Calculate language statistics
        const languageStats: { [key: string]: number } = {};
        repos.forEach(repo => {
            if (repo.language) {
                languageStats[repo.language] = (languageStats[repo.language] || 0) + 1;
            }
        });

        return {
            totalStars,
            totalForks,
            totalRepos: user.public_repos,
            followers: user.followers,
            languageStats,
        };
    } catch (error) {
        console.error('Error calculating GitHub stats:', error);
        return {
            totalStars: 0,
            totalForks: 0,
            totalRepos: 0,
            followers: 0,
            languageStats: {},
        };
    }
}

// Fetch contribution data (simplified - for full data you'd need GraphQL API with token)
export async function getContributionData(): Promise<ContributionDay[]> {
    // Note: For real contribution data, you need to use GitHub GraphQL API with authentication
    // This is a simplified version. For production, consider using a backend route with your GitHub token

    // Generate mock data for demonstration
    const days: ContributionDay[] = [];
    const today = new Date();

    for (let i = 365; i >= 0; i--) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);

        // Random contribution count (replace with real data)
        const count = Math.floor(Math.random() * 10);
        const level = count === 0 ? 0 : count < 3 ? 1 : count < 6 ? 2 : count < 8 ? 3 : 4;

        days.push({
            date: date.toISOString().split('T')[0],
            count,
            level: level as 0 | 1 | 2 | 3 | 4,
        });
    }

    return days;
}

export { GITHUB_USERNAME };
