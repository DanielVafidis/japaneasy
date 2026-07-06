import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="page-x mx-auto grid min-h-[60vh] max-w-xl place-items-center text-center">
      <div>
        <p className="font-jp text-5xl text-shu/80 sm:text-7xl">迷子</p>
        <h1 className="mt-4 font-display text-3xl text-ink sm:text-4xl">Page not found</h1>
        <p className="mt-3 text-ink-soft">
          That page seems to have wandered off. Let&apos;s get you back on the
          path.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/learn" variant="outline">
            Curriculum
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
