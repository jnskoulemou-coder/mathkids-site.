#!/usr/bin/env node
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const PAGE_ID = process.env.FB_PAGE_ID;
const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

if (!PAGE_ID || !ACCESS_TOKEN) {
  console.error(
    "Variables manquantes. Definis FB_PAGE_ID et FB_PAGE_ACCESS_TOKEN avant de lancer ce script.\n" +
      "Exemple :\n  FB_PAGE_ID=123456789 FB_PAGE_ACCESS_TOKEN=xxxxx node publish-facebook.mjs"
  );
  process.exit(1);
}

const posts = JSON.parse(readFileSync(join(__dirname, "posts.json"), "utf-8"));

const GRAPH_URL = `https://graph.facebook.com/v21.0/${PAGE_ID}/feed`;
const MIN_LEAD_MINUTES = 10;

async function publishPost(post) {
  const scheduledDate = new Date(post.date);
  const now = new Date();
  const minutesUntil = (scheduledDate.getTime() - now.getTime()) / 60000;
  const publishImmediately = post.publishNow || minutesUntil < MIN_LEAD_MINUTES;

  const params = new URLSearchParams();
  params.set("message", post.message);
  params.set("access_token", ACCESS_TOKEN);

  if (publishImmediately) {
    params.set("published", "true");
  } else {
    params.set("published", "false");
    params.set(
      "scheduled_publish_time",
      String(Math.floor(scheduledDate.getTime() / 1000))
    );
  }

  const res = await fetch(GRAPH_URL, { method: "POST", body: params });
  const data = await res.json();

  if (!res.ok) {
    console.error(`Echec pour le post du ${post.date} :`, data.error?.message || data);
    return { ok: false, post, error: data.error };
  }

  console.log(
    `${publishImmediately ? "Publie immediatement" : "Programme"} (${post.date}) -> id: ${data.id}`
  );
  return { ok: true, post, id: data.id };
}

const results = [];
for (const post of posts) {
  results.push(await publishPost(post));
}

const failed = results.filter((r) => !r.ok);
console.log(
  `\n${results.length - failed.length}/${results.length} posts traites avec succes.`
);
if (failed.length > 0) {
  console.log(`${failed.length} echec(s) - voir les messages d'erreur ci-dessus.`);
  process.exit(1);
}
