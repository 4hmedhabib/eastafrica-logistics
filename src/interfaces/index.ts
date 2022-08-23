export interface Menu {
  title: string;
  link: string;
  subMenu: {
    title: string;
    link: string;
  }[];
}
