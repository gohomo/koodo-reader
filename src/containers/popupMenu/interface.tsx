import BookModel from "../../model/Book";
import HighlighterModel from "../../model/Highlighter";
export interface PopupMenuProps {
  currentEpub: any;
  currentBook: BookModel;
  highlighters: HighlighterModel[];
  isOpenMenu: boolean;
  isChangeDirection: boolean;
  menuMode: string;
  handleMessageBox: (isShow: boolean) => void;
  handleMessage: (message: string) => void;
  handleOpenMenu: (isOpenMenu: boolean) => void;
  handleMenuMode: (menu: string) => void;
  handleChangeDirection: (isChangeDirection: boolean) => void;
}