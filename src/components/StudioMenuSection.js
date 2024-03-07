import PropertyHover from "./PropertyHover";
import styles from "./StudioMenuSection.module.css";

const StudioMenuSection = ({ onMenuItemContainerClick }) => {
  return (
    <div className={styles.studioSection}>
      <div className={styles.heading}>
        <div className={styles.studio}>Studio</div>
      </div>
      <div className={styles.menuItemParent}>
        <PropertyHover
          trainingCode="/VS Code Studio Icon@2x.png"
          trainingDescription="VS Code Studio"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainerClick}
        />
        <PropertyHover
          trainingCode="/Juypter Notbook Icon@2x.png"
          trainingDescription="Juypter Notebook"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
        />
      </div>
    </div>
  );
};

export default StudioMenuSection;
