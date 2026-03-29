import PageIntro from "./shared/PageIntro";

export default function EventsContent() {
  return (
    <PageIntro title="Events">
      <div className="mt-8 rounded-[1.75rem] border border-white/70 bg-white/65 px-6 py-10 text-center shadow-[0_18px_45px_-30px_rgba(59,45,24,0.35)] backdrop-blur">
        <p className="font-[family-name:var(--font-display)] text-xs uppercase tracking-[0.22em] text-stone-500">
          Coming soon
        </p>
        <p className="mt-3 font-[family-name:var(--font-body)] text-lg leading-8 text-stone-700">
          Upcoming events and seasonal updates will be shared here soon.
        </p>
      </div>
    </PageIntro>
  );
}
