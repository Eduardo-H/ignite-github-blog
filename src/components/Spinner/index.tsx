import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { SpinnerContainer } from './styles';

export function Spinner() {
  return (
    <SpinnerContainer>
      <FontAwesomeIcon icon={faSpinner} />
    </SpinnerContainer>
  )
}