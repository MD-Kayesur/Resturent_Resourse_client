import Header from "../../../components/Header";
import img from "../../../assets/home/featured.jpg";

function FromManu() {
  return (
    <div
      class="hero flex flex-col  bg-fixed bg-base-100 bg-cover my-5 min-h-screen"
      style={{
     
        backgroundImage: `url(${img})`,
      }}>
      <div className="hero-overlay">
        <div className="text-center   py-5 text-white w-full md:w-100 mx-auto ">
          <Header
            subHeading={" -------Click it Out-------- "}
            heading=" From Our  Menu"></Header>
        </div>
      </div>
      <div className="hero-content bg-base-50  backdrop-blur-lg mt-30  text-center">
        <div className=" md:flex gap-5">
          <div className=" ">
            <img src={img} class="md:max-w-sm  rounded-lg shadow-2xl" />
          </div>
          <div className="max-w-md text-left">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white btn-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FromManu;
