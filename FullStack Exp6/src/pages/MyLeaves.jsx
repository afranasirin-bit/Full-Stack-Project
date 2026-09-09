import "../styles/MyLeaves.css";
import Navbar from "../components/Navbar";

function MyLeaves() {
  return (
    <>
      <Navbar />

      <div className="my-leaves">
        <h1>My Leaves</h1>

        <table>
          <thead>
            <tr>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Casual Leave</td>
              <td>12-08-2026</td>
              <td>13-08-2026</td>
              <td>Approved</td>
            </tr>

            <tr>
              <td>Medical Leave</td>
              <td>20-08-2026</td>
              <td>22-08-2026</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MyLeaves;