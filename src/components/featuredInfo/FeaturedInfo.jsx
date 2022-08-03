import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Registered Users</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">73</span>
          <span className="featuredMoneyRate">
            13 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Present Today</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">56</span>
          <span className="featuredMoneyRate">
            -8 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to yesterday</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Left Today</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">11</span>
          <span className="featuredMoneyRate">
            +1 <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to this time yesterday</span>
      </div>
    </div>
  );
}
