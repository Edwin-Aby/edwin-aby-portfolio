import { redirect } from "next/navigation";

// Keep legacy bookmarks and outside links working while the portfolio lives in Work.
export default function FilmsRedirect() {
  redirect("/work?filter=moving-image");
}
