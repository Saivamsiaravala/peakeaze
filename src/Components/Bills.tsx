import { bill } from "../assets";

const bills = [
  { id: 1, name: "Bill 1", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 2, name: "Bill 2", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 3, name: "Bill 3", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 4, name: "Bill 4", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 5, name: "Bill 5", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 6, name: "Bill 6", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 7, name: "Bill 7", date: "Nov 1 2019", money: 50.59, image: bill },
  { id: 8, name: "Bill 8", date: "Nov 1 2019", money: 50.59, image: bill },
];

const Bills = () => {
  return (
    <div className="bills">
      {bills.map((bill) => {
        return (
          <div className="bill" key={bill.id}>
            <img src={bill.image} alt="" />
            <div className="data">
              <div className="name">{bill.name}</div>
              <div className="date">Date: {bill.date}</div>
              <div className="money">₤ {bill.money}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bills;
