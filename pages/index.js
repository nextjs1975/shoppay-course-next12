import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react"
import Footer from "../components/footer";
import Header from "../components/header";
import styles from "../styles/Home.module.scss";

export default function Home({ country }) {
  const { data: session } = useSession()

  return (
    <div>
      <Header country={country} />
        {session ? "You are logged in" : "You are not logged in"}
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
      // country: { name: "Thailand", flag: "./images/th.png" },
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
