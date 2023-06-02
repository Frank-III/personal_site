import type { blogg } from "./schemas";
import type {CollectionEntry}  from 'astro:content'
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

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

export function sort_(inputs: CollectionEntry<"blogs">[], redirect:Boolean=false): blogg[] {
  return inputs.map((input) => {
    const { title, date, description, image, pined } = input.data;
    return {
      title,
      date: dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD"),
      description,
      url: redirect? input.slug : '../' + input.slug,
      image: image,
      pined: pined
    } as blogg;
  })
  .sort((a, b) => {
    return dayjs(b.date).diff(dayjs(a.date));
  });
}


