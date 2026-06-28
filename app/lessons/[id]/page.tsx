import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLesson, adjacentLessons, allLessons } from "@/content/curriculum";
import { LessonView } from "@/components/lesson/LessonView";

export function generateStaticParams() {
  return allLessons.map((l) => ({ id: l.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) return { title: "Lesson not found" };
  return {
    title: lesson.title,
    description: lesson.summary ?? lesson.subtitle,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lesson = getLesson(id);
  if (!lesson) notFound();

  const { prev, next } = adjacentLessons(id);

  return (
    <LessonView
      lesson={lesson}
      prev={prev ? { id: prev.id, title: prev.title } : null}
      next={next ? { id: next.id, title: next.title } : null}
    />
  );
}
