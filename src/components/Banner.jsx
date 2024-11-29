import bannerImg from '../assets/banner.jpg'

const Banner = () => {
    return (
     <div className=" -mt-32">
        <div className="bg-[#9538E2] container mx-auto mt-10 py-10">
          <h1 className="w-[380px] ml-12 md:w-[600px] text-center md:ml-60 text-xl md:text-3xl lg:text-4xl font-semibold text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
          <p className="text-center mt-4 w-[400px] md:w-[500px] md:ml-[290px] md:text-[15px] text-white ml-10 text-[12px]">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
          <button className="btn text-center mb-20 ml-48 md:ml-[500px] mt-10 px-10 ">Shop Now</button>
        </div>
        <div className='-mt-12 md:ml-48 border border-spacing-20 rounded-lg md:w-[760px]'>
          <img src={bannerImg} alt="" />
        </div>
        {/* <div className="hero bg-banner bg-base-200 min-h-[400px] w-[480px] md:w-[700px] md:ml-8 lg:w-[800px] lg:ml-14">
     
       </div> */}
    </div>
    );
};

export default Banner;