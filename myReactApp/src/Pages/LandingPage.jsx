import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import axios from "axios";

const LandingPage = () => {
  const [count, setCount] = useState(0);
  const [isEven, setIsEven] = useState(count % 2 === 0);
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchData = async () => {
    // if (data.length > 0) {
    //   return;
    // }

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      console.log(response.data);
      return setData(response.data);
    } catch (error) {
      console.log(error);
      return setErrorMsg(error.message || "Something went wrong");
    }
  };

  const checkIsEven = () => {
    if (count % 2 === 0) setIsEven(true);
  };

  useEffect(() => {
    console.log("Page is Loaded....");
    fetchData();
  }, []);

  return (
    <section
      className="bg-light position-relative"
      style={{ overflowX: "hidden" }}
    >
      <Navbar />

      <div>{data && data?.map((item) => <p>{item?.name}</p>)}</div>

      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1), checkIsEven();
          }}
        >
          Increase
        </button>
      </div>

      <MainSection />

      <Footer />
    </section>
  );
};

export default LandingPage;
