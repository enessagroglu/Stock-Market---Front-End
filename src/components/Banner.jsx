
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';
import Logo from '../assets/Adsız tasarım.png';

export default function Banner() {
    const itemRenderer = (item) => (
        <a className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Anasayfa',
            icon: 'pi pi-home',
            command: () => {
                window.location = "home";
            }
        },
        {
            label: 'Sayfa 1',
            icon: 'pi pi-star'
        },
        {
            label: 'Sayfa 2',
            icon: 'pi pi-search',
            items: [
                {
                    label: 'sub 1',
                    icon: 'pi pi-bolt',
                    template: itemRenderer
                },
                {
                    label: 'sub 2',
                    icon: 'pi pi-server',
                    template: itemRenderer
                },
                {
                    label: 'sub 3',
                    icon: 'pi pi-pencil',
                    template: itemRenderer
                },
                {
                    separator: true
                },
                {
                    label: 'sub 4',
                    icon: 'pi pi-palette',
                    items: [
                        {
                            label: 'sub 4.1',
                            icon: 'pi pi-palette',
                            badge: 2,
                            template: itemRenderer
                        },
                        {
                            label: 'sub 4.2',
                            icon: 'pi pi-palette',
                            badge: 3,
                            template: itemRenderer
                        }
                    ]
                }
            ]
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            template: itemRenderer,
            command: () => {
              window.location = "contact";
          }
        }
    ];

    const start = <img alt="logo" src={Logo} height="90" className="mr-2 smallLogo "></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/onyamalimba.png" shape="circle" />
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        