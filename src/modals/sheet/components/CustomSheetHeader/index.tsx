import sheetStyles from '../../index.module.css'; // CSS 모듈을 import
import { Sheet } from "react-modal-sheet";

const CustomSheetHeader = () => {
  return (
    <Sheet.Header>
      <div className={sheetStyles.sheet_header}>
        <div className={sheetStyles.sheet_indicator}></div>
      </div>
    </Sheet.Header>
  )
}

export default CustomSheetHeader;