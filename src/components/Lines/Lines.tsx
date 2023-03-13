import './Lines.scss';

export default function Lines() {
  return (
    <div className="box-lines">
      <hr className="central-line"></hr>
      <hr className="central-row-line"></hr>
      <hr
        className="line"
        style={{
          rotate: '90deg',
          left: '750px',
        }}
      />
      <hr
        className="line"
        style={{
          rotate: '90deg',
          right: '750px',
        }}
      />
    </div>
  );
}
