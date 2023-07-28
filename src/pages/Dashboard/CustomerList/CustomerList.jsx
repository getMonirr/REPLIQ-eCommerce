import { Link } from "react-router-dom";
import SectionTitle from "../../../components/shared/SectionTitle";

const CustomerList = () => {
  return (
    <>
      <SectionTitle>Customer List</SectionTitle>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>
                <Link to="/dashboard/customer-details">
                  <button className="btn btn-warning btn-sm">details</button>
                </Link>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <td>
                <Link to="/dashboard/customer-details">
                  <button className="btn btn-warning btn-sm">details</button>
                </Link>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
              <td>
                <Link to="/dashboard/customer-details">
                  <button className="btn btn-warning btn-sm">details</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CustomerList;
