import React from "react";
import { styled } from "../../stitches.config";

import Logo from "../../media/logo.png";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { TextLink } from "../Link";
import { useState } from "react";
import { Link } from "gatsby";
//Must implement gatsby image plugin

const Holder = styled("div", {
  position: "relative",
  margin: "0px",
  width: "100%",
  height: "100px",
  backgroundColor: "#FFFEA1",
  display: "flex",
  alignItems: "center",
});

const MenuToggle = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  right: "50px",
});

const NavLinks = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  width: "100%",
  backgroundColor: "#FFFEA1",
  paddingLeft: "50px",
});

const PageLink = styled(TextLink, {
  marginBottom: "10px",
  textDecoration: "none",
});

const SearchBar = () => {
  return <input type="text" placeholder="Type here.." id="searchBar" />;
};

const StyledSearchIcon = styled(FiSearch, {
  "&:hover": {
    cursor: "pointer",
  },
});

const SearchIcon = ({ search }) => {
  const onSearchClick = () => {
    search();
  };

  return <StyledSearchIcon onClick={onSearchClick} />;
};

export const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const search = () => {
    alert("SEARCH");
  };

  return (
    <>
      <Holder>
        <Link to={"/"}>
          <img src={Logo} style={{ marginLeft: "50px" }} />
        </Link>
        <MenuToggle onClick={toggle}>
          {isOpen ? <FiX style={{ fontSize: 24 }} /> : <FiMenu style={{ fontSize: 24 }} />}
        </MenuToggle>
      </Holder>
      {isOpen ? (
        <NavLinks>
          <PageLink to={"/about"}>About</PageLink>
          <PageLink to={"/archive"}>Archive</PageLink>
          <PageLink to={"/printed-issues"}>Printed Issue</PageLink>
          <div style={{ marginBottom: "10px" }}>
            <SearchBar />
            <SearchIcon search={search} />
          </div>
        </NavLinks>
      ) : null}
    </>
  );
};
