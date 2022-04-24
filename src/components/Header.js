import Hero from "./Hero";
import Navbar from "./Navbar";
import Search from "./Search";
import { Box } from "@mui/material";
import { useParams, useLocation } from "react-router-dom";

const Header = () => {
  const { carId } = useParams();
  const location = useLocation();

  return (
    <Box position="relative" bgcolor="#F1F3FF">
      <Navbar />
      {location.pathname === `/car/${carId}` || location.pathname === "/car" ? <Box height={200} /> : <Hero />}
      <Search />
    </Box>
  );
};

export default Header;
