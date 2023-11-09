const { BallTriangle } = require('react-loader-spinner');
const { useSelector } = require('react-redux');
const { selectorAppState } = require('Redux/appState/selectors');

export const Loader = () => {
  const { isLoading } = useSelector(selectorAppState);

  return (
    isLoading && (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    )
  );
};
