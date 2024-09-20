import {
    BookText,
    PieChart,
    Grid3X3,
    Layers,
    Puzzle,
    Send,
    MapIcon,
    ClipboardList,
    Droplet,
    Pencil,
    Star,
    Calendar,
    Bell
  } from "lucide-react";

const sidebarItems = [
    {
      text: "THEME",
      items: [
        {
          text: "Color",
          icon: Droplet,
          link: "/color"
        },
        {
          text: "Topography",
          icon: Pencil,
          link: "/Topography"
        }
      ]
    },
    {
      text: "COMPONENTS",
      items: [
        {
          text: "Base",
          icon: Puzzle,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Accordion",
              link: "/base/accordion"
            },
            {
              text: "Breadcrumb",
              link: "/base/breadcrumbs"
            }
          ]
        },
        {
          text: "Buttons",
          icon: Send,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        },
        {
          text: "Forms",
          icon: BookText,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        },
        {
          text: "Icons",
          icon: Star,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        },
        {
          text: "Notifications",
          icon: Bell,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        },
        {
          text: "Widgets",
          icon: ClipboardList,
          link: "/",
          badge: "NEW"
        },
        {
          text: "Smart Table",
          icon: Grid3X3,
          link: "/",
          badge: "PRO"
        }
      ]
    },
    {
      text: "PLUGINS",
      items: [
        {
          text: "Calendar",
          icon: Calendar,
          link: "/calendar",
          badge: "PRO"
        },
        {
          text: "Charts",
          icon: PieChart,
          link: "/"
        },
        {
          text: "Google Maps",
          icon: MapIcon,
          link: "/",
          badge: "PRO"
        }
      ]
    },
    {
      text: "EXTRAS",
      items: [
        {
          text: "Pages",
          icon: Star,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        },
        {
          text: "Apps",
          icon: Layers,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "Color",
              link: "/color"
            },
            {
              text: "Topography",
              link: "/Topography"
            }
          ]
        }
      ]
    }
  ];
  

export default sidebarItems;