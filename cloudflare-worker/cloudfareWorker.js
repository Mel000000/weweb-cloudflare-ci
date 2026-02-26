export default {
  async fetch(request) {
    try {
      const body = await request.json();

      // Optional: check for a secret token from WeWeb
      if (body.secret !== "MY_SECRET") {
        return new Response("Unauthorized", { status: 401 });
      }

      // GitHub API call to trigger repository_dispatch
      const res = await fetch(
        "https://api.github.com/repos/thomasreisinger/weweb-deploy/dispatches",
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${GITHUB_PAT}`,
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            event_type: "weweb-update",
            client_payload: {
              branch: body.branch || "main",
            },
          }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        return new Response(`GitHub API error: ${text}`, { status: res.status });
      }

      return new Response("Workflow triggered", { status: 200 });
    } catch (err) {
      return new Response(`Error: ${err.message}`, { status: 500 });
    }
  },
};
