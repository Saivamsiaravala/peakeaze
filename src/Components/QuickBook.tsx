import { useState } from "react";
import { left, quickbook } from "../assets";

const QuickBook = () => {
  const [showComments, setShowComments] = useState(true);
  const [leftEnabled, setleftEnabled] = useState(true);
  return (
    <div className="quickbook">
      <section className="container">
        <section className="one">
          <div className="title">
            <img src={quickbook} alt="" />
            <div className="block">
              <div className="block1">Quickbook</div>
              <div className="block2">
                <div>16 June, 2024</div>
                <div>8:15 PM</div>
              </div>
              {/* <div className="block3"></div> */}
            </div>
          </div>
          <div className="status-div">
            <div className="status">Publishing...</div>
            <div className="author">Jimmy Jason</div>
          </div>
          <div className="checks">
            <div className="sync">
              <input type="checkbox" defaultChecked id="sync" />
              <label htmlFor="sync">Auto-sync</label>
            </div>
            <div className="save">
              <input type="checkbox" defaultChecked id="save" />
              <label htmlFor="save">Save Config</label>{" "}
            </div>
          </div>
        </section>
        <section className="two">
          <div className="links">
            <button
              className={showComments ? "active btn" : "btn"}
              onClick={() => setShowComments(true)}
            >
              <div className="title">Comment</div>
            </button>
            <button
              className={!showComments ? "active btn" : "btn"}
              onClick={() => setShowComments(false)}
            >
              <div className="title">Query </div>
            </button>
          </div>
          <div className="block2">
            <div>
              <div className="title">
                <div>Type {showComments ? <>Comment</> : <>Query</>}</div>
                <input
                  type="text"
                  placeholder="Start typing..."
                  className="input"
                />
              </div>
            </div>
          </div>
          <button
            className="block3"
            onClick={() => window.alert("Button clicked")}
          >
            <div>Add {showComments ? <>Comment</> : <>Query</>}</div>
          </button>
        </section>
        <button
          className="three"
          onClick={() => window.alert("Button clicked")}
        >
          <div>View Line Items</div>
        </button>
        <section className="four">
          <button
            className="left"
            onClick={() => window.alert("Button clicked")}
          >
            <img src={left} />
          </button>
          <div className="title">Payment Details</div>
          <button
            className="right"
            onClick={() => window.alert("Button clicked")}
          >
            <img src={left} />
          </button>
        </section>
        <section className="five">
          <div className="title">Payment Details</div>
          <div className="details">
            <div className="radio">
              <label>
                Paid
                <input type="radio" name="status" defaultChecked />
              </label>
              <label>
                Unpaid
                <input type="radio" name="status" />
              </label>
            </div>
            <div className="data one">
              <div className="label">Bill Number</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>
            <div className="data">
              <div className="label">Bill Date</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>
            <div className="data">
              <div className="label">Paid Amount</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Paid Date</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Due Date</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Payment mode</div>
              <select className="input" defaultValue="">
                <option value="" disabled>
                  Select Payment Mode
                </option>
                <option value="Card">Card</option>
                <option value="UPI">UPI</option>
              </select>
            </div>
            <div className="data">
              <div className="label">Currency</div>
              <select className="input" defaultValue="">
                <option value="" disabled>
                  Select Currency
                </option>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
              </select>
            </div>{" "}
            <div className="data">
              <div className="label">Bank Transaction Ref</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Total Amount</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Tax Amount</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>{" "}
            <div className="data">
              <div className="label">Total Amount(GBP)</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>
            <div className="data">
              <div className="label">Tax Amount(GBP)</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>
            <div className="data">
              <div className="label">FX Rate</div>
              <input
                type="text"
                placeholder="Start Typing..."
                className="input"
              ></input>
            </div>
          </div>
        </section>
        <section className="six">
          <div className="title">Description</div>
          <div className="options">
            <div className="radio">
              <div className="item">Line item</div>
              <div className="buttons">
                <label htmlFor="" className="label">
                  <input type="radio" name="item" defaultChecked />
                  Single
                </label>
                <label htmlFor="" className="label">
                  <input type="radio" name="item" />
                  Multiple
                </label>
              </div>
            </div>
            <div className="description">
              <div className="title">Description</div>
              <input className="input" placeholder="Enter Description" />
            </div>
          </div>
        </section>
        <section className="seven">
          <button className="left" onClick={() => setleftEnabled(true)}>
            <img src={left} alt="" />
          </button>
          <div className="centre">
            <div className={leftEnabled ? "active one" : "one"}></div>
            <div className={!leftEnabled ? "active two" : "two"}></div>
          </div>
          <button className="right" onClick={() => setleftEnabled(false)}>
            <img src={left} alt="" />
          </button>
        </section>
        <section className="eight">
          <button
            className="save"
            onClick={() => window.alert("Button clicked")}
          >
            <div>Save</div>
          </button>
          <div>
            <select className="options">
              <option value="publish">Publish</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </div>
        </section>
      </section>
    </div>
  );
};

export default QuickBook;
