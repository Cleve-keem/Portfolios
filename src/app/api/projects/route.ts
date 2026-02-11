import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json({ error: "Env vars missing" }, { status: 500 });
  }

  const query = `
  query getPinned($login: String!) {
    user(login: $login) {
      pinnedItems(first: 10, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            createdAt
            url
            stargazerCount
            primaryLanguage {
              name
            }
            # Fetch the topics/tags for each repo
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { login: username },
      }),
    });

    const result = await response.json();

    if (result.errors) {
      return NextResponse.json(
        { error: result.errors[0].message },
        { status: 400 },
      );
    }

    const pinned = result.data.user.pinnedItems.nodes;

    // Map the data to include a "category" field
    const formatted = pinned.map((repo: any) => {
      const topicNames = repo.repositoryTopics.nodes.map((t: any) =>
        t.topic.name.toLowerCase(),
      );
      const repoName = repo.name.toLowerCase();

      // Logic to determine category
      let category = "frontend";
      if (
        topicNames.includes("backend") ||
        topicNames.includes("api") ||
        repoName.includes("api") ||
        repoName.includes("backend")
      ) {
        category = "backend";
      }

      return {
        title: repo.name,
        description: repo.description,
        url: repo.url,
        stars: repo.stargazerCount,
        language: repo.primaryLanguage?.name,
        category: category,
      };
    });

    return NextResponse.json(formatted);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
