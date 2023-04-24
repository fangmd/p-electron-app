import { useRecoilValue } from "recoil"
import { userAtom } from "../../state/user/state"
import { useChangeUserName } from "@/state/user/hooks"
import PNG from "@/assets/img/D.png"
import "./index.less"

export const HomePage: React.FC = () => {
  const changeUserNameInner = useChangeUserName()
  const user = useRecoilValue(userAtom)

  return (
    <div className="HomePage__root">
      <a href="#/main_window/mine">
        <button>to mine</button>
      </a>

      {JSON.stringify(user)}

      <div className="title">title</div>
      <div className="img"></div>
      <img src={PNG} />

      <button
        onClick={() => {
          changeUserNameInner(1212)
        }}
      >
        change name
      </button>
    </div>
  )
}
