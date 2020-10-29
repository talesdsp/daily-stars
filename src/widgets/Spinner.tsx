const Spinner: React.FC = () => {
  return (
    <>
      <div className="loader" aria-label="loading data" />
      <style jsx>
        {`
          .loader,
          .loader:before,
          .loader:after {
            background: #ffffff;
            animation: load1 1s infinite ease-in-out;
            width: 1em;
            height: 4em;
          }
          .loader {
            color: #ffffff;
            margin: 20% auto;
            position: relative;
            font-size: 11px;
            transform: translateZ(0);
            animation-delay: -0.16s;
          }
          .loader:before,
          .loader:after {
            position: absolute;
            top: 0;
            content: "";
          }
          .loader:before {
            transform: translateX(-1.5em);
            animation-delay: -0.32s;
          }
          .loader:after {
            transform: translateX(1.5em);
          }
          @keyframes load1 {
            0%,
            80%,
            100% {
              box-shadow: 0 0;
              height: 4em;
            }
            40% {
              box-shadow: 0 -2em;
              height: 5em;
            }
          }
        `}
      </style>
    </>
  );
};

export default Spinner;
