import image from '../../assets/image-2.png';

const PlasticImpact = () => {
  return (
    <div className="flex justify-center mb-32">
      <div className="  w-[1000px] h-[1270px] bg-[#006d44] flex items-center justify-center">
        <div className="px-5 py-6 w-[950px] h-[1220px] bg-white">
          <div className="flex gap-x-7">
            <div className="flex-1">
              <h2 className="font-bold font-openSans text-[40px]  text-[#006D44] leading-[45px]">
                The Impact of Plastic
              </h2>
              <h2 className="font-bold font-openSans text-[40px]  text-[#006D44] leading-[45px]">
                Recycling in our Environment
              </h2>
              <small className="text-[#006D44] text-[12px] leading-4 font-openSans font-bold tracking-[0.4px]">
                - Balogun Ademola, May, 2023
              </small>
              <p className="font-openSans">
                Plastic pollution has become a pressing environmental issue,
                with millions of tons of plastic waste ending up in landfills
                and oceans each year. However, plastic recycling offers a
                sustainable solution that not only mitigates the detrimental
                impact of plastic waste but also helps conserve valuable natural
                resources. At Ecocollect, we believe in the power of collective
                action, and by participating in our platform, you can contribute
                to the positive change our planet desperately needs.
              </p>
            </div>
            <div className="flex-2 w-[300px]">
              <img
                src={image}
                alt="image-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="pl-3 mt-3">
            <ol className="list-decimal text-black">
              <li className="mb-3">
                <h3 className=" font-openSans text-[19.2px] font-bold">
                  Environmental Benefits of Plastic Recycling:
                </h3>
                <p className="font-openSans">
                  Plastic recycling has far-reaching environmental benefits that
                  go beyond waste reduction. By recycling plastics, we can:
                </p>
                <ol className="list-disc ml-2">
                  <li className="font-openSans ">
                    Reduce Landfill Waste: Plastics can take hundreds of years
                    to decompose, occupying valuable landfill space. Recycling
                    allows us to divert plastics from landfills, alleviating the
                    strain on our limited waste disposal capacity.
                  </li>
                  <li className="font-openSans ">
                    Conserve Natural Resources: Plastic recycling helps conserve
                    precious natural resources like fossil fuels and water. By
                    reprocessing plastic waste, we reduce the need for
                    extracting new raw materials, which saves energy and reduces
                    greenhouse gas emissions.
                  </li>
                  <li className="font-openSans ">
                    Prevent Ocean Pollution: Plastics that end up in our oceans
                    pose a severe threat to marine life and ecosystems. By
                    recycling plastics, we minimize the amount of plastic waste
                    that finds its way into our oceans, safeguarding marine
                    biodiversity.
                  </li>
                </ol>
              </li>
              <li className="mb-3">
                <h3 className=" font-openSans text-[19.2px] font-bold">
                  Economic Benefits of Plastic Recycling:
                </h3>
                <p className="font-openSans">
                  In addition to its environmental advantages, plastic recycling
                  also offers economic benefits:
                </p>
                <ol className="list-disc ml-2">
                  <li className="font-openSans ">
                    Job Creation: The recycling industry creates numerous
                    employment opportunities, from waste collection to
                    processing and manufacturing. By supporting plastic
                    recycling, we contribute to local economies and job growth.
                  </li>

                  <li className="font-openSans ">
                    Resource Efficiency: Recycling plastic waste reduces the
                    reliance on virgin materials for manufacturing. This not
                    only saves costs but also promotes resource efficiency,
                    making industries more sustainable in the long run.
                  </li>
                </ol>
              </li>
              <li className="mb-3">
                <h3 className=" font-openSans text-[19.2px] font-bold">
                  How [Platform Name] Makes a Difference:
                </h3>
                <p className="font-openSans">
                  Our Web3 platform takes plastic recycling to the next level by
                  incentivizing individuals to actively participate in waste
                  collection. By depositing waste plastics through our platform,
                  you not only contribute to a cleaner environment but also earn
                  tokens as a reward for your efforts.
                </p>
                <ol className="list-disc ml-2">
                  <li className="font-openSans ">
                    Transparent and Secure: Powered by blockchain technology,
                    our platform ensures transparency and security throughout
                    the recycling process. You can have confidence in the
                    integrity of the transactions and the traceability of your
                    contributions.
                  </li>

                  <li className="font-openSans ">
                    Recycling Partnerships: We have established partnerships
                    with reputable plastic recycling companies. When you deposit
                    waste plastics on our platform, these companies purchase
                    them for recycling, ensuring that your efforts have a direct
                    impact on the circular economy.
                  </li>
                  <li className="font-openSans ">
                    Token Rewards: As a token of appreciation for your
                    contributions, we reward you with tokens based on the weight
                    and type of plastics you deposit. These tokens can be
                    redeemed for various benefits within our platform ecosystem
                    or even exchanged for other cryptocurrencies.
                  </li>
                </ol>
              </li>
            </ol>
          </div>
          <div className="">
            <h3 className="font-openSans font-bold text-[19.2px]">
              Conclusion:
            </h3>
            <p className="mb-1 font-openSans">
              Plastic recycling is a vital component of our journey towards a
              cleaner and more sustainable planet. By joining our platform, you
              become part of a global movement that recognizes the importance of
              recycling and rewards individuals for their contributions.
              Together, we can make a significant difference in reducing plastic
              pollution, conserving resources, and creating a brighter future
              for generations to come.
            </p>
            <p className="font-openSans pb-2">
              Start making an impact today with Ecocollect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlasticImpact;
