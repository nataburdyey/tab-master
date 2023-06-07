const BtnContainer = ({ jobs, currentItem, setCurrentItem }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <div
            key={job.id}
            onClick={() => setCurrentItem(index)}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </div>
        );
      })}
    </div>
  );
};
export default BtnContainer;
