function Stepper({ stepsConfig = [] }) {
  return (
    <div>
      {stepsConfig.map((step, index) => {
        return (
          <div key={index}>
            <div>{index + 1}</div>
            <div>{step.name}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Stepper;
