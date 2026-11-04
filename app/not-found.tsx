import { LinkButton } from "@/components/ui/LinkButton";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70vh] flex-col justify-center pt-32 pb-24">
      <p className="kicker text-mist">404 · Offside</p>
      <h1 className="display mt-5 text-[clamp(3rem,10vw,7rem)]">This page isn&apos;t on the pitch.</h1>
      <p className="mt-5 max-w-lg text-mist">The link may be out of date, or the page has moved.</p>
      <div className="mt-8">
        <LinkButton href="/">Back to home</LinkButton>
      </div>
    </div>
  );
}
