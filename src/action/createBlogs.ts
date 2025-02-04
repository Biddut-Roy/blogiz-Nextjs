"use server";

import { Blog } from "../../Type";

export const createBlogs = async (data: Blog) => {
  const response = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });
  const blogsInfo = await response.json();

  return blogsInfo;
};
