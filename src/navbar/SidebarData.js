import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Generations",
    path: "/generations",
    icon: <MdIcons.MdOutlineCatchingPokemon />,
    className: "nav-text",
  },
  {
    title: "Berries",
    path: "/berries",
    icon: <MdIcons.MdOutlineLocalFlorist />,
    className: "nav-text",
  },
];
