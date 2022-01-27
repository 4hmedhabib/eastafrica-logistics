import { FC, useCallback } from "react";
import { MenuItem, MenuList, ListItemIcon, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Routes
import { RouteType } from "../../routes";

interface Props {
  links: RouteType[];
}

const Menu: FC<Props> = ({ links }): JSX.Element => {
  const navigate = useNavigate();

  const navigatePath = useCallback((path) => navigate(path), []);
  console.log(links);

  return (
    <div>
      <MenuList>
        {links.map((link) => {
          <MenuItem key={link.path} onClick={() => navigatePath(link.path)}>
            {/* <ListItemIcon> {<link.icon fontSize="small" />} </ListItemIcon> */}
            <ListItemText> {link.label} </ListItemText>
          </MenuItem>;
        })}
      </MenuList>
    </div>
  );
};

export default Menu;
