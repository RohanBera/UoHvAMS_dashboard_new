import "./widgetLg.css";
import { faker } from '@faker-js/faker';

export default function WidgetLg() {
  const Button = ({ type }) => {
    var text = type == 'Approved' ? 'In' : 'Out';
    return <button className={"widgetLgButton " + type}>{text}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest entry</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Username</th>
          <th className="widgetLgTh">Time</th>
          <th className="widgetLgTh">Location</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src=
              {faker.image.people(100, 100, true)}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Anurag Peddi</span>
          </td>
          <td className="widgetLgDate">11:23 AM</td>
          <td className="widgetLgAmount">School of Computer and information Science</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={faker.image.people(100, 100, true)}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mahesh Chandra</span>
          </td>
          <td className="widgetLgDate">3:23 PM</td>
          <td className="widgetLgAmount">Hyderabad School of Progress</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
