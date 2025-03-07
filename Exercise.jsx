import "../styles/Exercise.css";
import exercise1 from "../assets/one-hand.gif";
import exercise2 from "../assets/two-hand.gif";
import exercise3 from "../assets/down-hand.gif";

const Exercise = () => {
  return (
    <div className="exercise-page">
      <div className="content">
      <img src={exercise1} alt="exercise-img" />
      <div>
        <h1>Dumbbell Front Raise</h1>
        <p>
          Description : The dumbbell lateral raise is an isolation exercise that
          emphasizes the engagement of the deltoid muscles in the shoulders.
          Also known as side raises, this exercise primarily utilizes the
          lateral deltoids to drive the dumbbells out to the sides.
        </p>
        <p>Sets x Reps : 3–5 X 4-6</p>
        <p>
          <strong>How To Do:-</strong>
          <li>Grab a dumbbell in each hand.</li>
          <li>Stand with feet shoulder-width apart. </li>
          <li>Maintain a slight bend in the elbows and straight wrists. </li>
          <li>Inhale and engage the core. </li>
          <li>
            Exhale and drive the dumbbells out to the sides with palms facing
            downward.{" "}
          </li>
          <li>Stop when you form a T with the arms. </li>
          <li>Slowly lower to the starting position.</li>
        </p>
      </div>
      <img src={exercise2} alt="exercise-img" />
      <div>
        <h1>Dumbbell Upright Row</h1>
        <p>
          Description : The dumbbell lateral raise is an isolation exercise that
          emphasizes the engagement of the deltoid muscles in the shoulders.
          Also known as side raises, this exercise primarily utilizes the
          lateral deltoids to drive the dumbbells out to the sides.
        </p>
        <p>Sets x Reps : 3–5 X 4-6</p>
        <p>
          <strong>How To Do:-</strong>
          <li>Grab a dumbbell in each hand.</li>
          <li>Stand with feet shoulder-width apart. </li>
          <li>Maintain a slight bend in the elbows and straight wrists. </li>
          <li>Inhale and engage the core. </li>
          <li>
            Exhale and drive the dumbbells out to the sides with palms facing
            downward.{" "}
          </li>
          <li>Stop when you form a T with the arms. </li>
          <li>Slowly lower to the starting position.</li>
        </p>
      </div>
      <img src={exercise3} alt="exercise-img" />
      <div>
        <h1>Face Pull</h1>
        <p>
          Description : The dumbbell lateral raise is an isolation exercise that
          emphasizes the engagement of the deltoid muscles in the shoulders.
          Also known as side raises, this exercise primarily utilizes the
          lateral deltoids to drive the dumbbells out to the sides.
        </p>
        <p>Sets x Reps : 3–5 X 4-6</p>
        <p>
          <strong>How To Do:-</strong>
          <li>Grab a dumbbell in each hand.</li>
          <li>Stand with feet shoulder-width apart. </li>
          <li>Maintain a slight bend in the elbows and straight wrists. </li>
          <li>Inhale and engage the core. </li>
          <li>
            Exhale and drive the dumbbells out to the sides with palms facing
            downward.{" "}
          </li>
          <li>Stop when you form a T with the arms. </li>
          <li>Slowly lower to the starting position.</li>
        </p>
      </div>
      </div>
      <div className="footer"><p>Radient power Fitness - &copy; 2025 - All Rights Reserved</p></div>
    </div>
  );
};

export default Exercise;
