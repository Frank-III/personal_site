import type { blogg } from "./schemas";

export function filterblog( blogs: blogg[], cond: (obj: blogg) => boolean) {
  const satisfied = Array<blogg>();
  const unsatisfied = Array<blogg>();
  blogs.forEach((blog) => {
    if (blog.pined) {
      satisfied.push(blog);
    } else {
      unsatisfied.push(blog);
    }
  })
  return [satisfied, unsatisfied];
}