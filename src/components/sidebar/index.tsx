"use client";

import React, { useState } from "react";
import Typography from "../typography";
import SidebarButton from "./sidebarButton.tsx";
import Circle from "../../../public/assets/circle";
import Love from "../../../public/assets/love";
import Code from "../../../public/assets/code";
import Collecting from "../../../public/assets/collecting";
import SidebarStar from "../../../public/assets/sidebarStar";

type MenuItem = {
  text: string;
  icon: React.ReactNode;
  clickHandler: (event: any) => void;
};
interface Props {
  // Define your component's props here
  menuLists: any;
}

const Sidebar: React.FC<Props> = ({ menuLists }) => {
  // Implement your component logic here
  // const [selectedIndex, setSelectedIndex] = useState(0);
  // const [embedSelectedIndex, setEmbedSelectedIndex] = useState(-1);

  // const clickHandler = (index: number) => {
  //   setSelectedIndex(index);
  //   setEmbedSelectedIndex(-1);
  // };

  // const embedClickHandler = (index: number) => {
  //   setEmbedSelectedIndex(index);
  //   setSelectedIndex(-1);
  // };
  return (
    <div className="flex flex-col gap-4 pl-6">
      {menuLists.map((menuList) => {
        return (
          <>
            <Typography
              classes="text-grayText"
              type="h4"
              text={menuList.listTitle}
            />
            <div className="flex flex-col gap-2">
              {menuList.menuItems.map((item, index) => (
                <SidebarButton
                  clickHandler={() => menuList.clickHandler(index)}
                  isActive={menuList.isActive(index, menuList.listTitle)}
                >
                  <div className="flex items-center gap-1">
                    {/* <Circle color={item.color} /> */}
                    {item.icon}
                    <Typography
                      type={"p"}
                      text={item.text}
                      classes="text-grayText"
                    />
                  </div>
                </SidebarButton>
              ))}
            </div>
          </>
        );
      })}
      {/* <div className="flex flex-col gap-4 pl-6">
        <Typography classes="text-grayText" type="h4" text="INBOX" />
        <div className="flex flex-col gap-2">
          {inboxList.map((item, index) => (
            <SidebarButton
              clickHandler={() => {
                clickHandler(index);
              }}
              isActive={index === selectedIndex}
            >
              <div className="flex items-center gap-1">
                <Circle color={item.color} />
                <Typography
                  type={"p"}
                  text={item.text}
                  classes="text-grayText"
                />
              </div>
            </SidebarButton>
          ))}
        </div>

        <Typography classes="text-grayText" type="h4" text="EMBEDS & METRICS" />
        <div className="flex flex-col gap-2">
          {embedList.map((item, index) => (
            <SidebarButton
              isActive={index === embedSelectedIndex}
              clickHandler={() => {
                embedClickHandler(index);
              }}
            >
              <div className="flex items-center gap-1">
                {item.icon}
                <Typography
                  type={"p"}
                  text={item.text}
                  classes="text-grayText"
                />
              </div>
            </SidebarButton>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Sidebar;
