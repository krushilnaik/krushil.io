import { ApolloClient, DocumentNode, InMemoryCache } from "@apollo/client";

import { getCookie, setCookie } from "cookies-next";

export const getCurrentScheme = async () => {
  if (typeof window === "undefined") {
    return import("next/headers").then(({ cookies }) => {
      return cookies().has("scheme") ? cookies().get("scheme")?.value : "light";
    });
  }

  return getCookie("scheme", { path: "/" });
};

export const toggleScheme = async () => {
  const scheme = await getCurrentScheme();

  const newScheme = scheme === "dark" ? "light" : "dark";

  setCookie("scheme", newScheme, {
    path: "/",
  });

  return newScheme;
};

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_URL,
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_PERMANENTAUTH_TOKEN}`,
  },
  cache: new InMemoryCache(),
});

export default client;

export function runQuery<T>(query: DocumentNode, variables = {}) {
  let status = "pending";
  let result: T;

  const suspender = client
    .query({
      query,
      variables,
    })
    .then((response) => {
      status = "success";
      result = response.data;
    })
    .catch((err) => {
      status = "error";
      result = err;
    });

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else {
        return result;
      }
    },
  };
}
