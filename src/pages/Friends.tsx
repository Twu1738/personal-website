export default function Friends() {
  const friends = [
    {
      name: "Eric Zheng",
      website: "https://www.ericzheng.nz/",
      story: "my og mentor from first year",
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
      <div className="flex flex-col gap-10 px-5">
        <div>
          <h1>Friends</h1>
        </div>
        <div className="max-w-prose">
          <p>
            These are some of my friends that I have made along the way
            throughout my journey in chronological order and a short summary in
            how I met them :D
          </p>
          <p>Feel free to checkout their websites as well!</p>
        </div>

        <div className="mx-5 mt-5 flex h-full flex-row justify-between">
          {friends.map(({ name, website, story }, index) => (
            <div key={index} className="w-full">
              <p>{name}</p>
              <p>{story}</p>
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
