/* SVG/FILE */
import AlertCircleBoldSVG from './file/AlertCircleBoldSVG';
import AlertCircleSVG from './file/AlertCircleSVG';
import ArrowDownBoldSVG from './file/ArrowDownBoldSVG';
import ArrowDownSVG from './file/ArrowDownSVG';
import ArrowLeftSVG from './file/ArrowLeftSVG';
import ArrowRightSVG from './file/ArrowRightSVG';
import ArrowUpBoldSVG from './file/ArrowUpBoldSVG';
import ArrowUpSVG from './file/ArrowUpSVG';
import CalendarSVG from './file/CalendarSVG';
import CancelCircleFillSVG from './file/CancelCircleFillSVG';
import CheckCircleSVG from './file/CheckCircleSVG';
import CheckSVG from './file/CheckSVG';
import CloseSVG from './file/CloseSVG';
import DownloadSVG from './file/DownloadSVG';
import EditSVG from './file/EditSVG';
import HelpCircleFillSVG from './file/HelpCircleFillSVG';
import HistorySVG from './file/HistorySVG';
import HomeSVG from './file/HomeSVG';
import InfoCircleSVG from './file/InfoCircleSVG';
import LogoutSVG from './file/LogoutSVG';
import MinusSVG from './file/MinusSVG';
import PlusSVG from './file/PlusSVG';
import PrinterSVG from './file/PrinterSVG';
import RefreshSVG from './file/RefreshSVG';
import SaveSVG from './file/SaveSVG';
import SearchSVG from './file/SearchSVG';
import ShareSVG from './file/ShareSVG';
import SortAscendingSVG from './file/SortAscendingSVG';
import SortDescendingSVG from './file/SortDescendingSVG';
import SortingSVG from './file/SortingSVG';
import TrashSVG from './file/TrashSVG';
import UserCircleSVG from './file/UserCircleSVG';
import ViewDocumentSVG from './file/ViewDocumentSVG';
/* SVG/FILE */

/* Image SVG Components */
import ImageEmptySVG from './file/ImageEmptySVG';
import ImageNodataSVG from './file/ImageNodataSVG';
import ImageProfileCircleSVG from './file/ImageProfileCircleSVG';
import ImageTTBLogoSVG from './file/ImageTTBLogoSVG';
// import ImageEmptySVG from '@/static/images/img_empty.svg';
// import ImageNodataSVG from '@/static/images/img_nodata.svg';
// import ImageProfileCircleSVG from '@/static/images/img_profile_circle.svg';
// import ImageTTBLogoSVG from '@/static/images/img_ttb_logo.svg';

/* Image SVG Components */

export const IconComponent = ({ ...rest }: any) => {
  const { icon } = rest;
  switch (icon) {
    /* Svg */
    case 'alert_circle_bold':
      return <AlertCircleBoldSVG {...rest} />;
    case 'alert_circle':
      return <AlertCircleSVG {...rest} />;
    case 'arrow_down_bold':
      return <ArrowDownBoldSVG {...rest} />;
    case 'arrow_down':
      return <ArrowDownSVG {...rest} />;
    case 'arrow_left':
      return <ArrowLeftSVG {...rest} />;
    case 'arrow_right':
      return <ArrowRightSVG {...rest} />;
    case 'arrow_up_bold':
      return <ArrowUpBoldSVG {...rest} />;
    case 'arrow_up':
      return <ArrowUpSVG {...rest} />;
    case 'calendar':
      return <CalendarSVG {...rest} />;
    case 'cancel_circle_fill':
      return <CancelCircleFillSVG {...rest} />;
    case 'check_circle':
      return <CheckCircleSVG {...rest} />;
    case 'check':
      return <CheckSVG {...rest} />;
    case 'close':
      return <CloseSVG {...rest} />;
    case 'download':
      return <DownloadSVG {...rest} />;
    case 'edit':
      return <EditSVG {...rest} />;
    case 'help_circle_fill':
      return <HelpCircleFillSVG {...rest} />;
    case 'history':
      return <HistorySVG {...rest} />;
    case 'home':
      return <HomeSVG {...rest} />;
    case 'info_circle':
      return <InfoCircleSVG {...rest} />;
    case 'logout':
      return <LogoutSVG {...rest} />;
    case 'minus':
      return <MinusSVG {...rest} />;
    case 'plus':
      return <PlusSVG {...rest} />;
    case 'printer':
      return <PrinterSVG {...rest} />;
    case 'refresh':
      return <RefreshSVG {...rest} />;
    case 'save':
      return <SaveSVG {...rest} />;
    case 'search':
      return <SearchSVG {...rest} />;
    case 'share':
      return <ShareSVG {...rest} />;
    case 'sort_ascending':
      return <SortAscendingSVG {...rest} />;
    case 'sort_descending':
      return <SortDescendingSVG {...rest} />;
    case 'sorting':
      return <SortingSVG {...rest} />;
    case 'trash':
      return <TrashSVG {...rest} />;
    case 'user_circle':
      return <UserCircleSVG {...rest} />;
    case 'view_document':
      return <ViewDocumentSVG {...rest} />;
    /* Svg */

    /* Img */
    case 'img_empty_svg':
      return <ImageEmptySVG {...rest} />;
    case 'img_nodata_svg':
      return <ImageNodataSVG {...rest} />;
    case 'img_profile_circle':
      return <ImageProfileCircleSVG {...rest} />;
    case 'img_ttb_logo':
      return <ImageTTBLogoSVG {...rest} />;
    /* Img */
    default:
      return null;
  }
};
