export default function RightSideSpan({ id, children, claculatedTip }) {
  return (
    <>
      <span className="right-side-span">
        <div>
          <h2 className="right-side-h2">{children}</h2>
          <p className="right-side-p">/ person</p>
        </div>
        <div>
          <div id={id}>{claculatedTip}</div>
        </div>
      </span>
    </>
  );
}
