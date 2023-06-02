import type { blogg } from "./schemas";
import {CollectionEntry}  from 'astro:content'

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

export function sort_(inputs: CollectionEntry<"blogs">[]): blogg[] {

}


const sortedblogs = blogs.map((blog) => {
    const { title, date, description, image, pined } = blog.data;
    return {
      title,
      date: dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD"),
      description,
      url: blog.slug,
      image: image,
      pined: pined
    } as blogg;
  })
  .sort((a, b) => {
    return dayjs(b.date).diff(dayjs(a.date));
  });
