export default function About() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-8 dark:text-white">About</div>
      <div className="flex xl:flex-row flex-col gap-12">
        <div className="text-base flex flex-col gap-y-8 xl:w-3/5 leading-7 text-neutral-800">
          <div>
            <p className="dark:text-white font-medium">Classes Taken</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Programming and Introductory Data Structures (EECS 280), Data
              Structures and Algorithms (EECS 281), Intro to Computer
              Organization (EECS 370), Microprocessors and Toys (ENGR 100)
            </p>
          </div>
          <div>
            <p className="dark:text-white font-medium">Languages</p>
            <p className="text-zinc-600 dark:text-zinc-400">
              HTML/CSS/JavaScript, TypeScript, Python, C, C++, SQL, VBA
            </p>
          </div>
          <div>
            <p className="dark:text-white font-medium">
              Frameworks + Technologies
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              React, Next.js, Tailwind CSS, Node.js, Express, Flask, MongoDB,
              Git
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
