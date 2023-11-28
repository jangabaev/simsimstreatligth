import React from "react";
import { HomeCompanet,HomeLoading } from "../../components/screens";
import { useGetStreatsQuery } from "../../store/userRTK/userRTK";
const Home: React.FC = () => {
  const { isLoading, data } = useGetStreatsQuery(null);
  return (
    <main>
      {isLoading ? (
        <HomeLoading/>
      ) : (
        <HomeCompanet data={data ? data : []} />
      )}
    </main>
  );
};

export default Home;
