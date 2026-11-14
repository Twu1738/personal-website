export function Navbar() {
  return (
    <>
      <header className="bg-neon-green flex flex-row justify-between p-5 text-3xl font-bold">
        <div>
          <a href="/">tw</a>
        </div>

        <div>
          <a href="/about-me">about me</a>
        </div>

        <div>
          <a href="/projects">projects</a>
        </div>

        <div>
          <a href="/blog">blog</a>
        </div>

        <div>
          <a href="/friends">friends</a>
        </div>
      </header>
    </>
  );
}
