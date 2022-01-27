import { Home, TableView, ConfirmationNumber } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export const MAIN = "/" as const;
export const BLOTTER = "/blotter" as const;
export const TRADETICKET = "/tradeticket" as const;

type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
};

export type RouteType = {
  label: string;
  icon: IconType;
  path: typeof MAIN | typeof BLOTTER | typeof TRADETICKET;
};

export const ROUTES: RouteType[] = [
  {
    label: "Home",
    path: MAIN,
    icon: Home,
  },
  {
    label: "Trade Blotter",
    path: BLOTTER,
    icon: TableView,
  },
  {
    label: "Tade Ticker",
    path: TRADETICKET,
    icon: ConfirmationNumber,
  },
];
