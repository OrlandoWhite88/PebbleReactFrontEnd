import PropertyHover from "./PropertyHover";
import styles from "./SettingsMenuSection.module.css";

const SettingsMenuSection = ({
  onMenuItemContainer12Click,
  onMenuItemContainer22Click,
  onMenuItemContainer32Click,
}) => {
  return (
    <div className={styles.settingsSection}>
      <div className={styles.heading}>
        <div className={styles.settings}>Settings</div>
      </div>
      <div className={styles.menuItemParent}>
        <div className={styles.menuItem}>
          <div className={styles.usage}>
            <img className={styles.icon} alt="" src="/Usage Icon@2x.png" />
          </div>
          <div className={styles.training}>Usage</div>
        </div>
        <PropertyHover
          trainingCode="/Pricing Icon@2x.png"
          trainingDescription="Pricing"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainer1Click}
        />
        <PropertyHover
          trainingCode="/Docs Icon@2x.png"
          trainingDescription="Docs"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainer2Click}
        />
        <PropertyHover
          trainingCode="/Settings Icon@2x.png"
          trainingDescription="Settings"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainer3Click}
        />
      </div>
    </div>
  );
};

export default SettingsMenuSection;
