import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { Badge } from "primereact/badge";
import Logo from "../assets/transparent_background_image.png";
import 'primeicons/primeicons.css';

const HamburgerMenu = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const itemRenderer = (item) => (
    <a
      className="flex align-items-center p-menuitem-link hover-link"
      onClick={() => handleMenuClick(item)}
    >
      {item.icon && <span className={item.icon} />}
      <span className="mx-2">{item.label}</span>
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
      label: "Sektörler",
      icon: "pi pi-building",
      template: itemRenderer,
      command: () => {
        window.location = "sektorler";
      },
    },
    {
      label: "Hisse Senetleri",
      icon: "pi pi-dollar",
      template: itemRenderer,
      command: () => {
        window.location = "hisse-senetleri";
      },
      // items: [
      //   {
      //     label: "sub 1",
      //     icon: "pi pi-bolt",
      //     template: itemRenderer,
      //   },
      //   {
      //     label: "sub 2",
      //     icon: "pi pi-server",
      //     template: itemRenderer,
      //   },
      //   {
      //     label: "sub 3",
      //     icon: "pi pi-pencil",
      //     template: itemRenderer,
      //   },
      //   {
      //     separator: true,
      //   },
      //   {
      //     label: "sub 4",
      //     icon: "pi pi-palette",
      //     items: [
      //       {
      //         label: "sub 4.1",
      //         icon: "pi pi-palette",
      //         badge: 2,
      //         template: itemRenderer,
      //       },
      //       {
      //         label: "sub 4.2",
      //         icon: "pi pi-palette",
      //         badge: 3,
      //         template: itemRenderer,
      //       },
      //     ],
      //   },
      // ],
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
      badge: 4,
      template: itemRenderer,
      command: () => {
        //   window.location = "contact";
      },
    },
  ];

  const handleMenuClick = (item) => {
    if (item.command) {
      item.command();
    }
    setMobileMenuVisible(false); // Menü öğesine tıklandığında mobil menüyü kapat
  };

  return (
    <div>
      <div className="flex align-items-center gap-2">
        <button
          className="p-button p-button-text p-d-flex p-jc-center p-ai-center"
          onClick={toggleMobileMenu}
          style={{ zIndex: "999" }}
        >
          <span className="pi pi-bars" style={{ fontSize: "1.5rem" }}></span>
        </button>
      </div>
      {mobileMenuVisible && (
        <div
          className="p-shadow-16"
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "0",
            width: "15%",
            backgroundColor: "#14222E",
            zIndex: "998",
          }}
        >
          <Menubar model={items} style={{ backgroundColor: "#14222E", border: 'none', paddingTop:"80px", maxWidth:"200px"}} />
          <div style={{ position: "absolute", bottom: "20px", left: "95px", color: "white", fontSize: "0.8rem" }}>
            Stock Market 2024
          </div>
          <div style={{ position: "absolute", bottom: "50px", left: "110px" }}>
            <img alt="logo" src={Logo} height="90" className="mr-2 smallLogo"  />
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;