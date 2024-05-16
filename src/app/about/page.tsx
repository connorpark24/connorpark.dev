export default function About() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4 dark:text-white">About</div>
      <div className="text-lg mb-8 dark:text-white"> A little more on me.</div>

      <div className="text-base flex flex-col gap-y-8 w-3/5 leading-7 text-neutral-800">
        <p className="dark:text-white">Classes taken:</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Some of my interests include college football (Go Blue!), playing
          golf, cooking street food, and venture capital.
        </p>
        <p className="dark:text-white">Interests: </p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Some of my interests include college football (Go Blue!), playing
          golf, cooking street food, and venture capital.
        </p>
        <p className="dark:text-white">Favorite things:</p>
        <p className="text-zinc-600 dark:text-zinc-400">
          Some of my interests include college football (Go Blue!), playing
          golf, cooking street food, and venture capital.
        </p>
      </div>
    </div>
  );
}
