import { useCallback } from "react";
import Menu from "../components/Menu";
import styles from "./Training.module.css";

const Training = () => {
  const onButtonClick = useCallback(() => {
    // Please sync "Training Flow-01 Upload Code" to the project
  }, []);

  const onButton1Click = useCallback(() => {
    window.open("https://example.com");
  }, []);

  return (
    <div className={styles.training}>
      <Menu />
      <main className={styles.mainContent} id="Training Body">
        <div className={styles.getStartedWith}>
          Get started with ML training
        </div>
        <div className={styles.contentAL}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.svg}>
                <div className={styles.frame}>
                  <div className={styles.logoDark82b2cc7df5d987ca34bf}>
                    <div className={styles.logoDark82b2cc7df5d987ca34bf1}>
                      <img
                        className={styles.logoDark82b2cc7df5d987ca34bfIcon}
                        alt=""
                        src="/Logo Icon@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.uploadCodeAnd}>
                Upload Code and get started in 2 seconds
              </div>
            </div>
            <div className={styles.justLinkYourContainer}>
              <p
                className={styles.justLinkYour}
              >{`Just link your code, specify length of training and we will do the rest. See the `}</p>
              <p className={styles.justLinkYour}>
                price upfornt and only pay per the second
              </p>
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.heading1}>
              <img
                className={styles.svgIcon}
                alt=""
                src="/People Icon@2x.png"
              />
              <div className={styles.upTo100}>
                Up to 100 Trillion parameters and up to 100M+ GPUS’s avaliable
              </div>
            </div>
            <div className={styles.justLinkYourContainer}>
              <p className={styles.justLinkYour}>
                We can train a model of any size across our vast network of GPUs
                meaning you can go from drag
              </p>
              <p className={styles.justLinkYour}>
                and drop to trained model in just a few clicks.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttonsAL}>
          <button className={styles.button} onClick={onButtonClick}>
            <div className={styles.startNow}>Start Now</div>
          </button>
          <button className={styles.button1} onClick={onButton1Click}>
            <div className={styles.seeDocumentation}>See documentation</div>
            <img className={styles.svgIcon1} alt="" src="/svg@2x.png" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Training;
