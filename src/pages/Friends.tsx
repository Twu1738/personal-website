export default function Friends() {
  const friends = [
    {
      name: "Eric Zheng",
      website: "https://www.ericzheng.nz/",
      story: "my og mentor and wdcc project teammate from first year",
    },
    {
      name: "Tushar Shaji",
      website: "https://tusharshaji.dev/",
      story: "my teammate from my first ever hackathon",
    },
    {
      name: "Koutaro Yumiba",
      website: "https://koutaroyumiba.com/",
      story: "my goat teacher for how to be a treasurer",
    },
  ];
  return (
    <>
      <div className="mt-8 flex flex-col gap-5 px-5">
        <div>
          <h1 className="px-6 text-3xl">friends</h1>
        </div>
        <div className="max-w-prose px-6">
          <p>
            some of my friends that I have made along the way throughout my
            journey in chronological order and a short summary on how I met them
            :D
          </p>
          <p>Feel free to checkout their websites as well!</p>
        </div>

        <div className="mx-5 mt-5 grid grid-cols-[auto_1fr_auto] gap-x-5 border-t">
          {friends.map(({ name, website, story }, index) => (
            <div
              key={index}
              className="col-span-full grid grid-cols-subgrid border-b px-2 py-5"
            >
              <p>{index + 1}</p>
              <p>
                {name} - {story}
              </p>
              <a
                href={website}
                className="inline-block transition-transform hover:scale-102 hover:text-gray-500 hover:underline"
              >
                {website}
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
