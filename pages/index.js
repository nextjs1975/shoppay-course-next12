import axios from "axios";
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";

export default function Home({ country }) {
  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  );
}
export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=9f92nfea6aas5z2g")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
