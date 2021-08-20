import React, { useEffect, useRef } from "react";
import { styled } from "../../stitches.config";

import Logo from "../../media/logo.png"
import { TextLink } from "../Link";
import { FiSearch } from "react-icons/fi"
import { Link } from "gatsby";
import { useState } from "react";
//Must implement gatsby image plugin

const Holder = styled("div", {
  position: "relative",
  margin: "0px",
  width: "100%",
  height: "100px",
  backgroundColor: "#FFFEA1",
  display: "flex",
  alignItems: "center",
})

const PageLinks = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  right: "100px",
  position: "absolute"
})

const PageLink = styled(TextLink, {
  margin: "15px"
})

const StyledSearchIcon = styled(FiSearch, {
  "&:hover": {
    cursor: "pointer"
  }
})

const SearchBar = () => {
  return (
    <input type="text" placeholder="Type here.." id="searchBar"/>
  )
}

const SearchIcon = ({ searchActive, setSearchActive, search }) => {

  const onSearchClick = () => {
    if (searchActive) {
      search()
    } else {
      setSearchActive(true)
    }
  }

  const handleClick = (e) => {
    const searchIcon = document.getElementById("searchIcon")
    const searchBar = document.getElementById("searchBar")
    if (searchIcon && searchIcon.contains(e.target)){
      onSearchClick()
    } else {
      if (searchBar && !searchBar.contains(e.target)) {
        setSearchActive(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleClick)
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [])

  return (
    <StyledSearchIcon id="searchIcon" />
  )
}



export const DesktopNavbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  const search = () => {
    console.log("no search yet :(")
  }

  return (
    <Holder>
      <Link to={"/"}>
        <img src={Logo} style={{ marginLeft: "50px" }} />
      </Link>
      <PageLinks>
        <PageLink to="/about">About</PageLink>
        <PageLink to="/archive">Archive</PageLink>
        <PageLink to="/print-issues">Print Issues</PageLink>
        <SearchIcon setSearchActive={setSearchActive} search={search} searchActive={searchActive} />
        {
          searchActive ?
            <SearchBar />
            : null
        }
      </PageLinks>
    </Holder>
  )
}