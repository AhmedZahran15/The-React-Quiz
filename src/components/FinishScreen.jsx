function FinishScreen({ points, maxPoints, highscore, dispatch }) {
  const percentage = Math.ceil((points / maxPoints) * 100);
  let emoji;
  if (percentage === 100) emoji = "🥳";
  if (percentage < 100 && percentage >= 80) emoji = "😎";
  if (percentage < 80 && percentage >= 60) emoji = "🙂";
  if (percentage < 60 && percentage >= 40) emoji = "😕";
  if (percentage < 40 && percentage >= 20) emoji = "😟";
  if (percentage < 20) emoji = "😭";
  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} out of {maxPoints} points! (
        {percentage}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
