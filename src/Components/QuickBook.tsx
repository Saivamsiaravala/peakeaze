import { useState } from "react";
import { left, quickbook } from "../assets";

const QuickBook = () => {
  const [showComments, setShowComments] = useState(true);
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
              <label>Auto-sync</label>
            </div>
            <div className="save">
              <input type="checkbox" defaultChecked id="save" />
              <label>Save Config</label>{" "}
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
          <div className="block3">
            <div>Add {showComments ? <>Comment</> : <>Query</>}</div>
          </div>
        </section>
        <button className="three">
          <div>View Line Items</div>
        </button>
        <section className="four">
          <button className="left">
            <img src={left} />
          </button>
          <div className="title">Payment Details</div>
          <button className="right">
            <img src={left} />
          </button>
        </section>
        <section className="five">
          <div className="title">Payment Details</div>
          <div className="details">
            <div className="data">
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
              <select className="input"></select>
            </div>{" "}
            <div className="data">
              <div className="label">Currency</div>
              <select className="input"></select>
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
        <section className="six"></section>
        <section className="seven"></section>
        <section className="eight"></section>
      </section>
    </div>
  );
};

export default QuickBook;
