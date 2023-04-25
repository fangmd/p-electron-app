import { useRecoilValue } from 'recoil'
import { userAtom } from '../../state/user/state'

export const MinePage: React.FC = () => {
  const user = useRecoilValue(userAtom)

  return (
    <div>
      MinePage
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}
