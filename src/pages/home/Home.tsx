import React from "react";
import { HomeCompanet } from "../../components/screens";
import { useGetStreatsQuery } from "../../store/userRTK/userRTK";
const Home: React.FC = () => {
  const { isLoading, data } = useGetStreatsQuery(null);

  return (
    <main>
      {isLoading ? (
        <h1>loading...</h1>
      ) : (
        <HomeCompanet data={data ? data : []} />
      )}
    </main>
  );
};

export default Home;
