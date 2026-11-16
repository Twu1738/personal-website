export default function Friends() {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <h1>Friends</h1>
        </div>
        <div>
          <p>
            These are some of my friends that I have made along the way
            throughout my journey
          </p>
          <p>Feel free to checkout their websites as well!</p>
        </div>

        <div className="mx-5 mt-5 flex flex-row justify-between">
          <a href="https://tusharshaji.dev/">Tushar Shaji</a>
          <a href="https://www.ericzheng.nz/">Eric Zheng</a>
          <a href="https://koutaroyumiba.com/">Koutaro Yumiba</a>
        </div>
      </div>
    </>
  );
}
