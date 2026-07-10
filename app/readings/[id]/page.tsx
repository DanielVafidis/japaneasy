import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allReadings, getReading } from "@/content/readings";
import { ReadingView } from "@/components/reading/ReadingView";

export function generateStaticParams() {
  return allReadings.map((r) => ({ id: r.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const reading = getReading(id);
  if (!reading) return { title: "Reading not found" };
  return { title: reading.title, description: reading.summary };
}

export default async function ReadingPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const reading = getReading(id);
  if (!reading) notFound();

  return <ReadingView reading={reading} />;
}
