import {useState} from 'react';
import {List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {SideBarData} from "../data/SideBarData";
import { useRouter } from 'next/router'

const SideNavList = () => {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleListItemClick = (event, item, index) => {
    setSelectedIndex(index);
    router.push(item.path);
  };
  return (
    <List>
      {SideBarData.map((item, index) => {
        return (
          <ListItem disablePadding key={index} button>
            <ListItemButton selected={selectedIndex === index}
                            onClick={(event) => handleListItemClick(event, item, index)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.title}/>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  );
};

export default SideNavList;
