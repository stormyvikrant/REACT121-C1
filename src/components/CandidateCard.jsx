import styles from "./CandidateCard.module.css";

function CandidateCard({}) {
  return (
    <div data-testid="candidate-container" className={styles.container}>
      <img alt="logo" width="100px" height="100px" />
      <div>
        <div>Name:</div>
        <div>Title & Company Name</div>
      </div>
      <div>$ Salary</div>
    </div>
  );
}

export default CandidateCard;
