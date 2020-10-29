import { getBonusDay, getLast7Days } from "./getDays";

export async function fetchData() {
  const days = getLast7Days();

  const promises: Promise<Post>[] = [];

  for (let i = 0; i < days.length; i++) {
    promises.push(
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=SKVBHJdgV891nEHTRi9lpH8n8SfAhCv2SW8cfMr1&date=${days[i]}`
      ).then(async (p) => {
        const _data = await p.json();
        return _data as Post;
      })
    );
  }

  let posts: Post[] = [];

  await Promise.all(promises).then((v) => {
    posts = v;
  });

  if (posts[0].hasOwnProperty("code")) {
    posts.splice(0, 1);

    const newDay = getBonusDay();

    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=SKVBHJdgV891nEHTRi9lpH8n8SfAhCv2SW8cfMr1&date=${newDay}`
    );

    posts.push(await response.json());
  }

  return posts;
}
