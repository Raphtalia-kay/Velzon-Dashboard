import { LayoutDashboard,CircleGauge, type LucideProps } from "lucide-react";
import { ChevronDown, Smartphone , LayoutPanelLeft } from "lucide-react";
export type MenuItem = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
  arrow: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  subItems?: SubItem[];
};
export type SubItem = {
  id: number;
  label: string;
  href: string;
  badge?: string;
};
export type PageItem = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
  arrow: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  subItems?: SubItem[];
};

export type ComponentItem = {
  id: number;
  name: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  href: string;
  arrow: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  subItems?: SubItem[];
};

export const menus: MenuItem[] = [
  {
    id: 1,
    icon: CircleGauge,
    name: "Dashboard",
    subItems : [
      {id : 1 , label : "Analytics", href : ""},
      { id: 2, label: "CRM" , href : ""},
      { id: 3, label: "Ecommerce",  href : "" },
      { id: 4, label: "Crypto" ,  href : "" },
      { id: 5, label: "Projects" ,  href : "" },
      { id: 6, label: "NFT" ,  href : "" },
      { id: 7, label: "Job",  href : "" },
      { id: 8, label: "Blog",  href : "",  badge: "New" }
    ],
    href: "",
    arrow: ChevronDown,
  },
   {
    id: 2,
    icon: Smartphone ,
    name: "Apps",
    subItems : [
      {id : 1 , label : "Analytics", href : ""},
      { id: 2, label: "CRM" , href : ""},
      { id: 3, label: "Ecommerce",  href : "" },
      { id: 4, label: "Crypto" ,  href : "" },
      { id: 5, label: "Projects" ,  href : "" },
      { id: 6, label: "NFT" ,  href : "" },
      { id: 7, label: "Job",  href : "" },
      { id: 8, label: "Blog",  href : "",  badge: "New" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 3,
    icon: LayoutPanelLeft,
    name: "Layouts",
    subItems : [
      {id : 1 , label : "Analytics", href : ""},
      { id: 2, label: "CRM" , href : ""},
      { id: 3, label: "Ecommerce",  href : "" },
      { id: 4, label: "Crypto" ,  href : "" },
      { id: 5, label: "Projects" ,  href : "" },
      { id: 6, label: "NFT" ,  href : "" },
      { id: 7, label: "Job",  href : "" },
      { id: 8, label: "Blog",  href : "",  badge: "New" }
    ],
    href: "",
    arrow: ChevronDown,
  },
];
export const pages: PageItem[] = [
  {
    id: 1,
    icon: LayoutDashboard,
    name: "Authentication",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
   {
    id: 2,
    icon: Smartphone ,
    name: "Pages",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 3,
    icon: LayoutPanelLeft,
    name: "Landing",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
];
export const components: ComponentItem[] = [
  {
    id: 1,
    icon: LayoutDashboard,
    name: "Base UI",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
   {
    id: 2,
    icon: Smartphone ,
    name: "Advance UI",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 3,
    icon: LayoutPanelLeft,
    name: "Widgets",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 4,
    icon: LayoutPanelLeft,
    name: "Forms",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 5,
    icon: LayoutPanelLeft,
    name: "Tables",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 6,
    icon: LayoutPanelLeft,
    name: "Charts",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 7,
    icon: LayoutPanelLeft,
    name: "Icons",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
  {
    id: 8,
    icon: LayoutPanelLeft,
    name: "Maps",
    subItems : [
      {id : 1 , label : "Sign in", href : ""},
      { id: 2, label: "Sign up" , href : ""},
      { id: 3, label: "Password reset",  href : "" },
      { id: 4, label: "Password create" ,  href : "" },
      { id: 5, label: "Lock Screen" ,  href : "" },
      { id: 6, label: "Logout" ,  href : "" },
      { id: 7, label: "Success Message",  href : "" },
      { id: 8, label: "Two Steps Verification",  href : "",  badge: "New" },
      { id: 9, label: "Errors",  href : "" }
    ],
    href: "",
    arrow: ChevronDown,
  },
];