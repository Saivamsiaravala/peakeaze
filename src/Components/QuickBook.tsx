import { quickbook } from "../assets";
const QuickBook = () => {
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
              <input type="checkbox" checked />
              <label>Auto-sync</label>
            </div>
            <div className="save">
              <input type="checkbox" checked />
              <label>Save Config</label>{" "}
            </div>
          </div>
        </section>
        <section className="two"></section>
        <section className="three"></section>
        <section className="four"></section>
        <section className="five"></section>
        <section className="six"></section>
        <section className="seven"></section>
        <section className="eight"></section>
      </section>
    </div>
  );
};

export default QuickBook;
