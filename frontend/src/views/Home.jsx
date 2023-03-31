import { useEffect, useState } from "react";
import { HOST } from "../const";
import withRequireAuth from "../hocs/withRequireAuth";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Row from "../components/Row";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchHome = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${HOST}/`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (res.ok) {
        const body = await res.json();
        setProducts(body);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsFetching(false);
    }
  }

  useEffect(() => {
    fetchHome();
  }, [])

  if(isFetching) return null;
  
  return (
    <>
      <div
        className={`backg relative h-screen bg-gradient-to-b lg:h-[140vh]`}
      >

        <Header />
        <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16 z-20">
          <Banner item={products[0]} />
          <section className="md:space-y-24">
            <Row title="Trending Now" movies={products} />
          </section>
        </main>

      </div>
    </>
  )
}

export default withRequireAuth(Home);