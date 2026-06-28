import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60vh] max-w-xl place-items-center px-5 text-center">
      <div>
        <p className="font-jp text-7xl text-shu/80">迷子</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Page not found</h1>
        <p className="mt-3 text-ink-soft">
          That page seems to have wandered off. Let&apos;s get you back on the
          path.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <ButtonLink href="/">Home</ButtonLink>
          <ButtonLink href="/learn" variant="outline">
            Curriculum
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
