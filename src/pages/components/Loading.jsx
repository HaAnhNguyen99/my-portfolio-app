const Loading = () => {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '200px',
        height: '200px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        aria-label="Loading">
        <rect width="24" height="24" fill="none" />
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)">
          <animateTransform
            id="svgSpinnersPulseRings20"
            attributeName="transform"
            begin="0;svgSpinnersPulseRings21.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="translate"
            values="12 12;0 0"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            begin="0;svgSpinnersPulseRings21.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="scale"
            values="0;1"
          />
          <animate
            attributeName="opacity"
            begin="0;svgSpinnersPulseRings21.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </path>
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
          transform="matrix(0 0 0 0 12 12)">
          <animateTransform
            id="svgSpinnersPulseRings21"
            attributeName="transform"
            begin="svgSpinnersPulseRings20.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="translate"
            values="12 12;0 0"
          />
          <animateTransform
            additive="sum"
            attributeName="transform"
            begin="svgSpinnersPulseRings20.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            type="scale"
            values="0;1"
          />
          <animate
            attributeName="opacity"
            begin="svgSpinnersPulseRings20.begin+0.6s"
            calcMode="spline"
            dur="1.2s"
            keySplines=".52,.6,.25,.99"
            values="1;0"
          />
        </path>
      </svg>
    </div>
  );
};

export default Loading;
