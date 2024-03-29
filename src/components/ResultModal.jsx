import {forwardRef, useImperativeHandle, useRef} from 'react';

const ResultModal = forwardRef(function ResultModal({result, targetTime}, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    // dialog 는 기본값이 close라 open 이라는 것을 넣어줘야함
    <dialog ref={dialog} className="result-modal">
      <h2>You {result}</h2>
      <p>The target time was {targetTime} seconds.</p>
      <p>You Stop the timer with X seconds lefts</p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
