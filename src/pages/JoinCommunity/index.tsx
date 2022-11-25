import { type NextPage } from "next";
import FindCommunityCard from "../../components/FindCommunityCard";

const JoinCommunity: NextPage = () => {

  const data = [{
    name: "vSelf DAO",
    description: "Web3 identity wallet with for data",
    color: "#fff",
    path: "/VselfDao",
    url: "",
    property: "community-card-blue flex flex-row justify-center rounded-3xl pl-5 ml-3 mr-3 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-3 card"
  }, {
    name: "vSelf DAO",
    description: "Community for creators and lovers",
    color: "#3D3D3D",
    path: "/ErrorPage",
    url: "/images/Star.png",
    property: "community-card-cyan flex flex-row justify-center rounded-3xl pl-5  ml-3 mr-3 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-4 card"
  }, {
    name: "Hashd0x DAO",
    description: "Open-investigations community to fight fake news",
    color: "#3D3D3D",
    path: "/ErrorPage",
    url: "",
    property: "community-card-light-cyan flex flex-row justify-center rounded-3xl pl-5 ml-3 mr-3 shadow-xl duration-500 motion-safe:hover:scale-105 ribbon-5 card"
  }];

  return (
    <div className="pt-10 pb-10 flex justify-center">
      <div className="">
        <p className="text-[40px] text-white text-center font-cy">Find your community</p>
        <div className="pt-10 pb-10 flex card-section-2">
          {data.map((e, i) => {
            return (<FindCommunityCard
              name={e.name}
              description={e.description}
              color={e.color}
              path={e.path}
              url={e.url}
              property={e.property}
              key={i}
            />)
          })}
        </div>
        <div className="search-section gap-x-20 pt-10 flex items-center justify-center">
          <p style={{fontSize:"20px", color:"#fff"}}>Type in the name</p>
          <form className="flex items-center">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <input type="text" id="simple-search" className="bg-gray-50 border bg-opacity-0 text-white text-sm rounded-full  block pl-10 p-2.5  " placeholder="Search"  />
              <div className="absolute inset-y-0 right-5 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;

