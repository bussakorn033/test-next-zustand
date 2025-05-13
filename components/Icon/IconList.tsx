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
import ImgEmptySVG from "./image/Img-Empty.svg";
import ImgNodataSVG from "./image/Img-Nodata.svg";
import ImgProfileCircleSVG from "./image/Img-Profile-Circle.svg";
import ImgTTBLogoSVG from "./image/Img-TTB-Logo.svg";
/* Image */

/* SVG/FILE */
import AlertCircleBoldSVG from "./file/AlertCircleBoldSVG";
import AlertCircleSVG from "./file/AlertCircleSVG";
import ArrowDownBoldSVG from "./file/ArrowDownBoldSVG";
import ArrowDownSVG from "./file/ArrowDownSVG";
import ArrowLeftSVG from "./file/ArrowLeftSVG";
import ArrowRightSVG from "./file/ArrowRightSVG";
import ArrowUpBoldSVG from "./file/ArrowUpBoldSVG";
import ArrowUpSVG from "./file/ArrowUpSVG";
import CalendarSVG from "./file/CalendarSVG";
import CancelCircleFillSVG from "./file/CancelCircleFillSVG";
import CheckCircleSVG from "./file/CheckCircleSVG";
import CheckSVG from "./file/CheckSVG";
import CloseSVG from "./file/CloseSVG";
import DownloadSVG from "./file/DownloadSVG";
import EditSVG from "./file/EditSVG";
import HelpCircleFillSVG from "./file/HelpCircleFillSVG";
import HistorySVG from "./file/HistorySVG";
import HomeSVG from "./file/HomeSVG";
import InfoCircleSVG from "./file/InfoCircleSVG";
import LogoutSVG from "./file/LogoutSVG";
import MinusSVG from "./file/MinusSVG";
import PlusSVG from "./file/PlusSVG";
import PrinterSVG from "./file/PrinterSVG";
import RefreshSVG from "./file/RefreshSVG";
import SaveSVG from "./file/SaveSVG";
import SearchSVG from "./file/SearchSVG";
import ShareSVG from "./file/ShareSVG";
import SortAscendingSVG from "./file/SortAscendingSVG";
import SortDescendingSVG from "./file/SortDescendingSVG";
import SortingSVG from "./file/SortingSVG";
import TrashSVG from "./file/TrashSVG";
import UserCircleSVG from "./file/UserCircleSVG";
import ViewDocumentSVG from "./file/ViewDocumentSVG";
/* SVG/FILE */

/* Image SVG Components */
import ImageEmptySVG from "./file/ImageEmptySVG";
import ImageNodataSVG from "./file/ImageNodataSVG";
import ImageProfileCircleSVG from "./file/ImageProfileCircleSVG";
import ImageTTBLogoSVG from "./file/ImageTTBLogoSVG";
/* Image SVG Components */

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
};

export const imgList: Record<string, any> = {
  /* Image */
  img_empty_svg: ImgEmptySVG,
  img_nodata_svg: ImgNodataSVG,
  img_profile_circle: ImgProfileCircleSVG,
  img_ttb_logo: ImgTTBLogoSVG,
  /* Image */
};

export const galleryList = {
  ...iconList,
  ...imgList,
};

export const IconComponent = ({...rest}: any) => {
  const {icon} = rest;
  switch (icon) {
    /* Svg */
    case "alert_circle_bold":
      return <AlertCircleBoldSVG {...rest} />;
    case "alert_circle":
      return <AlertCircleSVG {...rest} />;
    case "arrow_down_bold":
      return <ArrowDownBoldSVG {...rest} />;
    case "arrow_down":
      return <ArrowDownSVG {...rest} />;
    case "arrow_left":
      return <ArrowLeftSVG {...rest} />;
    case "arrow_right":
      return <ArrowRightSVG {...rest} />;
    case "arrow_up_bold":
      return <ArrowUpBoldSVG {...rest} />;
    case "arrow_up":
      return <ArrowUpSVG {...rest} />;
    case "calendar":
      return <CalendarSVG {...rest} />;
    case "cancel_circle_fill":
      return <CancelCircleFillSVG {...rest} />;
    case "check_circle":
      return <CheckCircleSVG {...rest} />;
    case "check":
      return <CheckSVG {...rest} />;
    case "close":
      return <CloseSVG {...rest} />;
    case "download":
      return <DownloadSVG {...rest} />;
    case "edit":
      return <EditSVG {...rest} />;
    case "help_circle_fill":
      return <HelpCircleFillSVG {...rest} />;
    case "history":
      return <HistorySVG {...rest} />;
    case "home":
      return <HomeSVG {...rest} />;
    case "info_circle":
      return <InfoCircleSVG {...rest} />;
    case "logout":
      return <LogoutSVG {...rest} />;
    case "minus":
      return <MinusSVG {...rest} />;
    case "plus":
      return <PlusSVG {...rest} />;
    case "printer":
      return <PrinterSVG {...rest} />;
    case "refresh":
      return <RefreshSVG {...rest} />;
    case "save":
      return <SaveSVG {...rest} />;
    case "search":
      return <SearchSVG {...rest} />;
    case "share":
      return <ShareSVG {...rest} />;
    case "sort_ascending":
      return <SortAscendingSVG {...rest} />;
    case "sort_descending":
      return <SortDescendingSVG {...rest} />;
    case "sorting":
      return <SortingSVG {...rest} />;
    case "trash":
      return <TrashSVG {...rest} />;
    case "user_circle":
      return <UserCircleSVG {...rest} />;
    case "view_document":
      return <ViewDocumentSVG {...rest} />;
    /* Svg */

    /* Img */
    case "img_empty_svg":
      return <ImageEmptySVG {...rest} />;
    case "img_nodata_svg":
      return <ImageNodataSVG {...rest} />;
    case "img_profile_circle":
      return <ImageProfileCircleSVG {...rest} />;
    case "img_ttb_logo":
      return <ImageTTBLogoSVG {...rest} />;
    /* Img */
    default:
      return null;
  }
};
