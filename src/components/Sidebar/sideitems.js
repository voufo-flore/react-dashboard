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
            },
            {
              text: "Cards",
              link: "/base/cards"
            },
            {
              text: "Carousels",
              link: "/base/carousels"
            },
            {
              text: "Collapses",
              link: "/base/collapses"
            },
            {
              text: "ListGroups",
              link: "/base/listgroups"
            },
            {
              text: "Navbars",
              link: "/base/navbars"
            },
            {
              text: "Pagination",
              link: "/base/pagination"
            },
            {
              text: "PopOvers",
              link: "/base/popovers"
            },
            {
              text: "Progress",
              link: "/base/progress"
            },
            {
              text: "Spinners",
              link: "/base/spinners"
            },
            {
              text: "Tables",
              link: "/base/tables"
            },
            {
              text: "Tooltips",
              link: "/base/tooltips"
            },
          ]
        },
        {
          text: "Buttons",
          icon: Send,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "ButtonGroups",
              link: "/buttongroups"
            },
            {
              text: "Buttons",
              link: "/buttons"
            },
            {
              text: "Dropdowns",
              link: "/dropdowns"
            },
          ]
        },
        {
          text: "Forms",
          icon: BookText,
          link: "/",
          dropdown: true,
          elements: [
            {
              text: "ChecksRadios",
              link: "/checksradios"
            },
            {
              text: "FloatingLabels",
              link: "/floatinglabels"
            },
            {
              text: "FormControl",
              link: "/formcontrol"
            },
            {
              text: "InputGroup",
              link: "/inputgroup"
            },
            {
              text: "Layout",
              link: "/layout"
            },
            {
              text: "Range",
              link: "/range"
            },
            {
              text: "Select",
              link: "/select"
            },
            {
              text: "Validation",
              link: "/validation"
            },
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
              text: "Alerts",
              link: "/alerts"
            },
            {
              text: "Badges",
              link: "/badges"
            },
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
        },
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
          link: "/google maps",
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
              text: "Login",
              link: "/login"
            },
            {
              text: "Page404",
              link: "/page404"
            },
            {
              text: "Page500",
              link: "/Page500"
            },
            {
              text: "Register",
              link: "/register"
            },
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