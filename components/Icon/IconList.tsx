/* SVG */
import AlertCircleBold from "./svg/Alert-Circle-Bold.svg";
import AlertCircle from "./svg/Alert-Circle.svg";
import ArrowDownBold from "./svg/Arrow-Down-Bold.svg";
import ArrowDown from "./svg/Arrow-Down.svg";
import ArrowLeft from "./svg/Arrow-Left.svg";
import ArrowRight from "./svg/Arrow-Right.svg";
import ArrowUpBold from "./svg/Arrow-Up-Bold.svg";
import ArrowUp from "./svg/Arrow-Up.svg";
import Calendar from "./svg/Calendar.svg";
import CancelCircleFill from "./svg/Cancel-Circle-Fill.svg";
import CheckCircle from "./svg/Check-Circle.svg";
import Check from "./svg/Check.svg";
import Close from "./svg/Close.svg";
import Download from "./svg/Download.svg";
import Edit from "./svg/Edit.svg";
import HelpCircleFill from "./svg/Help-Circle-Fill.svg";
import History from "./svg/History.svg";
import Home from "./svg/Home.svg";
import InfoCircle from "./svg/Info-Circle.svg";
import Logout from "./svg/Logout.svg";
import Minus from "./svg/Minus.svg";
import Plus from "./svg/Plus.svg";
import Printer from "./svg/Printer.svg";
import Refresh from "./svg/Refresh.svg";
import Save from "./svg/Save.svg";
import Search from "./svg/Search.svg";
import Share from "./svg/Share.svg";
import SortAscending from "./svg/Sort-Ascending.svg";
import SortDescending from "./svg/Sort-Descending.svg";
import Sorting from "./svg/Sorting.svg";
import Trash from "./svg/Trash.svg";
import UserCircle from "./svg/User-Circle.svg";
import ViewDocument from "./svg/View-Document.svg";
/* SVG */

/* Image */
import ImgEmptyPng from "./image/Img-Empty.png";
import ImgEmptySvg from "./image/Img-Empty.svg";
import ImgNodataPng from "./image/Img-Nodata.png";
import ImgNodataSvg from "./image/Img-Nodata.svg";
import ImgProfileCircle from "./image/Img-Profile-Circle.svg";
/* Image */

/* SVG/FILE */
import AlertCircleBoldSVG from "./svg/file/AlertCircleBoldSVG";
import AlertCircleSVG from "./svg/file/AlertCircleSVG";
import ArrowDownBoldSVG from "./svg/file/ArrowDownBoldSVG";
import ArrowDownSVG from "./svg/file/ArrowDownSVG";

/* SVG/FILE */

export const iconList: Record<string, any> = {
  /* SVG */
  alert_circle_bold: AlertCircleBold,
  alert_circle: AlertCircle,
  arrow_down_bold: ArrowDownBold,
  arrow_down: ArrowDown,
  arrow_left: ArrowLeft,
  arrow_right: ArrowRight,
  arrow_up_bold: ArrowUpBold,
  arrow_up: ArrowUp,
  calendar: Calendar,
  cancel_circle_fill: CancelCircleFill,
  check_circle: CheckCircle,
  check: Check,
  close: Close,
  download: Download,
  edit: Edit,
  help_circle_fill: HelpCircleFill,
  history: History,
  home: Home,
  info_circle: InfoCircle,
  logout: Logout,
  minus: Minus,
  plus: Plus,
  printer: Printer,
  refresh: Refresh,
  save: Save,
  search: Search,
  share: Share,
  sort_ascending: SortAscending,
  sort_descending: SortDescending,
  sorting: Sorting,
  trash: Trash,
  user_circle: UserCircle,
  view_document: ViewDocument,
  /* SVG */

  /* Image */
  img_empty_png: ImgEmptyPng,
  img_empty_svg: ImgEmptySvg,
  img_nodata_png: ImgNodataPng,
  img_nodata_svg: ImgNodataSvg,
  img_profile_circle: ImgProfileCircle,
  /* Image */
};

export const IconComponent = ({icon, ...rest}: any) => {
  switch (icon) {
    case "alert_circle_bold":
      return <AlertCircleBoldSVG {...rest} />;
    case "alert_circle":
      return <AlertCircleSVG {...rest} />;
    case "arrow_down_bold":
      return <ArrowDownBoldSVG {...rest} />;
    case "arrow_down":
      return <ArrowDownSVG {...rest} />;
    default:
      return null;
  }
};
// export const iconListFile: Record<string, any> = {
//   alert_circle_bold_svg: AlertCircleBoldSVG,
//   alert_circle_svg: AlertCircleSVG,
//   arrow_down_bold_svg: ArrowDownBoldSVG,
//   arrow_down_svg: ArrowDownSVG,
// };
