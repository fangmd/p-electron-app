import { atom, selector } from "recoil"

interface User {
  name: string
}

/** 用户信息 */
export const userAtom = atom<User | undefined>({
  key: "user",
  default: { name: "12" },
})

/** 是否登录 */
const isLoginAtom = selector({
  key: "isLogin",
  get: ({ get }) => {
    const user = get(userAtom)
    return user?.name
  },
})
