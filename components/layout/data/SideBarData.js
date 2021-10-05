import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from '@mui/icons-material/Person';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';
import MoneyIcon from '@mui/icons-material/Money';

export const SideBarData = [
  {
    title: "Overview",
    icon: <AssessmentIcon/>,
    path: "/overview"
  },
  {
    title: "Personal Information",
    icon: <PersonIcon/>,
    path: "/personal-information"
  },
  {
    title: "Income",
    icon: <AttachMoneyIcon/>,
    path: "/income"
  },
  {
    title: "Expenditure",
    icon: <MoneyOffIcon/>,
    path: "/expenditure"
  },
  {
    title: "Investment",
    icon: <MoneyIcon/>,
    path: "/investment"
  }
]