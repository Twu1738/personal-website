export function Footer() {
  return (
    <>
      <footer className="border-neon-green bg-paper flex flex-row justify-between gap-10 border-t-2 p-5 text-lg">
        <div className="">
          <p>© Terrence Wu 2026</p>
        </div>

        <div className="mx-10 flex gap-4">
          <a
            href="https://github.com/Twu1738"
            className="text-blue-500 hover:text-blue-700"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/terrence-wu-5657a0376/"
            className="text-blue-500 hover:text-blue-700"
          >
            linkedin
          </a>
        </div>
      </footer>
    </>
  );
}
