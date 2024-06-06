import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
      <div className="grid grid-cols-3 gap-4">
      {/* Light mode colors */}
      <div className="bg-light-primary p-4">Light Primary</div>
      <div className="bg-light-secondary p-4">Light Secondary</div>
      <div className="bg-light-accent p-4">Light Accent</div>

      {/* Dark mode colors */}
      <div className="dark:bg-dark-primary p-4">Dark Primary</div>
      <div className="dark:bg-dark-secondary p-4">Dark Secondary</div>
      <div className="dark:bg-dark-accent p-4">Dark Accent</div>
    </div>
      </section>
    </main>
  );
}
