import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../theme";

declare global {
  interface AppState {
    data: Post[];
    requestData: Dispatch<SetStateAction<string>>;
  }

  type Post = {
    copyright?: string;
    date: string;
    explanation: string;
    hdurl?: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
  };
}

export default function App({ Component, pageProps }) {
  const [newDate, requestData] = useState<string>();
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    if (newDate) {
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=SKVBHJdgV891nEHTRi9lpH8n8SfAhCv2SW8cfMr1&date=${newDate}`
      ).then(async (p) => {
        const _data = await p.json();
        setData((prev) => [_data, ...prev]);
      });
    }
  }, [newDate]);

  useEffect(() => {
    if (!data.length) {
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

      Promise.all(promises).then((v) => {
        setData(v);
      });
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} data={data} requestData={requestData} />
      </ThemeProvider>
    </>
  );
}

function getLast7Days() {
  return [...Array(7)].map((_, i) => {
    let rawDate: string[];

    if (i === 0) {
      rawDate = new Date(Date.now())
        .toLocaleDateString("en-us")
        .split(/[\/\-]/g);
    } else {
      rawDate = new Date(Date.now() - 86400000 * i)
        .toLocaleDateString("en-us")
        .split(/[\/\-]/g);
    }

    let month = rawDate[0],
      day = rawDate[1],
      year = rawDate[2];

    if (month.length === 1) {
      month = "0" + month;
    }

    if (day.length === 1) {
      day = "0" + day;
    }

    return `${year}-${month}-${day}`;
  });
}
