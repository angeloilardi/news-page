import Image from 'next/image'

const midNews = [
  {
    title: "Hydrogen VS Electric Cars",
    subtitle: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    subtitle:
      " What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    subtitle:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const bottomNews = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    subtitle: "What happens when old PCs are given modern upgrades?",
    image: "./images/image-retro-pcs.jpg",
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    subtitle: "Our best picks for various needs and budgets.",
    image: "./images/image-top-laptops.jpg",
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    subtitle: "How the pandemic has sparked fresh opportunities.",
    image: "./images/image-gaming-growth.jpg",
  },
];

export default function Home() {
  return (
    <>
      <div className="md:grid md:grid-cols-3 md:grid-rows-2 max-w-5xl mx-auto md:auto-rows-fr">
        <section className="flex flex-col md:col-span-2 p-4 md:grid bg-off-white md:auto-rows-min ">
          <img
            src="./images/image-web-3-desktop.jpg"
            alt=""
            className="md:col-span-2"
          />
          <h1 className="text-5xl font-bold mt-5 text-black">
            The Bright Future of Web 3.0?
          </h1>
          <div className="md:col-span-1">
            <p className="mt-5 text-sm text-dark-grayish-blue">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="mt-5 bg-soft-red text-off-white p-4 max-w-[50%] h-[50px] tracking-widest font-medium">
              READ MORE
            </button>
          </div>
        </section>
        <section className="flex flex-col p-4 bg-off-white">
          <div className="bg-very-dark-blue p-4">
            <h2 className="text-soft-orange font-semibold text-xl">New</h2>
            {midNews.map((item, index) => {
              return (
                <>
                  <h3 className="font-bold mt-4 text-xl text-off-white">
                    {item.title}
                  </h3>
                  <p className="text-grayish-blue mt-4 mb-3 text-[15px]">
                    {item.subtitle}
                  </p>
                  {index < midNews.length - 1 ? <hr /> : ""}
                </>
              );
            })}
          </div>
        </section>
        <section className="flex flex-col gap-6 p-4 md:p-0 md:grid md:grid-cols-3 bg-white md:col-span-3">
          {bottomNews.map((item) => {
            return (
              <div className="flex my-6 h-[150px] md:col-span-1">
                <img src={item.image} alt="" className="max-w-[30%] " />
                <div className="flex flex-col ml-5 justify-between md:">
                  <h1 className="text-4xl text-grayish-blue font-semibold md:row-start-2">
                    {item.number}
                  </h1>
                  <h2 className="font-semibold text-lg md:row-start-3">
                    {item.title}
                  </h2>
                  <p className="text-dark-grayish-blue">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}
