import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import Logo from "../assets/transparent_background_image.png";

export default function Banner() {
  const itemRenderer = (item) => (
    <a
      className="flex align-items-center p-menuitem-link hover-link"
    >
      <span className={item.icon} />
      <span className="mx-2 ">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const itemRendererSub = (item) => (
    <a
      className="flex align-items-center p-menuitem-link hover-link-sub"
    >
      <span className={item.icon} />
      <span className="mx-2 ">{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );
  const items = [
    {
      label: "Anasayfa",
      icon: "pi pi-home",
      template: itemRenderer,
      command: () => {
        window.location = "home";
      },
    },
    {
      label: "Piyasalar",
      icon: "pi pi-star",
      template: itemRenderer,
      command: () => {
        window.location = "markets";
      },
    },
    {
      label: "Sayfa 2",
      icon: "pi pi-cog",
      template: itemRenderer,
      items: [
        {
          label: "sub 1",
          icon: "pi pi-bolt",
          template: itemRendererSub,
        },
        {
          label: "sub 2",
          icon: "pi pi-server",
          template: itemRendererSub,
        },
        {
          label: "sub 3",
          icon: "pi pi-pencil",
          template: itemRendererSub,
        },
        {
          separator: true,
        },
        {
          label: "sub 4",
          icon: "pi pi-palette",
          items: [
            {
              label: "sub 4.1",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRendererSub,
            },
            {
              label: "sub 4.2",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRendererSub,
            },
          ],
        },
      ],
    },
    {
      label: "İletişim",
      icon: "pi pi-phone",
      template: itemRenderer,
      command: () => {
        window.location = "contact";
      },
    },
    {
        label: "Mesaj",
        icon: "pi pi-envelope",
        badge:4,
        template: itemRenderer,
        command: () => {
        //   window.location = "contact";
        },
      },
  ];

  const start = (
    <img alt="logo" src={Logo} height="90" className="mr-2 smallLogo "></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card ">
      <Menubar
        model={items}
        start={start}
        end={end}
        style={{ backgroundColor: "#14222E" }}
      />
    </div>
  );
}
