export default {
  async fetch(request, env) {
    const owner = "YOUR_GITHUB_USERNAME_OR_ORG"; // 🔴 Replace with your GitHub username or organization
    const repo = "YOUR_REPO_NAME"; // 🔴 Replace with your repository name

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/dispatches`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${env.GITHUB_TOKEN }`, // 🔴 Ensure this token has repo and workflow permissions and gets set as a secret variable in worker settings
          "Accept": "application/vnd.github+json",
          "User-Agent": "cloudflare-worker",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          event_type: "from-cloudflare",
          client_payload: {
            source: "cloudflare-worker",
            timestamp: new Date().toISOString(),
            customData: "anything you want"
          }
        })
      }
    );

    return new Response(
      response.ok ? "Workflow triggered" : await response.text(),
      { status: response.ok ? 200 : 500 }
    );
  }
};
