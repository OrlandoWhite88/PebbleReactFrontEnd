import PropertyHover from "./PropertyHover";
import styles from "./GPUCloudMenuSection.module.css";

const GPUCloudMenuSection = ({
  onMenuItemContainer1Click,
  onMenuItemContainer2Click,
  onMenuItemContainer3Click,
}) => {
  return (
    <div className={styles.gpuCloudSection}>
      <div className={styles.heading}>
        <div className={styles.gpuCloud}>GPU cloud</div>
      </div>
      <div className={styles.menuItemParent}>
        <PropertyHover
          trainingCode="/Menu Icon@2x.png"
          trainingDescription="Training"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="#262626"
          property1HoverFlexWrap="unset"
          property1HoverMinWidth="var(--number-2)"
          trainingColor="#b45aff"
        />
        <PropertyHover
          trainingCode="/Train icon@2x.png"
          trainingDescription="Deployment"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainer1Click}
        />
        <PropertyHover
          trainingCode="/File System Icon@2x.png"
          trainingDescription="File System"
          property1HoverWidth="unset"
          property1HoverAlignSelf="stretch"
          property1HoverBackgroundColor="unset"
          property1HoverFlexWrap="wrap"
          property1HoverMinWidth="37px"
          trainingColor="#b5b5b5"
          onMenuItemContainer2Click={onMenuItemContainer2Click}
        />
        <PropertyHover
          trainingCode="/API Keys Icon@2x.png"
          trainingDescription="API Keys"
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

export default GPUCloudMenuSection;
