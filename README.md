날짜/시간을 보며 오늘 할 일을 체크할 수 있는 웹사이트


useState, useRef, useCallback, react-dom, scss 사용.
classnames 라이브러리 사용.

import cn from 'classnames';

<div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}> 
className에 true에 해당하는 값은 추가로 표시가 가능, false가 된다면 className에 적용되지 않음.

 체크표시 되면 checkbox checked로 적용, checked가 false라면 checked가 적용이 되지 않아 checkbox만 className에 적용됨.
