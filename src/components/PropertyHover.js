import { useMemo } from "react";
import styles from "./PropertyHover.module.css";

const PropertyHover = ({
  trainingCode,
  trainingDescription,
  property1HoverWidth,
  property1HoverAlignSelf,
  property1HoverBackgroundColor,
  property1HoverFlexWrap,
  property1HoverMinWidth,
  trainingColor,
  onMenuItemContainer2Click,
}) => {
  const property1HoverStyle = useMemo(() => {
    return {
      width: property1HoverWidth,
      alignSelf: property1HoverAlignSelf,
      backgroundColor: property1HoverBackgroundColor,
      flexWrap: property1HoverFlexWrap,
      minWidth: property1HoverMinWidth,
    };
  }, [
    property1HoverWidth,
    property1HoverAlignSelf,
    property1HoverBackgroundColor,
    property1HoverFlexWrap,
    property1HoverMinWidth,
  ]);

  const trainingStyle = useMemo(() => {
    return {
      color: trainingColor,
    };
  }, [trainingColor]);

  return (
    <div
      className={styles.property1hover}
      style={property1HoverStyle}
      onClick={onMenuItemContainer2Click}
    >
      <img className={styles.traningIcon} alt="" src={trainingCode} />
      <div className={styles.training} style={trainingStyle}>
        {trainingDescription}
      </div>
    </div>
  );
};

export default PropertyHover;
