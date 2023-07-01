import card1 from "../assets/Card.png";
import card2 from "../assets/Calculator.png";
import card3 from "../assets/Camera.png";

const Services = () => {
  return (
    <>
      <div className="container mx-auto w-9/12 flex lg:flex-row sm:flex-col justify-between items-center mt-[190px]">
        <div className="flex flex-col items-center text-center w-72 gap-5 mb-14">
          <div>
            <img src={card1} alt="Card" />
          </div>
          <div className="text-2xl font-bold">Benchmarks</div>
          <div className="text-base font-normal">
            See how you stack up against comparable companies in similar stages.
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 gap-5 mb-14">
          <div>
            <img src={card2} alt="Calculator" />
          </div>
          <div className="text-2xl font-bold">Pricing Audit</div>
          <div className="text-base font-normal">
            Benchmark the health of your monetization and pricing strategy.
          </div>
        </div>
        <div className="flex flex-col items-center text-center w-72 gap-5 mb-14">
          <div>
            <img src={card3} alt="Camera" />
          </div>
          <div className="text-2xl font-bold">Retention Audit</div>
          <div className="text-base font-normal">
            Audit where revenue leakage exists and where you can increase
            retention.
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
