import { useLoaderData } from "react-router-dom";
import Banner from "../Banner";
// import Heading from "../Heading";



const Home = () => {
    const categories = useLoaderData()
    return (
        <div>
            {/* <div className="bg-[#9538E2] py-36 text-white">
            <Heading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'} 
            subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}></Heading></div> */}
            
            <Banner></Banner>
            {/* <Heading title={'This is a title'} 
            subtitle={'This is a subtitle'}>
            </Heading> */}
            <div className="text-[#9538E2] text-center text-4xl font-bold mt-4">
                <h1>Explore Cutting-Edge Gadgets</h1>
            </div>

            <div role="tablist" className="tabs tabs-lifted">
  <a role="tab" className="tab">Tab 1</a>
  <a role="tab" className="tab tab-active">Tab 2</a>
  <a role="tab" className="tab">Tab 3</a>
  
</div>
        
        </div>
    );
};

export default Home;


