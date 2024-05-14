export default function About() {
  return (
    <div className="flex flex-col w-full pt-16">
      <div className="text-5xl font-medium mb-4 ">About</div>
      <div className="text-lg mb-8"> A little more on me.</div>

      <div className="text-base flex flex-col gap-y-8 w-3/5 leading-7 text-neutral-800">
        <p>Classes taken:</p>
        <p>Interests: </p>
        <p>Favorite things:</p>
      </div>
    </div>
  );
}
